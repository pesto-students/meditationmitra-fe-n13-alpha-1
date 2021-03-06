import Axios from "../axios";

const GetAllCourses = async () =>
  await Axios.get("courses")
    .then((response) => response)
    .catch((e) => e);

const GetEnrolledCourses = async () => {
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return await Axios.get("courses/enrolled", axiosConfig)
    .then((response) => response)
    .catch((e) => e);
};

const GetFilteredCourses = async ({ search, filter }) => {
  let uri = `courses?`;
  if (search) {
    uri += `search=${search}`;
  }
  //console.log("filter ", filter);
  if (filter) {
    uri += `&filter=${JSON.stringify(filter)}`;
  }
  // console.log("uri", uri);
  return await Axios.get(uri)
    .then((response) => response)
    .catch((e) => e);
};

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

const EnrollCourse = async (data) => {
  const axiosConfig = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return await Axios.post("user/enroll-course", data, axiosConfig)
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
  EnrollCourse,
};
