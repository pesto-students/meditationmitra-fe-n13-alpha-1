import PropTypes from "prop-types";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Stack from "../Stack";
import { MenuLink } from "../Link";
const TopNav = ({ items = [], onNavigate, NoOfCartItems }) => (
  <Stack direction="row" spacing={3}>
    {items.map((item) => (
      <MenuLink
        component="button"
        key={item.label}
        to={item.path}
        selected={window.location.pathname === item.path}
        onClick={() => onNavigate(item.path)}
      >
        {item.label}{" "}
        {item.label === "Cart" ? (
          <>
            <Badge badgeContent={NoOfCartItems} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </>
        ) : (
          ""
        )}
      </MenuLink>
    ))}
  </Stack>
);

TopNav.propTypes = {
  items: PropTypes.array,
  onNavigate: PropTypes.func,
  NoOfCartItems: PropTypes.number,
};

export default TopNav;
