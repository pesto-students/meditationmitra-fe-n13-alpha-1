import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import { PROJECT_TITLE } from "../../utils/Constants";
import Box from "../Box";
import Container from "../Container";
import Grid from "../Grid";
import { LogoLink } from "../Link";
import Stack from "../Stack";
import { PrimaryButton } from "../Buttons";
import BottomNav from "../Navigator/BottomNav";
import TopNav from "../Navigator/TopNav";
// import { signInWithGoogle } from "../../Firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../api/reducers/authReducer";
import { useEffect, useState } from "react";
import Popup from "../Popup";
// import AddCourse from "../../pages/AddCourse";
import { MEMBER_ROLE } from "../../utils/Constants";

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
      loginRequired: true,
      courch: true,
    },
  ];

  const handleNavigation = (selectedNavigation = "/") =>
    navigate(selectedNavigation);

  const BottomHeader = () => (
    <Box mobHeader display={["block", "block", "none"]}>
      <BottomNav items={menuItems} onNavigate={handleNavigation} />
    </Box>
  );

  const TopNavBar = () => {
    if (isLoggedIn) {
      if (userInfo?.user?.role === MEMBER_ROLE) {
        return (
          <TopNav
            items={menuItems.filter((item) => !item.courch)}
            onNavigate={handleNavigation}
          />
        );
      } else {
        return (
          <TopNav
            items={menuItems.filter((item) => item.courch)}
            onNavigate={handleNavigation}
          />
        );
      }
    } else {
      return (
        <TopNav
          items={menuItems.filter((item) => !item.loginRequired)}
          onNavigate={handleNavigation}
        />
      );
    }
  };

  useEffect(() => {
    if (!isLoggedIn) handleNavigation();
    if (userInfo?.isNewUser) handlePopupOpen();
  }, [isLoggedIn]);

  const signIn = () => {
    try {
      dispatch(authActions.fetchAuth());
    } catch (e) {
      // TODO: integrate with component level error boundary
      console.log(e);
    }
  };

  // console.log(isLoggedIn, userInfo);

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
                {/* <TopNav
                  items={menuItems.filter((item) => !item.loginRequired)}
                  onNavigate={handleNavigation}
                /> */}
                <TopNavBar />
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
      <BottomHeader />
      <Popup open={open} onClose={handlePopupClose}></Popup>
    </>
  );
};

export default Header;
