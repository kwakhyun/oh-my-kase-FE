import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const search = location.search;
  const params = new URLSearchParams(search);
  const isGoogle = true;

  localStorage.setItem("accessToken", params.get("Authorization"));
  localStorage.setItem("refreshToken", params.get("refresh-token"));
  localStorage.setItem("isGoogle", isGoogle);

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      navigate("/");
    }
  }, [accessToken, refreshToken, navigate]);

  return null;
};

export default OAuth;
