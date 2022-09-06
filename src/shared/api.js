import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.48.111/api",
  // headers: {
  //   "Content-Type": "application/json;charset=UTF-8",
  //   Authorization: localStorage.getItem("accessToken"),
  //   "refresh-token": localStorage.getItem("refreshToken"),
  // },

  // withCredentials: true,
});

// instance.defaults.headers.common["Authorization"] =
//   localStorage.getItem("accessToken");
// instance.defaults.headers.common["refresh-token"] =
//   localStorage.getItem("refreshToken");

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  // if (!accessToken) {
  //   config.headers.common["Authorization"] = null;
  // } else if (!refreshToken) {
  //   config.headers.common["refresh-token"] = null;
  // } else {
  //   config.headers.common["Authorization"] = accessToken;
  //   config.headers.common["refresh-token"] = refreshToken;
  //   return config;
  // }

  config.headers.common["Authorization"] = accessToken;
  config.headers.common["refresh-token"] = refreshToken;
  return config;
});

// instance.interceptors.response.use(() => {});

// axios 객체 사용
export const authAPI = {
  login: (email, password) => instance.post("api/login", { email, password }),

  join: (email, nickname, password) =>
    instance.post("api/join", { email, nickname, password }),
};

export const likedAPI = {
  getMyLiked: () => instance.get("/auth/member/mypage/favorite"),

  // cancelMyLiked: (restaurantId) =>
  //   instance.delete(`api/auth/member/mypage/favorite/${restaurantId}`),

  // getLiked: () => instance.get("api/auth/favorite"),

  // cancelLiked: (restaurantId) =>
  //   instance.delete(`api/auth/favorite/${restaurantId}`),
};

export const commentsAPI = {
  getMyComments: () => instance.get("/auth/memeber/mypage/comment"),

  // postComment: (restaurantId, comment) =>
  //   instance.post(`api/auth/restaurant/${restaurantId}/comment`, { comment }),

  // editComment: (commentId, comment) =>
  //   instance.put(`/api/auth/restaurant/comment/${commentId}`, { comment }),

  // deleteComment: (commentId) =>
  //   instance.delete(`api/auth/restaurant/comment/${commentId}`),
};

export const userAPI = {
  getMyInfo: () => instance.get("/auth/member/mypage/update"),

  editMyInfo: (nickname) =>
    instance.put("/auth/member/mypage/update", { nickname }),
};
