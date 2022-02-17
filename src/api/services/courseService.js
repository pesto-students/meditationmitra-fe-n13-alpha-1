import Axios from "../axios";

const GetAllCourses = async () =>
  await Axios.get("courses")
    .then((response) => response)
    .catch((e) => e);

const GetEnrolledCourses = () =>
  Axios.get("enrolled-course")
    .then((response) => response)
    .catch((e) => e);

const GetFilteredCourses = async ({ search, filter }) =>
  await Axios.get(`courses/${search}/${filter}`)
    .then((response) => response)
    .catch((e) => e);

const GetCourse = async (id) =>
  await Axios.get(`courses/${id}`)
    .then((response) => response)
    .catch((e) => e);
export { GetAllCourses, GetEnrolledCourses, GetFilteredCourses, GetCourse };
