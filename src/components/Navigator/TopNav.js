import PropTypes from "prop-types";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Stack from "../Stack";
import { MenuLink } from "../Link";
import {
  BUTTON,
  CART,
  CHAR_SPACE,
  EMPTY_STRING,
  PRIMARY,
  ROW,
} from "../../utils/Constants";

const TopNav = ({ items = [], onNavigate, NoOfCartItems }) => (
  <Stack direction={ROW} spacing={3}>
    {items.map((item) => (
      <MenuLink
        component={BUTTON}
        key={item.label}
        to={item.path}
        selected={window.location.pathname === item.path}
        onClick={() => onNavigate(item.path)}
      >
        {item.label}
        {CHAR_SPACE}
        {item.label === CART ? (
          <>
            <Badge badgeContent={NoOfCartItems} color={PRIMARY}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </>
        ) : (
          EMPTY_STRING
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
