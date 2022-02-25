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
//we are using mock server due to pro issue(we need to buy the plan if we want to access the live events)
const GetCalendlyEvent = () => {
  const url =
    "https://stoplight.io/mocks/calendly/api-docs/395/scheduled_events/64d97431-775f-4ed2-b0a8-6d33cf19316e";
  return Axios.get(url)
    .then((response) => response)
    .catch((e) => console.log(e));
};

export { GetMeetLink, GetCalendlyEvent };
