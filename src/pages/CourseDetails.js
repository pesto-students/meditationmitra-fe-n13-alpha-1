import { Divider } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import { Typography } from "../components/Typography";
import { Button, SuccessButton, PrimaryButton } from "../components/Buttons";
import Box from "../components/Box";
import Grid from "../components/Grid";
import Stack from "../components/Stack";
import Span from "../components/Span";
import { CourseAccordion } from "../components/Accordions";
import Container from "../components/Container";
import { Section } from "../components/Section";
import { GetCourse, GetEnrolledCourse } from "../api/services/courseService";
import { courseActions } from "../api/reducers/courseReducer";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { cart } = useSelector((state) => state.courseReducer);
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const [course, setCourse] = useState({});
  const [courseLinks, setCourseLinks] = useState([]);
  const [mobViewHeight, setMoBViewHeight] = useState("55%");
  const [seeDetailsBtnLabel, setSeeDetailsBtnLabel] = useState("See Details");
  const [showDetailsFlag, setShowDetailsFlag] = useState(true);

  const fetchData = async () => {
    let course = {};
    if (isLoggedIn) {
      course = await GetEnrolledCourse(slug);
    } else {
      course = await GetCourse(slug);
    }
    console.log(course.data);
    setCourse(course.data.course);
    setCourseLinks(course.data.coursesMeetLinks);
  };
  useLayoutEffect(() => {
    fetchData();
  }, []);

  const showMoreDetails = () => {
    setMoBViewHeight("90%");
    setSeeDetailsBtnLabel("Hide Details");
    setShowDetailsFlag(false);
  };
  const hideMoreDetails = () => {
    setMoBViewHeight("55%");
    setSeeDetailsBtnLabel("See Details");
    setShowDetailsFlag(true);
  };
  const gridItemStyles = {
    borderRight: "1px solid var(--orange)",
    paddingTop: "0",
  };

  const addToCart = () => {
    dispatch(courseActions.addToCart(course));
  };

  const isItemInCart = () => {
    console.log(cart);
    if (!cart?.length) return true;
    const flag = cart.find((item) => item.slug === slug);
    return !flag;
  };

  const Sections = () => (
    <Box>
      {course?.sections?.map((section, index) => (
        <CourseAccordion
          key={"section" + index}
          section={section}
          isPurchased={course.isPurchased}
          courseId={course._id}
          link={courseLinks[index]?.link}
          fetchData={fetchData}
        />
      ))}
    </Box>
  );

  const Desktop = () => (
    <DeskView noContainer>
      <Section
        bgColor="var(--orange)"
        position="relative"
        style={{ marginBottom: "10vh" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ padding: "2rem 0", color: "var(--white)" }}>
            <Typography variant="h4">{course?.name}</Typography>
            <Typography variant="body1">{course?.courseDescription}</Typography>
          </Box>
        </Container>
      </Section>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={2} sx={gridItemStyles}>
            <Stack direction="row" spacing={2}>
              <AccountCircleIcon fontSize="large" />
              <Box>
                <Typography variant="body1">Trainer</Typography>
                <Typography variant="body2">{course?.author}</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={gridItemStyles}>
            <Typography variant="body1">Category</Typography>
            <Typography variant="body2">{course?.category}</Typography>
          </Grid>
          <Grid item xs={2} sx={gridItemStyles}>
            <Typography>Reviews</Typography>
            <Stack direction="row">
              <Rating name="read-only" value={course?.rating} readOnly />
              <Typography>(123)</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: "0" }}>
            <Stack direction="row" spacing={1}>
              <FavoriteBorderIcon />
              <Typography>Wishlist</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: "0" }}>
            {isLoggedIn && isItemInCart() && !course.isPurchased && (
              <SuccessButton
                title="Add to Cart"
                startIcon={<ShoppingCartOutlinedIcon />}
                onClick={addToCart}
              >
                Add to Cart
              </SuccessButton>
            )}
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ padding: "2rem 7rem" }}>
        <Sections />
      </Box>
    </DeskView>
  );

  const Mobile = () => (
    <MobileView height={mobViewHeight} bgcolor="var(--white)">
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ margin: "6% 0 1% 0" }}
      >
        Description
      </Typography>
      <Typography variant="body2">{course?.courseDescription}</Typography>
      <Button variant="text" txcolor="var(--orange)">
        Show more
      </Button>
      <Divider />
      <Typography color="text.secondary">Author</Typography>
      <Box
        sx={{
          width: "90%",
          padding: "5% 5%",
          borderRadius: "10px",
          background: "var(--bgColor)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="button">{course?.author}</Typography>
            <br />
            <Span>14 Courses</Span> <Span>1400 Students</Span>
          </Grid>
        </Grid>
      </Box>
      <Stack direction="row" spacing={4} mt={1}>
        <PrimaryButton
          fullWidth
          onClick={showDetailsFlag ? showMoreDetails : hideMoreDetails}
        >
          {seeDetailsBtnLabel}
        </PrimaryButton>
        {isLoggedIn && isItemInCart() && !course.isPurchased && (
          <SuccessButton
            fullWidth
            title="Add to Cart"
            startIcon={<ShoppingCartOutlinedIcon />}
            onClick={addToCart}
          >
            Add to Cart
          </SuccessButton>
        )}
      </Stack>
      <Box
        sx={{
          padding: "2rem 0",
          display: showDetailsFlag ? "none" : "block",
        }}
      >
        <Sections />
      </Box>
    </MobileView>
  );

  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
};

export default CourseDetails;
