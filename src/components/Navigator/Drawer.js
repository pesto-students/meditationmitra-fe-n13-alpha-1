import { Fragment, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "../Box";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import {
  HOME_PATH,
  KEYDOWN,
  PRESENTATION,
  RIGHT,
  SHIFT,
  TAB,
} from "../../utils/Constants";

const Drawer = ({ items = [], onNavigate }) => {
  const [state, setState] = useState(false);
  const currentPage = window.location.pathname || HOME_PATH;

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

  const list = () => (
    <Box
      role={PRESENTATION}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {items.map(({ label, path, icon }) => (
          <ListItemButton
            selected={path == currentPage}
            key={label}
            onClick={() => {
              onNavigate(path);
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <MenuIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor={RIGHT}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Fragment>
  );
};

Drawer.propTypes = {
  items: PropTypes.any,
  onNavigate: PropTypes.func,
};

export default Drawer;
