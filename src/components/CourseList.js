import PropTypes from "prop-types";
import Grid from "./Grid";
import CourseCard from "./CourseCard";
import Container from "./Container";
import {
  CourseCardSkeleton,
  MobileCourseCardSkeleton,
} from "./CourseCardSkeleton";

const CourseList = ({
  courses = [],
  mobile = false,
  cart = false,
  onClick,
  loading,
}) => {
  const DesktopView = () => (
    <Container mt="3rem">
      <Grid container spacing={4} mb={10}>
        {loading ? (
          <>
            {[1, 2, 3].map((num) => (
              <Grid key={num} item>
                <CourseCardSkeleton />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {courses.map((course) => (
              <Grid item key={course.name}>
                <CourseCard course={course} cart={cart} onClick={onClick} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Container>
  );

  const MobileView = () => (
    <>
      {loading ? (
        [1, 2, 3].map((num) => <MobileCourseCardSkeleton key={num} />)
      ) : (
        <>
          {/* <MobileCourseCardSkeleton /> */}
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
      )}
    </>
  );

  return mobile ? <MobileView /> : <DesktopView />;
};

CourseList.propTypes = {
  courses: PropTypes.array,
  mobile: PropTypes.bool,
  cart: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default CourseList;
