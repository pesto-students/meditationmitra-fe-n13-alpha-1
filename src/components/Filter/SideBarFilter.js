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
import { categories as category } from "../../utils/Constants";

const SideBarFilter = ({ onFilter }) => {
  const ratings = [1, 2, 3, 4, 5];

  const [categories, setCategories] = useState(
    new Array(category.length).fill(false)
  );
  const [price, setPrice] = useState([1000, 10000]);
  const [rating, setRating] = useState(new Array(ratings.length).fill(false));

  const onCategoryCheck = (index) => {
    const updated = categories.map((item, i) => (index === i ? !item : item));
    setCategories(updated);
  };

  const onRatingCheck = (index) => {
    const updated = rating.map((item, i) => (index === i ? !item : item));
    setRating(updated);
  };

  const onPriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const CategoryCheckBoxes = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {category.map((cat, index) => (
          <FormControlLabel
            key={cat}
            label={cat}
            checked={categories[index]}
            control={
              <Checkbox value={cat} onChange={() => onCategoryCheck(index)} />
            }
            name="category"
          />
        ))}
      </Box>
    );
  };

  const RatingCheckBoxes = () => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {ratings.map((rate, index) => (
          <FormControlLabel
            key={rate}
            checked={rating[index]}
            label={<Rating name="read-only" value={rate} readOnly />}
            control={
              <Checkbox value={rate} onChange={() => onRatingCheck(index)} />
            }
          />
        ))}
      </Box>
    );
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
      step={100}
    />
  );

  const onApplyFilter = () => {
    const checkedCategories = categories
      .map((it, i) => {
        return { item: it, index: i };
      })
      .filter((it) => it.item)
      .map((it) => category[it.index]);
    const checkedRatings = rating
      .map((it, i) => {
        return { item: it, index: i };
      })
      .filter((it) => it.item)
      .map((it) => ratings[it.index]);
    const filter = {
      category: checkedCategories,
      rating: checkedRatings,
      price: { min: price[0], max: price[1] },
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
