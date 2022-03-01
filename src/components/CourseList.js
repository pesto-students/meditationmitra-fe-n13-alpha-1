import PropTypes from "prop-types";
import Grid from "./Grid";
import CourseCard from "./CourseCard";
import Container from "./Container";
import {
  CourseCardSkeleton,
  MobileCourseCardSkeleton,
} from "./CourseCardSkeleton";
import { Typography } from "./Typography";
import Box from "./Box";

const CourseList = ({
  courses = [],
  mobile = false,
  cart = false,
  loading,
  remove,
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
                <CourseCard course={course} remove={remove} cart={cart} />
              </Grid>
            ))}

            {!courses.length && (
              <Box
                sx={{
                  mt: "100px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">No courses found</Typography>
              </Box>
            )}
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
          {courses.map((course) => (
            <CourseCard
              mobile={mobile}
              key={course.name}
              course={course}
              cart={cart}
              remove={remove}
            />
          ))}
          {!courses.length && (
            <Box
              sx={{
                mt: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">No courses found</Typography>
            </Box>
          )}
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
  remove: PropTypes.func,
};

export default CourseList;
