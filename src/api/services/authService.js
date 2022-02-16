import Axios from "../axios";
import axios from "axios"

const LoginService = () =>
// Remove axios from line no2 and 6. Add base URL to work
  axios.get("https://randomusers.me/api/?results=10")
    .then((response) => response)
    .catch((e) => e);

const LogoutService = (data) =>
  Axios.post("url", data)
    .then((response) => response.data)
    .catch((e) => e);

export { LoginService, LogoutService };
