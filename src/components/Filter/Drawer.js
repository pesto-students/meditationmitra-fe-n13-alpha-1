import { Fragment, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PropTypes from "prop-types";
import Box from "../Box";

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
        <Box
          sx={{
            mt: "10px",
            mr: "10px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <CloseOutlinedIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setState(false)}
          />
        </Box>
        {children}
      </SwipeableDrawer>
    </Fragment>
  );
};

Drawer.propTypes = {
  children: PropTypes.any,
};

export default Drawer;
