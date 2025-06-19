import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return logout;
};