import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "../components/Grid";
import { Typography } from "../components/Typography";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import SearchFilter from "../components/Filter/SearchFilter";
import SideBarFilter from "../components/Filter/SideBarFilter";
import { GetAllCourses } from "../api/services/courseService";
import { courseActions } from "../api/reducers/courseReducer";

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    const response = await GetAllCourses({ search, filter });
    setCourses(response.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const response = await GetAllCourses({ search, filter });
      setCourses(response.data);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [search, filter]);

  const onSearch = (searchStr) => {
    setSearch(searchStr);
  };

  const onFilter = (filterObj) => {
    setFilter(filterObj);
  };

  const selectCourse = (courseId) => {
    dispatch(courseActions.updateCourseId(courseId));
    navigate("/course-details");
  };

  const Title = () => (
    <Typography variant="h5" m="3% 0 0 2%">
      Courses
    </Typography>
  );

  return (
    <>
      <DeskView>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBarFilter onFilter={onFilter} />
          </Grid>
          <Grid item xs={10}>
            <Title />
            <SearchFilter onSearch={onSearch} />
            <CourseList
              loading={loading}
              courses={courses}
              onClick={selectCourse}
            />
          </Grid>
        </Grid>
      </DeskView>
      <MobileView>
        <SearchFilter onSearch={onSearch} onFilter={onFilter} />
        <Title />
        <CourseList
          loading={loading}
          mobile
          courses={courses}
          onClick={selectCourse}
        />
      </MobileView>
    </>
  );
};

export default Courses;
