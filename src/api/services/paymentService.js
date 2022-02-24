import Axios from "../axios";

const ProceedToPay = async (data) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return await Axios.post("payments/", data, axiosConfig)
    .then((response) => response)
    .catch((e) => e);
};

export { ProceedToPay };
