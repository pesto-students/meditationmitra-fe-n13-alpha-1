import PropTypes from "prop-types";
import Grid from "./Grid";
import CourseCard from "./CourseCard";
import Container from "./Container";

const CourseList = ({ courses = [], mobile = false }) => {
  const DesktopView = () => (
    <Container mt="3rem">
      <Grid container spacing={4} mb={10}>
        {courses.map((course) => (
          <Grid item key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const MobileView = () => (
    <>
      {courses.map((course) => (
        <CourseCard mobile={true} key={course.id} course={course} />
      ))}
    </>
  );

  return mobile ? <MobileView /> : <DesktopView />;
};

CourseList.propTypes = {
  courses: PropTypes.array,
  mobile: PropTypes.bool,
};

export default CourseList;
