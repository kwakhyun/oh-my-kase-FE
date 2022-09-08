import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Oauth = () => {
  const location = useLocation();
  const search = location.search;
  const params = new URLSearchParams(search);

  localStorage.setItem("accessToken", params.get("Authorization"));
  localStorage.setItem("refreshToken", params.get("refresh-token"));

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      window.location.href = "/";
    }
  }, [accessToken, refreshToken]);

  return null;
};

export default Oauth;
