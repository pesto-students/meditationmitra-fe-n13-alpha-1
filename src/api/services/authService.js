import Axios from "../axios";
import { signInWithGoogle } from "../../Firebase/auth";

const LoginService = async (payload) => {
  let data = {};
  if (payload) data = payload;
  else data = await signInWithGoogle();
  if (data.error) {
    return Promise.reject(new Error(data));
  } else {
    return Axios.post("user/login", data)
      .then((response) => response)
      .catch((e) => e);
  }
};

const UpdateUserRole = (data) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return Axios.post("user/update-role", data, axiosConfig)
    .then((response) => response)
    .catch((e) => e);
};

const LogoutService = (data) =>
  Axios.post("user/logout", data)
    .then((response) => response.data)
    .catch((e) => e);

export { LoginService, UpdateUserRole, LogoutService };
