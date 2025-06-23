import React, { createContext, useEffect, useState, useCallback, useRef } from "react";
import axiosInstance from "../Config/axios";
import { Toast } from "primereact/toast";

export const ParentContext = createContext();

export const ParentProvider = ({ children }) => {
  const [parentProfiles, setParentProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toastRef = useRef(null);

  const fetchParents = useCallback(async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get("/customer/parent-account/");
      setParentProfiles(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.detail || "Failed to fetch parent profiles";
      setError(errorMessage);

      if (toastRef.current) {
        toastRef.current.show({
          severity: "error",
          summary: "Error",
          detail: errorMessage,
          life: 3000,
        });
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const addParent = async (formData) => {
    try {
      const response = await axiosInstance.post("/customer/parent-account/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await fetchParents();
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.detail || "Failed to create parent";
      if (toastRef.current) {
        toastRef.current.show({
          severity: "error",
          summary: "Error",
          detail: errorMessage,
          life: 3000,
        });
      }
      throw new Error(errorMessage);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchParents();
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchParents]);

  return (
    <ParentContext.Provider
      value={{
        parentProfiles,
        loading,
        error,
        fetchParents,
        addParent,
      }}
    >
      <Toast ref={toastRef} />
      {children}
    </ParentContext.Provider>
  );
};