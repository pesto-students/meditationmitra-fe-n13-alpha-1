import Axios from "./axios";

const configureAxios = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  Axios.defaults.headers.get["Accept"] = "application/json";
  Axios.defaults.headers.post["Accept"] = "application/json";
  Axios.defaults.headers.put["Accept"] = "application/json";
  const token = window.localStorage.getItem("token");
  if (token) Axios.defaults.headers.post["Authorization"] = token;
  // Axios.interceptors.request.use(function (config) {
  //   console.log(config);
  //   let axiosConfig = null;
  //   if (window.localStorage.getItem("token") !== null) {
  //     axiosConfig = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${JSON.parse(
  //           window.localStorage.getItem("token")
  //         )}`,
  //       },
  //     };
  //   }
  //   return axiosConfig;
  // });
};

export default configureAxios;
