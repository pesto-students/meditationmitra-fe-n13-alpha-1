import { Divider, Skeleton } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import {
  BG_COLOR,
  BLOCK,
  BODY1,
  BODY2,
  BUTTON,
  H4,
  LARGE,
  LG,
  NONE,
  ORANGE,
  RELATIVE,
  ROW,
  TEXT_SECONDARY,
  TEXT,
  VH10,
  WHITE,
  ZERO,
  SECTION,
} from "../utils/Constants";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
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
    paddingTop: ZERO,
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
          key={SECTION + index}
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
        bgColor={ORANGE}
        position={RELATIVE}
        style={{ marginBottom: VH10 }}
      >
        <Container maxWidth={LG}>
          <Box sx={{ paddingY: "2rem", color: WHITE }}>
            <Typography variant={H4}>
              {loading ? <Skeleton width={400} /> : course?.name}
            </Typography>
            <Typography variant={BODY1}>
              {loading ? (
                <>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </>
              ) : (
                course?.courseDescription
              )}
            </Typography>
          </Box>
        </Container>
      </Section>
      <Container maxWidth={LG}>
        <Grid container spacing={4}>
          <Grid item xs={2} sx={gridItemStyles}>
            <Stack direction={ROW} spacing={2}>
              <AccountCircleIcon fontSize={LARGE} />
              <Box>
                <Typography variant={BODY1}>Trainer</Typography>
                <Typography variant={BODY2}>
                  {loading ? <Skeleton /> : course?.author}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={2} sx={gridItemStyles}>
            <Typography variant={BODY1}>Category</Typography>
            <Typography variant={BODY2}>
              {loading ? <Skeleton width={100} /> : course?.category}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={gridItemStyles}>
            <Typography>Reviews</Typography>
            <Stack direction={ROW}>
              {loading ? (
                <Skeleton width={100} />
              ) : (
                <>
                  <Rating name="read-only" value={course?.rating} readOnly />
                  <Typography>(123)</Typography>
                </>
              )}
            </Stack>
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: ZERO }}>
            {isLoggedIn && (
              <Stack direction={ROW} spacing={1}>
                <FavoriteBorderIcon />
                <Typography>Wishlist</Typography>
              </Stack>
            )}
          </Grid>
          <Grid item xs={2} sx={{ paddingTop: ZERO }}>
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
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <Sections />
        )}
      </Box>
    </DeskView>
  );

  const Mobile = () => (
    <MobileView height={mobViewHeight} bgcolor={WHITE}>
      <Typography
        variant={BODY1}
        color={TEXT_SECONDARY}
        sx={{ margin: "6% 0 1% 0" }}
      >
        Description
      </Typography>
      <Typography variant={BODY2}>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          course?.courseDescription
        )}
      </Typography>
      <Button variant={TEXT} txcolor={ORANGE}>
        Show more
      </Button>
      <Divider />
      <Typography color={TEXT_SECONDARY}>Author</Typography>
      <Box
        sx={{
          width: "90%",
          padding: "5%",
          borderRadius: "10px",
          background: BG_COLOR,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img />
          </Grid>
          <Grid item xs={10}>
            <Typography variant={BUTTON}>
              {loading ? <Skeleton /> : course?.author}
            </Typography>
            <br />
            <Span>14 Courses</Span> <Span>1400 Students</Span>
          </Grid>
        </Grid>
      </Box>
      <Stack direction={ROW} spacing={4} mt={1}>
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
          paddingY: "2rem",
          display: showDetailsFlag ? NONE : BLOCK,
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
