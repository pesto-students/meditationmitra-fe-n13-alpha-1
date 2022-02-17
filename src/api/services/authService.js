import Axios from "../axios";
import { signInWithGoogle } from "../../Firebase/auth";

const LoginService = async () => {
  const data = await signInWithGoogle();
  console.log(data);
  return Axios.post("user/login", data)
    .then((response) => response)
    .catch((e) => e);
};

const UpdateUserRole = (data) =>
  Axios.post("user/update", data)
    .then((response) => response)
    .catch((e) => e);

const LogoutService = (data) =>
  Axios.post("url", data)
    .then((response) => response.data)
    .catch((e) => e);

export { LoginService, UpdateUserRole, LogoutService };
