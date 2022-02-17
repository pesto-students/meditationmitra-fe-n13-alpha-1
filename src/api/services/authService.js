import Axios from "../axios";
import { signInWithGoogle } from "../../Firebase/auth";

const LoginService = async () => {
  const data = await signInWithGoogle();
  if (data.error) {
    return Promise.reject(new Error(data));
  } else {
    return Axios.post("user/login", data)
      .then((response) => response)
      .catch((e) => e);
  }
};

const UpdateUserRole = (data) =>
  Axios.post("user/update", data)
    .then((response) => response)
    .catch((e) => e);

const LogoutService = (data) =>
  Axios.post("user/logout", data)
    .then((response) => response.data)
    .catch((e) => e);

export { LoginService, UpdateUserRole, LogoutService };
