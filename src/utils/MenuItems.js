import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";

export const menuItems = [
  {
    label: "Courses",
    path: "/courses",
    icon: <SearchIcon />,
  },
  {
    label: "My Courses",
    path: "/enrolled-courses",
    icon: <HomeOutlinedIcon />,
    loginRequired: true,
  },
  {
    label: "Profile",
    path: "/user/profile",
    icon: <PermIdentityIcon />,
    loginRequired: true,
    mobile: true,
  },
  {
    label: "Add Course",
    path: "/user/add-course",
    icon: <AddIcon />,
    loginRequired: true,
    courch: true,
  },
  {
    label: "Cart",
    path: "/user/cart",
    icon: <ShoppingCartOutlinedIcon />,
    loginRequired: true,
  },
];
