import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  BLACK,
  BUTTON,
  CAPITALIZE,
  CONTAINED,
  DESKTOP_RESPONSIVE,
  EMPTY_STRING,
  FS_BOLD,
  GUEST,
  GUEST_COACH_EMAIL,
  GUEST_MEMBER_EMAIL,
  HOME_PATH,
  LONG_BUTTON,
  LONG_MENU,
  MOBILE_RESPONSIVE,
  MORE,
  PRIMARY,
  PROJECT_TITLE,
  RIGHT,
  ROW,
  SMALL,
  TEXT,
  TRUE_STR,
  USER_PROFILE_PATH,
  XL,
} from "../../utils/Constants";
import Box from "../Box";
import Container from "../Container";
import Grid from "../Grid";
import { LogoLink } from "../Link";
import Stack from "../Stack";
import { Button, PrimaryButton } from "../Buttons";
import BottomNav from "../Navigator/BottomNav";
import TopNav from "../Navigator/TopNav";
import { authActions } from "../../api/reducers/authReducer";
import Popup, { LoaderPopup } from "../Popup";
import { MEMBER_ROLE } from "../../utils/Constants";
import Span from "../Span";
import { menuItems } from "../../utils/MenuItems";
import PostLogin from "../../pages/PostLogin";
import MobileHomePage from "../../pages/MobileHomePage";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [updateRoleModal, setUpdateRoleModal] = useState(false);
  const { isFetching, isLoggedIn, userInfo, isNewUser } = useSelector(
    (state) => state.authReducer
  );
  const { cart } = useSelector((state) => state.courseReducer);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handlePopupOpen = () => setOpen(true);

  const updateRolePopupOpen = () => setUpdateRoleModal(true);

  const handlePopupClose = () => {
    setOpen(false);
    setUpdateRoleModal(false);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const onLogout = () => {
    handleNavigation();
    dispatch(authActions.logout());
  };

  const handleNavigation = (selectedNavigation = HOME_PATH) =>
    navigate(selectedNavigation);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!isLoggedIn) {
      const isLoginRequired = menuItems.find(
        (item) => item.path === currentPath
      );
      if (isLoginRequired) handleNavigation();
      else handleNavigation(currentPath);
    } else if (isLoggedIn) {
      handleNavigation(currentPath);
      //handleNavigation("/enrolled-courses");
    }
  }, []);

  useEffect(() => {
    if (isNewUser && userInfo.firstName !== GUEST) updateRolePopupOpen();
  }, [isNewUser]);

  const signIn = () => {
    try {
      dispatch(authActions.fetchAuth());
    } catch (e) {
      // TODO: integrate with component level error boundary
      console.log(e);
    }
  };

  const updateRole = (userType) => {
    setUpdateRoleModal(false);
    dispatch(authActions.updateUserRole({ role: userType }));
  };

  const signInAsGuest = (userType) => {
    const data = {
      firstName: GUEST,
      lastName: GUEST,
      avatar: EMPTY_STRING,
    };

    data.email =
      userType === MEMBER_ROLE ? GUEST_MEMBER_EMAIL : GUEST_COACH_EMAIL;

    try {
      dispatch(authActions.fetchAuth(data));
      setOpen(false);
    } catch (e) {
      // TODO: integrate with component level error boundary
      console.log(e);
    }
  };

  const NavBar = ({ mobile }) => {
    let items = [];
    if (isLoggedIn) {
      if (userInfo?.role === MEMBER_ROLE) {
        items = menuItems.filter((item) => !item.coach || item.common);
      } else {
        items = menuItems.filter((item) => item.coach || item.common);
      }
    } else {
      items = menuItems.filter((item) => !item.loginRequired);
    }
    return mobile ? (
      <Box mobHeader display={MOBILE_RESPONSIVE}>
        <BottomNav items={items} onNavigate={handleNavigation} />
      </Box>
    ) : (
      <>
        <TopNav
          items={items.filter((it) => !it.mobile)}
          onNavigate={handleNavigation}
          NoOfCartItems={cart?.length}
        />
      </>
    );
  };

  NavBar.propTypes = {
    mobile: PropTypes.bool,
  };

  return (
    <>
      <Box header display={DESKTOP_RESPONSIVE}>
        <Container maxWidth={XL}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction={ROW} spacing={4}>
                <LogoLink
                  component={BUTTON}
                  onClick={() => handleNavigation(HOME_PATH)}
                >
                  {PROJECT_TITLE}
                </LogoLink>
                <NavBar />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction={ROW} spacing={2} justifyContent={RIGHT}>
                {isLoggedIn ? (
                  <>
                    <Span
                      style={{
                        textTransform: CAPITALIZE,
                        marginLeft: 5,
                        fontSize: FS_BOLD,
                      }}
                    >
                      Welcome back, {userInfo.firstName} {userInfo.lastName}
                    </Span>
                    <IconButton
                      aria-label={MORE}
                      id={LONG_BUTTON}
                      aria-controls={openMenu ? LONG_MENU : undefined}
                      aria-expanded={openMenu ? TRUE_STR : undefined}
                      aria-haspopup={TRUE_STR}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id={LONG_MENU}
                      MenuListProps={{
                        "aria-labelledby": LONG_BUTTON,
                      }}
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={() => {
                          handleNavigation(USER_PROFILE_PATH);
                          handleClose();
                        }}
                      >
                        <Button
                          variant={TEXT}
                          txcolor={BLACK}
                          startIcon={<AccountCircleTwoToneIcon />}
                        >
                          Profile
                        </Button>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                        }}
                      >
                        <Button
                          onClick={() => onLogout()}
                          color={PRIMARY}
                          txcolor={BLACK}
                          startIcon={<LogoutOutlinedIcon />}
                          variant={TEXT}
                        >
                          Logout
                        </Button>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <>
                    <PrimaryButton
                      variant={CONTAINED}
                      size={SMALL}
                      onClick={handlePopupOpen}
                    >
                      Guest Login
                    </PrimaryButton>
                    <PrimaryButton
                      variant={CONTAINED}
                      size={SMALL}
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
      {!isLoggedIn && (
        <PostLogin handlePopupOpen={handlePopupOpen} signIn={signIn} />
      )}
      {isLoggedIn && window.location.pathname === HOME_PATH && (
        <MobileHomePage />
      )}
      <NavBar mobile />
      <Popup
        open={open}
        onClose={handlePopupClose}
        onLogin={signInAsGuest}
      ></Popup>
      <Popup
        open={updateRoleModal}
        onClose={handlePopupClose}
        onLogin={updateRole}
      ></Popup>
      <LoaderPopup open={isFetching} />
    </>
  );
};

export default Header;
