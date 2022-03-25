import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import { Typography } from "../components/Typography";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import SearchFilter from "../components/Filter/SearchFilter";
import SideBarFilter from "../components/Filter/SideBarFilter";
import {
  GetAllCourses,
  GetFilteredCourses,
} from "../api/services/courseService";
import { EMPTY_STRING as EMPTY, H5 } from "../utils/Constants";

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(EMPTY);
  const [filter, setFilter] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const response = await GetAllCourses();
    setCourses(response.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setCourses([]);
      setLoading(true);
      const response = await GetFilteredCourses({
        search,
        filter: Object.keys(filter).length ? filter : null,
      });
      setCourses(response.data);
      setLoading(false);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    if (!search) {
      setCourses([]);
      setLoading(true);
      const callMe = async () => {
        const response = await GetAllCourses();
        setCourses(response.data);
        setLoading(false);
      };
      callMe();
    }
  }, [search]);

  const getFiltedCourses = async (filter) => {
    // console.log(filter);
    setLoading(false);
    const response = await GetFilteredCourses({
      search,
      filter: Object.keys(filter).length ? filter : null,
    });
    setCourses(response.data);
    setLoading(false);
  };

  const onSearch = async (searchStr) => {
    setSearch(searchStr);
  };

  const onFilter = async (filter) => {
    if (!filter) {
      setCourses([]);
      setLoading(true);
      setSearch(EMPTY);
      const response = await GetAllCourses();
      // console.log(response);
      setCourses(response.data);
      setLoading(false);
      return;
    }
    setFilter({});
    // console.log(filter);
    setFilter(filter);
    await getFiltedCourses(filter);
  };

  const Title = () => (
    <Typography variant={H5} m="3% 0 0 2%">
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
            <CourseList loading={loading} courses={courses} />
          </Grid>
        </Grid>
      </DeskView>
      <MobileView>
        <SearchFilter onSearch={onSearch} onFilter={onFilter} />
        <Title />
        <CourseList loading={loading} mobile courses={courses} />
      </MobileView>
    </>
  );
};

export default Courses;
