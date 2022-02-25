import Box from "../Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PropTypes from "prop-types";

const BottomNav = ({ items = [], onNavigate }) => {
  const currentPage = window.location.pathname || "/";
  return (
    <Box>
      <BottomNavigation value={currentPage}>
        {items.map(({ label, path, icon }) => (
          <BottomNavigationAction
            key={label}
            selected={path == currentPage}
            label={label}
            icon={icon}
            onClick={() => {
              onNavigate(path);
            }}
            value={path}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

BottomNav.propTypes = {
  items: PropTypes.array,
  onNavigate: PropTypes.func,
};

export default BottomNav;
