import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PROJECT_TITLE } from "../../utils/Constants";
import Box from "../Box";
import Container from "../Container";
import Grid from "../Grid";
import { LogoLink } from "../Link";
import Stack from "../Stack";
import { Button, PrimaryButton } from "../Buttons";
import BottomNav from "../Navigator/BottomNav";
import TopNav from "../Navigator/TopNav";
import { authActions } from "../../api/reducers/authReducer";
import Popup from "../Popup";
import { MEMBER_ROLE } from "../../utils/Constants";
// import { MenuLink } from "../Link";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { isLoggedIn, userInfo } = useSelector((state) => state.authReducer);

  const handlePopupOpen = () => {
    setOpen(true);
  };

  const handlePopupClose = () => {
    setOpen(false);
  };
  let menuItems = [
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

  const onLogout = () => {
    dispatch(authActions.logout({ isLoggedIn: false, user: {} }));
  };

  const handleNavigation = (selectedNavigation = "/") =>
    navigate(selectedNavigation);

  const NavBar = ({ mobile }) => {
    let items = [];
    if (isLoggedIn) {
      if (userInfo?.role === MEMBER_ROLE) {
        items = menuItems.filter((item) => !item.courch);
      } else {
        items = menuItems.filter((item) => item.courch);
      }
    } else {
      items = menuItems.filter((item) => !item.loginRequired);
    }
    return mobile ? (
      <Box mobHeader display={["block", "block", "none"]}>
        <BottomNav items={items} onNavigate={handleNavigation} />
      </Box>
    ) : (
      <>
        <TopNav items={items} onNavigate={handleNavigation} />
        {isLoggedIn && (
          <Button
            onClick={() => onLogout()}
            color="primary"
            txColor="var(--black)"
            startIcon={<LogoutOutlinedIcon />}
            variant="text"
          >
            Logout
          </Button>
        )}
      </>
    );
  };

  NavBar.propTypes = {
    mobile: PropTypes.bool,
  };

  useEffect(() => {
    if (!isLoggedIn) handleNavigation();
    if (userInfo?.isNewUser) handlePopupOpen();
    else if (isLoggedIn) handleNavigation("/enrolled-courses");
  }, [isLoggedIn]);

  const signIn = () => {
    try {
      dispatch(authActions.fetchAuth());
    } catch (e) {
      // TODO: integrate with component level error boundary
      console.log(e);
    }
  };

  return (
    <>
      <Box header display={["none", "none", "block"]}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={4}>
                <LogoLink
                  component="button"
                  onClick={() => handleNavigation("/")}
                >
                  {PROJECT_TITLE}
                </LogoLink>
                <NavBar />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" spacing={2} justifyContent="right">
                {isLoggedIn || (
                  <>
                    <PrimaryButton
                      variant="contained"
                      size="small"
                      onClick={handlePopupOpen}
                    >
                      Guest Login
                    </PrimaryButton>
                    <PrimaryButton
                      variant="contained"
                      size="small"
                      onClick={signIn}
                    >
                      Google Login
                    </PrimaryButton>
                  </>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <NavBar mobile />
      <Popup open={open} onClose={handlePopupClose}></Popup>
    </>
  );
};

export default Header;
