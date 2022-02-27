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
// import Span from "./Span";

const CourseCard = (props) => {
  const { name, courseImage, author, rating, price, slug } = props.course;
  const { mobile, cart, remove } = props;
  const navigate = useNavigate();

  const selectCourse = (slug) => {
    navigate(`/course-details/${slug}`);
  };
  const DesktopView = () => (
    <>
      <Card onClick={() => selectCourse(slug)} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={courseImage || "images/course-default.png"}
          alt={name}
        />
        <CardContent>
          <Stack direction="row" spacing={4} mb={2}>
            <Box component="span">
              {" "}
              <Typography component="div" variant="button">
                {" "}
                {author}
              </Typography>{" "}
            </Box>
            <Box component="span">
              {/* <Box>
                <StarBorderIcon />
              </Box>
              <Span >{rating}</Span> */}
              <Rating name="read-only" value={rating} readOnly />
            </Box>
            <Box component="span">
              {" "}
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                All levels
              </Typography>
            </Box>
          </Stack>
          <Typography component="div" variant="button" fontWeight="bold">
            {name}
          </Typography>
          <Typography
            variant="body1"
            // color="text.secondary"
            component="div"
          >
            INR {price}/-
          </Typography>
        </CardContent>
      </Card>
      {cart && (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          txcolor="var(--error)"
          sx={{ marginTop: "10px", float: "right" }}
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
          display: "flex",
          flexDirection: "row",
          width: "95%",
          margin: "10px auto",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "90%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="button" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body1" component="div">
              INR {price}/-
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box component="span" sx={{ lineHeight: "5px" }}>
                <StarBorderIcon />
              </Box>
              <Box sx={{ margin: "5px" }} component="span">
                {rating}
              </Box>
              <Box sx={{ margin: "5px" }} component="span">
                <Typography
                  variant="button"
                  color="text.secondary"
                  component="div"
                >
                  By {author}
                </Typography>
              </Box>
              <Box sx={{ margin: "5px" }} component="span">
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                >
                  All levels{" "}
                </Typography>{" "}
              </Box>
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 130, maxHeight: 90, padding: "3%", marginLeft: "12%" }}
          image={courseImage || "images/course-default.png"}
          alt={name}
        />
      </Card>
      {cart && (
        <Button
          fullWidth
          variant="outlined"
          color="error"
          txcolor="red"
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
