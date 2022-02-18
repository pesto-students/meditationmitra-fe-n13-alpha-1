import { useEffect, useState } from "react";
import MobileView from "../components/MobileView";
import DeskView from "../components/DeskView";
import Box from "../components/Box";
import { Typography } from "../components/Typography";
import Grid from "../components/Grid";
import Stack from "../components/Stack";
import { PrimaryButton } from "../components/Buttons";
import { MOB_ENROLLMENT_PAGE_TITLE } from "../utils/Constants";
import CourseList from "../components/CourseList";
import { GetEnrolledCourses } from "../api/services/courseService";

// TO DO: Remove the below post integration
// import { courses } from "../__mock__/__mock__.js";

// import { useSelector, useDispatch } from "react-redux";
// import { authActions } from "../api/reducers/authReducer";
// import { useLayoutEffect } from "react";

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  // const  = useDispatch();

  // useLayoutEffect(() => {
  //   try {
  //     dispatch(authActions.fetchAuth());
  //   } catch (e) {
  //     // TODO: integrate with component level error boundary
  //     console.log(e);
  //   }
  // }, []);

  // TODO: remove console.log after integration
  // const response = useSelector((state) => console.log(state));
  // TODO: remove console.log after integration
  // console.log("******************", response);
  useEffect(() => {
    const getCourses = async () => {
      const response = await GetEnrolledCourses();
      console.log(response);
      setCourses(response);
    };
    getCourses();
  }, []);
  return (
    <>
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
          <CourseList courses={courses} />
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
        <CourseList mobile courses={courses} />
      </MobileView>
    </>
  );
};

export default EnrolledCourses;
