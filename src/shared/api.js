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
    return config;
  }
});

// instance.interceptors.response.use(() => {});

export const authAPI = {
  login: (email, password) => instance.post("api/login", { email, password }),

  join: (email, nickname, password) =>
    instance.post("api/join", { email, nickname, password }),
};

export const myPageAPI = {
  getMyLiked: () => instance.get("/auth/member/mypage/favorite"),
  // cancelMyLiked: (restaurantId) =>
  //   instance.delete(`api/auth/member/mypage/favorite/${restaurantId}`),
  getMyComments: () => instance.get("/auth/member/mypage/comment"),
  getMyInfo: () => instance.get("/auth/member/mypage/update"),
  editMyInfo: (formData) =>
    instance.put("/auth/member/mypage/update", formData),
};

export const detailPageAPI = {
  // getLiked: () => instance.get("api/auth/favorite"),

  // cancelLiked: (restaurantId) =>
  //   instance.delete(`api/auth/favorite/${restaurantId}`),

  // getComments: (restaurant_id) =>
  //   instance.get(`/auth/restaurant/${restaurant_id}`),

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

  deleteComment: (commentId) =>
    instance.delete(`/auth/restaurant/comment/${commentId}`),
};
