import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import PropTypes from "prop-types";
import Container from "../Container";
import { Typography } from "../Typography";
import Box from "../Box";
import { PrimaryButton } from "../Buttons";

const SideBarFilter = ({ onFilter }) => {
  const [filter, setFilter] = useState({});
  const [price, setPrice] = useState([1000, 10000]);
  const [catgories, setCategories] = useState([]);

  const onCategoryCheck = (event) => {
    console.log(event.target.value);
    // console.log(event.target.checked);
    setCategories([...catgories, event.target.value]);
    //setCategories([]);
    setFilter(filter);
  };

  const onApplyFilter = () => {
    onCategoryCheck();
    filter.categories = catgories;
    onFilter(setFilter(filter));
  };

  const CategoryCheckBoxes = () => {
    const categories = ["Focus", "Meditation"];
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {categories.map((cat) => (
          <FormControlLabel
            label={cat}
            key={cat}
            value={cat}
            control={<Checkbox />}
            name="category"
            onChange={onCategoryCheck}
          />
        ))}
      </Box>
    );
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  const PriceSlider = () => (
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

  const RatingCheckBoxes = () => {
    const ratings = [1, 2, 3, 4, 5];
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {ratings.map((rating) => (
          <FormControlLabel
            key={rating}
            label={<Rating name="read-only" value={rating} readOnly />}
            control={<Checkbox />}
          />
        ))}
      </Box>
    );
  };

  return (
    <>
      <Container mt="3rem">
        <Typography variant="h6">Filters</Typography>
        <Typography variant="subtitle1" mt={1}>
          Categories
        </Typography>
        <CategoryCheckBoxes />
        <Typography variant="subtitle1" mt={1}>
          Price Range
        </Typography>
        <PriceSlider />
        <Typography variant="subtitle1" mt={1}>
          Ratings
        </Typography>
        <RatingCheckBoxes />
        <PrimaryButton onClick={onApplyFilter}>Apply Filters</PrimaryButton>
      </Container>
    </>
  );
};

SideBarFilter.propTypes = {
  onFilter: PropTypes.func,
};

export default SideBarFilter;
