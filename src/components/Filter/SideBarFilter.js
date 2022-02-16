import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import Container from "../Container";
import { Typography } from "../Typography";
import Box from "../Box";

const SideBarFilter = () => {
  const [price, setPrice] = useState([1000, 10000]);

  const categoryCheckBoxes = () => (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel label="Focus" control={<Checkbox />} />
      <FormControlLabel label="Happiness" control={<Checkbox />} />
    </Box>
  );

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const priceCheckBoxes = () => (
    <Slider
      getAriaLabel={(index) =>
        index === 0 ? "Minimum price" : "Maximum price"
      }
      value={price}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      min={1000}
      max={10000}
      step={500}
    />
  );

  const ratingCheckBoxes = () => (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={<Rating name="read-only" value={1} readOnly />}
        control={<Checkbox />}
      />
      <FormControlLabel
        label={<Rating name="read-only" value={2} readOnly />}
        control={<Checkbox />}
      />
      <FormControlLabel
        label={<Rating name="read-only" value={3} readOnly />}
        control={<Checkbox />}
      />
      <FormControlLabel
        label={<Rating name="read-only" value={4} readOnly />}
        control={<Checkbox />}
      />
      <FormControlLabel
        label={<Rating name="read-only" value={5} readOnly />}
        control={<Checkbox />}
      />
    </Box>
  );

  return (
    <>
      <Container mt="3rem">
        <Typography variant="h6">Filters</Typography>
        <Typography variant="subtitle1" mt={1}>
          Categories
        </Typography>
        {categoryCheckBoxes()}
        <Typography variant="subtitle1" mt={1}>
          Price Range
        </Typography>
        {priceCheckBoxes()}
        <Typography variant="subtitle1" mt={1}>
          Ratings
        </Typography>
        {ratingCheckBoxes()}
      </Container>
    </>
  );
};

export default SideBarFilter;
