
import MobileView from "../components/MobileView";
import DeskView from "../components/DeskView";
import Box from "../components/Box";
import Typography from "../components/Typography";
import { courses } from "../dummyJSON";
import Grid from "../components/Grid";
import Stack from "../components/Stack";
import { PrimaryButton } from "../components/Buttons";
import MobileView from "../components/MobileView";
import DeskView from "../components/DeskView";
import { MOB_ENROLLMENT_PAGE_TITLE } from "../utils/Constants";
import CourseList from "../components/CourseList";


const EnrolledCourses = () => {
  return (
    <>

      <DeskView>EnrolledCourses page</DeskView>
      <MobileView>EnrolledCourses page</MobileView>
      <DeskView>
        <Box
          sx={{
            borderBottom: "1px solid var(--orange)",
            marginBottom: "7vh",
          }}
        >
          <Typography
            variant="h6"
            sx={{ padding: "3rem 0 0 0", textAlign: "center" }}
          >
            Welcome Vaaiibhav, lets take a look at your courses.
          </Typography>
          <CourseList courses={courses.slice(0, 3)} />
        </Box>
        <Grid container spacing={2} mb={5}>
          <Grid item xs={10}>
            <Typography variant="body1" color="var(--orange)">
              Take a look at some other Courses!
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Stack justifyContent="right">
              <PrimaryButton variant="outlined" size="small">
                Courses
              </PrimaryButton>
            </Stack>
          </Grid>
        </Grid>
      </DeskView>
      <MobileView>
        <Typography variant="body1" mt="7%" mb="5%" ml="3%">
          {MOB_ENROLLMENT_PAGE_TITLE}
        </Typography>
        <CourseList mobile courses={courses.slice(0, 3)} />
      </MobileView>
    </>
  );
};

export default EnrolledCourses;
