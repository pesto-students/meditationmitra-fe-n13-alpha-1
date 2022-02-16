import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_BASE_URL,
});

export default Axios;
