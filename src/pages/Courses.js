import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import { Typography } from "../components/Typography";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import SearchFilter from "../components/Filter/SearchFilter";
import SideBarFilter from "../components/Filter/SideBarFilter";
import { GetAllCourses } from "../api/services/courseService";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const response = await GetAllCourses({ search, filter });
    console.log(response.data);
    setCourses(response.data);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const response = await GetAllCourses({ search, filter });
      console.log(response);
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

  const Title = () => (
    <Typography variant="body1" m="7% 0 0 3%">
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
            <CourseList courses={courses} />
          </Grid>
        </Grid>
      </DeskView>
      <MobileView>
        <SearchFilter onSearch={onSearch} onFilter={onFilter} />
        <Title />
        <CourseList mobile courses={courses} />
      </MobileView>
    </>
  );
};

export default Courses;
