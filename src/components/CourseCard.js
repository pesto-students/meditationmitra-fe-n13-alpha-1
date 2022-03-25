import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons";
import Stack from "./Stack";
import Box from "./Box";
import { Typography } from "./Typography";
import {
  ERROR,
  ERROR_COLOR,
  OUTLINED,
  RIGHT,
  PX10,
  COURSE_DETAILS_PATH,
  IMG,
  COURSE_DEFAULT_IMG,
  ROW,
  SPAN,
  DIV,
  BODY1,
  TEXT_SECONDARY,
  BUTTON,
  FW_BOLD,
  FLEX,
  COLUMN,
  RED,
} from "../utils/Constants";

const StyleMargin = { margin: "5px" };

const CourseCard = (props) => {
  const { name, courseImage, author, rating, price, slug } = props.course;
  const { mobile, cart, remove } = props;
  const navigate = useNavigate();

  const selectCourse = (slug) => {
    navigate(COURSE_DETAILS_PATH + slug);
  };
  const DesktopView = () => (
    <>
      <Card onClick={() => selectCourse(slug)} sx={{ maxWidth: 345 }}>
        <CardMedia
          component={IMG}
          height="300"
          image={courseImage || COURSE_DEFAULT_IMG}
          alt={name}
        />
        <CardContent>
          <Stack direction={ROW} spacing={4} mb={2}>
            <Box component={SPAN}>
              <Typography component={DIV} variant={Button}>
                {author}
              </Typography>
            </Box>
            <Box component={SPAN}>
              {/* <Box>
                <StarBorderIcon />
              </Box>
              <Span >{rating}</Span> */}
              <Rating name="read-only" value={rating} readOnly />
            </Box>
            <Box component={SPAN}>
              <Typography
                variant={BODY1}
                color={TEXT_SECONDARY}
                component={DIV}
              >
                All levels
              </Typography>
            </Box>
          </Stack>
          <Typography component={DIV} variant={BUTTON} fontWeight={FW_BOLD}>
            {name}
          </Typography>
          <Typography variant={BODY1} component={DIV}>
            INR {price}/-
          </Typography>
        </CardContent>
      </Card>
      {cart && (
        <Button
          fullWidth
          variant={OUTLINED}
          color={ERROR}
          txcolor={ERROR_COLOR}
          sx={{ marginTop: PX10, float: RIGHT }}
          onClick={remove}
        >
          Remove
        </Button>
      )}
    </>
  );

  const MobileView = () => (
    <>
      <Card
        onClick={() => selectCourse(slug)}
        sx={{
          display: FLEX,
          flexDirection: ROW,
          width: "95%",
          margin: "10px auto",
          borderRadius: PX10,
        }}
      >
        <Box sx={{ display: FLEX, flexDirection: COLUMN, width: "90%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component={DIV} variant={BUTTON} fontWeight={FW_BOLD}>
              {name}
            </Typography>
            <Typography variant={BODY1} component={DIV}>
              INR {price}/-
            </Typography>
            <Box sx={{ display: FLEX, flexDirection: ROW }}>
              <Box component={SPAN} sx={{ lineHeight: "5px" }}>
                <StarBorderIcon />
              </Box>
              <Box sx={StyleMargin} component={SPAN}>
                {rating}
              </Box>
              <Box sx={StyleMargin} component={SPAN}>
                <Typography
                  variant={BUTTON}
                  color={TEXT_SECONDARY}
                  component={DIV}
                >
                  By {author}
                </Typography>
              </Box>
              <Box sx={StyleMargin} component={SPAN}>
                <Typography
                  variant={BODY1}
                  color={TEXT_SECONDARY}
                  component={DIV}
                >
                  All levels
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component={IMG}
          sx={{ width: 130, maxHeight: 90, padding: "3%", marginLeft: "12%" }}
          image={courseImage || COURSE_DEFAULT_IMG}
          alt={name}
        />
      </Card>
      {cart && (
        <Button
          fullWidth
          variant={OUTLINED}
          color={ERROR}
          txcolor={RED}
          onClick={remove}
        >
          Remove
        </Button>
      )}
    </>
  );

  return mobile ? <MobileView /> : <DesktopView />;
};

CourseCard.propTypes = {
  course: PropTypes.any,
  mobile: PropTypes.bool,
  cart: PropTypes.bool,
  remove: PropTypes.func,
};

export default CourseCard;
