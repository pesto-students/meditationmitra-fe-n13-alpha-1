import Grid from "../components/Grid";
import { Typography } from "../components/Typography";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import CourseList from "../components/CourseList";
import SearchFilter from "../components/Filter/SearchFilter";
import SideBarFilter from "../components/Filter/SideBarFilter";

// TO DO: Remove the below post integration
import { courses } from "../__mock__/__mock__.js";

const Courses = () => {
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
            <SideBarFilter />
          </Grid>
          <Grid item xs={10}>
            <Title />
            <SearchFilter />
            <CourseList courses={courses} />
          </Grid>
        </Grid>
      </DeskView>
      <MobileView>
        <SearchFilter />
        <Title />
        <CourseList mobile courses={courses} />
      </MobileView>
    </>
  );
};

export default Courses;
