import axios from "axios";

// axios 객체 생성
const instance = axios.create({
  baseURL: "http://3.34.48.111/",
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
  getMyLiked: () => instance.get("api/auth/member/mypage/favorite"),

  cancelMyLiked: (restaurantId) =>
    instance.delete(`api/auth/member/mypage/favorite/${restaurantId}`),

  getLiked: () => instance.get("api/auth/favorite"),

  cancelLiked: (restaurantId) =>
    instance.delete(`api/auth/favorite/${restaurantId}`),
};

export const commentsAPI = {
  getMyComments: () => instance.get("api/auth/memeber/mypage/comment"),

  postComment: (restaurantId, comment) =>
    instance.post(`api/auth/restaurant/${restaurantId}/comment`, { comment }),

  editComment: (commentId, comment) =>
    instance.put(`/api/auth/restaurant/comment/${commentId}`, { comment }),

  deleteComment: (commentId) =>
    instance.delete(`api/auth/restaurant/comment/${commentId}`),
};

export const userAPI = {
  getMyInfo: () => instance.get("api/auth/member/mypage/update"),

  editMyInfo: (nickname) =>
    instance.put("api/auth/member/mypage/update", { nickname }),
};
