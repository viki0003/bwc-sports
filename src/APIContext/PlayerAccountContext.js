import React, { createContext, useContext, useState, useRef, useCallback } from "react";
import axiosInstance from "../Config/axios";
import { Toast } from "primereact/toast";

const PlayerAccountContext = createContext();
export const usePlayerAccount = () => useContext(PlayerAccountContext);

export const PlayerAccountProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const toastRef = useRef(null);

  const clearPlayers = () => setPlayers([]);

  const fetchPlayers = useCallback(async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "Access token missing. Please log in again.",
        life: 4000,
      });
      clearPlayers();
      localStorage.clear();
      window.location.href = "/login";
      return;
    }

    try {
      const response = await axiosInstance.get("/customer/player-account/");
      setPlayers(response.data);
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to fetch players";
      console.error("Fetch Players Error:", errorDetail);

      if (
        err.response?.status === 401 &&
        errorDetail === "Given token not valid for any token type"
      ) {
        toastRef.current?.show({
          severity: "warn",
          summary: "Session Expired",
          detail: "Please login again.",
          life: 3000,
        });
        clearPlayers();
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        toastRef.current?.show({
          severity: "error",
          summary: "Error",
          detail: errorDetail,
          life: 3000,
        });
      }
    }
  }, []);

  const createPlayer = async (playerData) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "Access token missing. Please log in again.",
        life: 4000,
      });
      clearPlayers();
      localStorage.clear();
      window.location.href = "/login";
      return { success: false, error: { detail: "Access token missing." } };
    }
    try {
      const response = await axiosInstance.post("/customer/player-account/", playerData);
      await fetchPlayers();
      return { success: true, data: response.data };
    } catch (err) {
      const errorDetail = err.response?.data || { detail: "Failed to create player" };
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail.detail || "Failed to create player",
        life: 4000,
      });
      if (
        err.response?.status === 401 &&
        errorDetail.detail === "Given token not valid for any token type"
      ) {
        toastRef.current?.show({
          severity: "warn",
          summary: "Session Expired",
          detail: "Please login again.",
          life: 3000,
        });
        clearPlayers();
        localStorage.clear();
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
      return { success: false, error: errorDetail };
    }
  };

  const editPlayer = async (playerId, playerData) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "Access token missing. Please log in again.",
        life: 4000,
      });
      clearPlayers();
      localStorage.clear();
      window.location.href = "/login";
      return { success: false, error: { detail: "Access token missing." } };
    }

    try {
      const response = await axiosInstance.patch(`/customer/player-account?id=${playerId}`, playerData);
      toastRef.current?.show({
        severity: "success",
        summary: "Updated",
        detail: "Player profile updated successfully.",
        life: 3000,
      });
      await fetchPlayers();
      return { success: true, data: response.data };
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to update player profile.";
      toastRef.current?.show({
        severity: "error",
        summary: "Update Failed",
        detail: errorDetail,
        life: 3000,
      });
      return { success: false, error: errorDetail };
    }
  };

  return (
    <PlayerAccountContext.Provider
      value={{ players, fetchPlayers, createPlayer, editPlayer }}
    >
      <Toast ref={toastRef} />
      {children}
    </PlayerAccountContext.Provider>
  );
};
