import axios from "axios";

// axios 객체 생성
const instance = axios.create({
  baseURL: "요청할 서버의 URL",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },

  withCredentials: true, // CORS 에러 방지
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!token) {
    config.headers.common["Authorization"] = null;
  } else {
    // config.headers.Authorization = `Bearer ${token}`;
    config.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
  }
});

// axios 객체 사용
export const authAPI = {
  login: (email, password) => instance.post("api/login", { email, password }),

  join: (email, nickname, password) =>
    instance.post("api/join", { email, nickname, password }),
};

export const likedAPI = {
  getLiked: () => instance.get("api/liked"),

  addLiked: (restaurantId) => instance.post("api/liked", { restaurantId }),

  deleteLiked: (restaurantId) => instance.delete("api/liked", { restaurantId }),
};

export const commentsAPI = {
  getComments: (restaurantId) => instance.get(`api/comments/${restaurantId}`),

  postComment: (restaurantId, comment) =>
    instance.post(`api/comments/${restaurantId}`, { comment }),

  editComment: (restaurantId, commentId, comment) =>
    instance.put(`api/comments/${restaurantId}/${commentId}`, { comment }),

  deleteComment: (restaurantId, commentId) =>
    instance.delete(`api/comments/${restaurantId}/${commentId}`),
};
