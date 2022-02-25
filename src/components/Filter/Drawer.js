import { Fragment, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import PropTypes from "prop-types";
import { Button } from "../Buttons";

const Drawer = ({ children }) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <Fragment>
      <FilterAltOutlinedIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Button
          onClick={() => setState(false)}
          variant="text"
          txcolor="var(--black)"
          sx={{ alignContent: "end" }}
        >
          x
        </Button>
        {children}
      </SwipeableDrawer>
    </Fragment>
  );
};

Drawer.propTypes = {
  children: PropTypes.any,
};

export default Drawer;
