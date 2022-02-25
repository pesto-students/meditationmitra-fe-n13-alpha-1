import { Fragment, useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "../Box";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

const Drawer = ({ items = [], onNavigate }) => {
  const [state, setState] = useState(false);
  const currentPage = window.location.pathname || "/";

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

  const list = () => (
    <Box
      role="presentation"
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
        anchor="right"
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
