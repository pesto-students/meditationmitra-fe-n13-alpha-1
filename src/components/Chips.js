import { Chip } from "@mui/material";
import PropTypes from "prop-types";
import Grid from "./Grid";

const Chips = ({ items = [], handleClick }) => (
  <Grid container m="2% 0">
    {items.map((item, index) => (
      <Chip
        key={index}
        label={item}
        onClick={handleClick}
        sx={{ margin: "0 2%" }}
      />
    ))}
  </Grid>
);

Chips.propTypes = {
  items: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Chips;
