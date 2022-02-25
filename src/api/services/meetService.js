import Axios from "../axios";

const GetMeetLink = async (data) => {
  const axiosConfig = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return await Axios.post("courses/g", data, axiosConfig)
    .then((response) => response.data)
    .catch((e) => e);
};

export { GetMeetLink };
