import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PropTypes from "prop-types";
import { Button } from "./Buttons";
import Stack from "./Stack";
import Box from "./Box";
import { Typography } from "./Typography";

const CourseCard = (props) => {
  const { name, courseImage, author, rating, price, slug } = props.course;
  const { mobile, cart, onClick } = props;

  const DesktopView = () => (
    <>
      <Card onClick={() => onClick(slug)} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={courseImage || "images/course-default.png"}
          alt={name}
        />
        <CardContent>
          <Stack direction="row" spacing={10} mb={2}>
            <Box component="span"> {author} </Box>
            <Box component="span">
              <StarBorderIcon /> {rating}
            </Box>
            <Box component="span">All levels</Box>
          </Stack>
          <Typography variant="body1" mb={2}>
            {name}
          </Typography>
          <Typography variant="body2">Rs. {price}</Typography>
        </CardContent>
      </Card>
      {cart && (
        <Button
          variant="outlined"
          color="error"
          txcolor="var(--error)"
          sx={{ marginTop: "10px", float: "right" }}
        >
          Remove
        </Button>
      )}
    </>
  );

  const MobileView = () => (
    <>
      <Card
        onClick={() => onClick(slug)}
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "95%",
          margin: "10px auto",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {price}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box component="span" sx={{ lineHeight: "5px" }}>
                <StarBorderIcon />
              </Box>
              <Box component="span">{rating}</Box>
              <Box component="span">{author}</Box>
              <Box component="span">All levels</Box>
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 130, maxHeight: 130, padding: "3%", marginLeft: "12%" }}
          image={courseImage || "images/course-default.png"}
          alt={name}
        />
      </Card>
      {cart && (
        <Button variant="outlined" color="error" txcolor="red">
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
  onClick: PropTypes.func,
};

export default CourseCard;
