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
  const category = ["Focus", "Meditation"];
  const ratings = [1, 2, 3, 4, 5];

  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([1000, 10000]);
  const [rating, setRating] = useState([]);

  const onCategoryCheck = (e) => {
    const name = e.target.value;
    const data = categories;
    if (data.includes(name)) {
      const index = data.indexOf(name);
      data.splice(index, 1);
      setCategories(data);
    } else {
      data.push(name);
      setCategories(data);
    }
  };

  const onRatingCheck = (e) => {
    const name = e.target.value;
    console.log(name);
    const data = rating;
    if (data.includes(name)) {
      const index = data.indexOf(name);
      data.splice(index, 1);
      setRating(data);
    } else {
      data.push(name);
      setRating(data);
    }
    console.log(rating);
  };

  const CategoryCheckBoxes = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {category.map((name) => (
          <FormControlLabel
            label={name}
            key={name}
            control={<Checkbox value={name} onChange={onCategoryCheck} />}
            name="category"
          />
        ))}
      </Box>
    );
  };

  const onPriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const PriceSlider = () => (
    <Slider
      getAriaLabel={(index) =>
        index === 0 ? "Minimum price" : "Maximum price"
      }
      value={price}
      onChange={onPriceChange}
      valueLabelDisplay="auto"
      min={1000}
      max={10000}
      step={500}
    />
  );

  const RatingCheckBoxes = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {ratings.map((rating) => (
          <FormControlLabel
            key={rating}
            label={<Rating name="read-only" value={rating} readOnly />}
            control={<Checkbox value={rating} onChange={onRatingCheck} />}
          />
        ))}
      </Box>
    );
  };

  const onApplyFilter = () => {
    const filter = {
      categories: categories,
      rating: rating,
      price: { mix: price[0], max: price[1] },
    };
    onFilter(filter);
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
