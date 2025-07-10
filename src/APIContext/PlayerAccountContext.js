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
      const response = await axiosInstance.get("/customer/player-account/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setPlayers(response.data);
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to fetch players";
      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail,
        life: 3000,
      });
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

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    if (!(playerData instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    try {
      const response = await axiosInstance.post(
        "/customer/player-account/",
        playerData,
        { headers }
      );

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

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    if (!(playerData instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    try {
      const response = await axiosInstance.patch(
        `/customer/player-account?id=${playerId}`,
        playerData,
        { headers }
      );

      await fetchPlayers();

      toastRef.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Player updated successfully",
        life: 3000,
      });

      return { success: true, data: response.data };
    } catch (err) {
      const errorDetail = err.response?.data || { detail: "Failed to update player" };

      toastRef.current?.show({
        severity: "error",
        summary: "Error",
        detail: errorDetail.detail || "Failed to update player",
        life: 4000,
      });

      return { success: false, error: errorDetail };
    }
  };

  const deletePlayer = async (playerId) => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      toastRef.current?.show({
        severity: "error",
        summary: "Unauthorized",
        detail: "Access token missing. Please log in again.",
        life: 4000,
      });
      return { success: false };
    }

    try {
      await axiosInstance.delete(`/customer/player-account/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: { id: playerId },
      });

      toastRef.current?.show({
        severity: "success",
        summary: "Deleted",
        detail: "Player deleted successfully.",
        life: 3000,
      });

      await fetchPlayers();

      return { success: true };
    } catch (err) {
      const errorDetail = err.response?.data?.detail || "Failed to delete player";

      toastRef.current?.show({
        severity: "error",
        summary: "Delete Failed",
        detail: errorDetail,
        life: 4000,
      });

      return { success: false };
    }
  };

  return (
    <PlayerAccountContext.Provider
      value={{
        players,
        fetchPlayers,
        createPlayer,
        editPlayer,
        deletePlayer,
      }}
    >
      <Toast ref={toastRef} />
      {children}
    </PlayerAccountContext.Provider>
  );
};
