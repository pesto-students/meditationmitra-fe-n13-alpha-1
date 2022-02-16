
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";

const Courses = () => {
  return (
    <>
      <DeskView>Courses page</DeskView>
      <MobileView>Courses page</MobileView>
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import { courses } from "../dummyJSON";
import Grid from "../components/Grid";
import SearchFilter from "../components/Filter/SearchFilter";
import Typography from "../components/Typography";
import SideBarFilter from "../components/Filter/SideBarFilter";

const Courses = () => {
  const title = () => (
    <Typography variant="body1" m="7% 0 0 3%">
      Courses
    </Typography>
  );

  return (
    <>
      <DeskView>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBarFilter />
          </Grid>
          <Grid item xs={10}>
            {title()}
            <SearchFilter />
            <CourseList courses={courses} />
          </Grid>
        </Grid>
      </DeskView>
      <MobileView>
        <SearchFilter />
        {title()}
        <CourseList mobile courses={courses} />
      </MobileView>
    </>
  );
};

export default Courses;
