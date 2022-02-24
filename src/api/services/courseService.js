import Axios from "../axios";

const GetAllCourses = async () =>
  await Axios.get("courses")
    .then((response) => response)
    .catch((e) => e);

const GetEnrolledCourses = async () =>
  await Axios.get("courses/enrolled")
    .then((response) => response)
    .catch((e) => e);

const GetFilteredCourses = async ({ search, filters }) =>
  await Axios.get(`courses`, { search, filters })
    .then((response) => response)
    .catch((e) => e);

const GetCourse = async (slug) =>
  await Axios.get(`courses/slug/${slug}`)
    .then((response) => response)
    .catch((e) => e);

const GetEnrolledCourse = async (slug) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return await Axios.get(`courses/enrolled/${slug}`, axiosConfig)
    .then((response) => response)
    .catch((e) => e);
};

const AddCourse = async (data) => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return await Axios.post("courses/add-course", data, axiosConfig)
    .then((response) => response)
    .catch((e) => e);
};
export {
  GetAllCourses,
  GetEnrolledCourses,
  GetFilteredCourses,
  GetCourse,
  AddCourse,
  GetEnrolledCourse,
};
