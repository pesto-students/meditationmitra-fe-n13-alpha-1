import Axios from "./axios";

const configureAxios = () => {
  Axios.defaults.baseURL = process.env.REACT_BASE_URL;
  Axios.defaults.headers.get["Accept"] = "application/json";
  Axios.defaults.headers.post["Accept"] = "application/json";
  Axios.defaults.headers.put["Accept"] = "application/json";
  Axios.interceptors.request.use(function () {
    let axiosConfig = null;
    if (window.localStorage.getItem("token") !== null) {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json",
          auth: JSON.parse(window.localStorage.getItem("token")),
        },
      };
    }
    // const token = localStorage.getItem("token");
    // config.headers.auth = token ? `${token}` : "";
    return axiosConfig;
  });
};

export default configureAxios;
