import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

export const menuItems = [
  {
    label: "Home",
    path: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    label: "Courses",
    path: "/courses",
    icon: <SearchIcon />,
  },
  {
    label: "My Courses",
    path: "/enrolled-courses",
    icon: <LocalLibraryOutlinedIcon />,
    loginRequired: true,
    common: true,
  },
  {
    label: "Profile",
    path: "/user/profile",
    icon: <PermIdentityIcon />,
    loginRequired: true,
    mobile: true,
    common: true,
  },
  {
    label: "Add Course",
    path: "/user/add-course",
    icon: <AddIcon />,
    loginRequired: true,
    coach: true,
  },
  {
    label: "Cart",
    path: "/user/cart",
    icon: <ShoppingCartOutlinedIcon />,
    loginRequired: true,
  },
];
