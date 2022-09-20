import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.48.111/api",

  // withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    config.headers.common["Authorization"] = null;
    config.headers.common["refresh-token"] = null;
  } else {
    config.headers.common["Authorization"] = accessToken;
    config.headers.common["refresh-token"] = refreshToken;
  }
  
  return config;
});

instance.interceptors.response.use((response) => {
  if (response.headers["authorization"]) {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", response.headers["authorization"]);
  } else if (response.data.error === "INVALID_TOKEN") {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    window.location.href = "/login";
  }
  return response;
});

export const myPageAPI = {
  getMyLiked: () => instance.get("/auth/member/mypage/favorite"),

  cancelMyLiked: (restaurant_id) =>
    instance.delete(`/auth/favorite/${restaurant_id}`),

  getMyComments: () => instance.get("/auth/member/mypage/comment"),

  getMyInfo: () => instance.get("/auth/member/mypage/update"),

  editMyInfo: (formData) =>
    instance.put("/auth/member/mypage/update", formData),
};

export const detailPageAPI = {
  getDetailData: (restaurantId) => instance.get(`/restaurant/${restaurantId}`),

  addFavorite: (restaurant_id) =>
    instance.post(`/auth/favorite/${restaurant_id}`),

  cancelFavorite: (restaurant_id) =>
    instance.delete(`/auth/favorite/${restaurant_id}`),

  postComment: (data) =>
    instance.post(`/auth/restaurant/${data.restaurant_id}/comment`, {
      star: data.star,
      content: data.content,
    }),

  editComment: (data) =>
    instance.put(`/auth/restaurant/comment/${data.comment_id}`, {
      star: data.star,
      content: data.content,
    }),

  deleteComment: (comment_id) =>
    instance.delete(`/auth/restaurant/comment/${comment_id}`),
};
