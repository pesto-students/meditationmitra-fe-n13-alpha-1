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
import { useSelector } from "react-redux";
import Span from "../components/Span";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "../components/Container";

const EnrolledCourses = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const { userInfo } = useSelector((state) => state.authReducer);
  const { firstName, lastName } = userInfo;
  const navigate = useNavigate();

  useEffect(() => {
    const getCourses = async () => {
      const response = await GetEnrolledCourses();
      if (response.data) setCourses(response.data);
      setLoading(false);
    };
    getCourses();
  }, []);

  const EmptyPage = ({ mobile }) => (
    <>
      <Container>
        <Box sx={{ marginTop: "45px" }}>
          {mobile ? (
            <img src="/images/no_courses.png" style={{ width: "100%" }} />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <img src="/images/no_courses.png" />
              </Grid>
            </Grid>
          )}
          <Typography
            variant="h6"
            sx={{
              padding: "3rem 0 0 0",
              textAlign: "center",
              minHeight: 300,
            }}
          >
            No Courses Found!
          </Typography>
        </Box>
      </Container>
    </>
  );

  EmptyPage.propTypes = {
    mobile: PropTypes.bool,
  };

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
            Welcome
            <Span style={{ textTransform: "capitalize" }}>
              {" " + firstName + " "}
            </Span>
            <Span style={{ textTransform: "capitalize" }}>
              {lastName + " "}
            </Span>
            , lets take a look at your courses.
          </Typography>

          {courses?.length ? (
            <CourseList courses={courses} />
          ) : loading ? (
            <CourseList loading={loading} />
          ) : (
            <EmptyPage />
          )}
        </Box>
        <Grid container spacing={2} mb={5}>
          <Grid item xs={10}>
            <Typography variant="body1" color="var(--orange)">
              Take a look at some other Courses!
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Stack justifyContent="right">
              <PrimaryButton
                variant="outlined"
                size="small"
                onClick={() => navigate("/courses")}
              >
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
        {courses?.length ? (
          <CourseList mobile courses={courses} />
        ) : loading ? (
          <CourseList loading={loading} mobile />
        ) : (
          <EmptyPage mobile={true} />
        )}
      </MobileView>
    </>
  );
};

export default EnrolledCourses;
