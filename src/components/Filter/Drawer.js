import { Fragment, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PropTypes from "prop-types";
import Box from "../Box";
import {
  FLEX,
  KEYDOWN,
  LEFT,
  POINTER,
  PX10,
  SHIFT,
  TAB,
  END,
} from "../../utils/Constants";

const Drawer = ({ children }) => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === KEYDOWN &&
      (event.key === TAB || event.key === SHIFT)
    ) {
      return;
    }

    setState(open);
  };

  return (
    <Fragment>
      <FilterAltOutlinedIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor={LEFT}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            mt: PX10,
            mr: PX10,
            display: FLEX,
            justifyContent: END,
          }}
        >
          <CloseOutlinedIcon
            sx={{ cursor: POINTER }}
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
