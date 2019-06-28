import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  if (!error.response) {
    toast.error("Не удалось соединиться с сервером");
  } else {
    if (error.response.status === 500) {
      console.log("Response", error.response);
      toast.error("Ошибка сервера");
    }
    if (error.response.status === 401) {
      toast.error("Не авторизован");
    }
    if (error.response.status === 404 || error.response.status === 405) {
      toast.error("Метод не найден");
    }
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post
};
