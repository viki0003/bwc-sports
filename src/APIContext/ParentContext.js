import React, { createContext, useEffect, useState, useRef } from "react";
import axiosInstance from "../Config/axios";
import { Toast } from "primereact/toast";
import { useLocation } from "react-router-dom";

export const ParentContext = createContext();

export const ParentProvider = ({ children, user }) => {
  const [parentProfile, setParentProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const toastRef = useRef(null);
  const location = useLocation();

  // ✅ Fetch current parent profile
  const fetchCurrentParent = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token || !user?.id) {
      setParentProfile(null);
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.get("/customer/parent-account/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && typeof response.data === "object") {
        setParentProfile(response.data);
      } else {
        setParentProfile(null);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || "Failed to fetch parent";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorMessage,
        life: 3000,
      });
      setParentProfile(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update parent profile (supports FormData and JSON)
  const updateParentProfile = async (updatedData) => {
    const token = localStorage.getItem("accessToken");

    if (!token || !user?.id) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "You must be logged in to update the profile.",
        life: 3000,
      });
      return { success: false };
    }

    const isFormData = updatedData instanceof FormData;

    try {
      const response = await axiosInstance.patch(
        "/customer/parent-account/",
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            ...(isFormData && { "Content-Type": "multipart/form-data" }),
          },
        }
      );

      setParentProfile(response.data);

      toastRef.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Profile updated successfully.",
        life: 3000,
      });

      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage =
        err.response?.data?.detail || "Failed to update profile.";

      toastRef.current?.show({
        severity: "error",
        summary: "Update Failed",
        detail: errorMessage,
        life: 3000,
      });

      return { success: false, message: errorMessage };
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCurrentParent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id, location.pathname]);

  return (
    <ParentContext.Provider
      value={{
        parentProfile,
        loading,
        fetchCurrentParent,
        updateParentProfile,
      }}
    >
      <Toast ref={toastRef} />
      {children}
    </ParentContext.Provider>
  );
};
