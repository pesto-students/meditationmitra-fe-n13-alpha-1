import PropTypes from "prop-types";
import Grid from "./Grid";
import CourseCard from "./CourseCard";
import Container from "./Container";

const CourseList = ({
  courses = [],
  mobile = false,
  cart = false,
  onClick,
}) => {
  const DesktopView = () => (
    <Container mt="3rem">
      <Grid container spacing={4} mb={10}>
        {courses.map((course) => (
          <Grid item key={course.name}>
            <CourseCard course={course} cart={cart} onClick={onClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const MobileView = () => (
    <>
      {courses.map((course) => (
        <CourseCard
          mobile={true}
          key={course.name}
          course={course}
          cart={cart}
          onClick={onClick}
        />
      ))}
    </>
  );

  return mobile ? <MobileView /> : <DesktopView />;
};

CourseList.propTypes = {
  courses: PropTypes.array,
  mobile: PropTypes.bool,
  cart: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CourseList;
