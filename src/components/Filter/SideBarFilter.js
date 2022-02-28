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
// import { useDispatch } from "react-redux";
// import { courseActions } from "../../api/reducers/courseReducer";

const SideBarFilter = ({ onFilter }) => {
  // const dispatch = useDispatch();
  // const category = ["Focus", "Meditation"];
  const ratings = [1, 2, 3, 4, 5];

  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([1000, 10000]);
  const [rating, setRating] = useState([]);

  const onCategoryCheck = (e) => {
    const name = e.target.value;
    console.log(name);
    let data = categories;
    // data = JSON.parse(JSON.stringify(data));
    console.log(data);
    if (data.includes(name)) {
      const index = data.indexOf(name);
      data.splice(index, 1);
      setCategories(data);
    } else {
      data.push(name);
      setCategories(data);
    }
    console.log(categories);
  };

  const onRatingCheck = (e) => {
    const name = e.target.value;
    console.log(name);
    let data = rating;
    // data = JSON.parse(JSON.stringify(data));
    console.log(data);
    if (rating.includes(name)) {
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
        {category.map((cat) => (
          <FormControlLabel
            key={cat}
            label={cat}
            control={<Checkbox value={cat} onChange={onCategoryCheck} />}
            name="category"
          />
        ))}
      </Box>
    );
  };

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

  const onApplyFilter = () => {
    const filter = {
      category: categories,
      rating: rating,
      price: { min: price[0], max: price[1] },
    };
    onFilter(filter);

    // dispatch(courseActions.updateFilter(filter));
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
