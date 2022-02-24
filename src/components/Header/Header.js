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
import Popup, { LoaderPopup } from "../Popup";
import { MEMBER_ROLE } from "../../utils/Constants";
import Span from "../Span";
import { menuItems } from "../../utils/MenuItems";

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

  const handleNavigation = (selectedNavigation = "/") =>
    navigate(selectedNavigation);

  useEffect(() => {
    console.log("useEff");
    if (!isLoggedIn) handleNavigation();
    else if (isLoggedIn) handleNavigation("/enrolled-courses");
  }, []);

  useEffect(() => {
    console.log("useEff on isNewUser");
    if (isNewUser) updateRolePopupOpen();
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
      firstName: "Guest",
      lastName: "Guest",
      avatar: "",
    };
    if (userType === "member") {
      data.email = "guest.member@medmitra.com";
    } else {
      data.email = "guest.coach@medmitra.com";
    }
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
    // console.log("New user " + isNewUser);
    if (isLoggedIn) {
      if (userInfo?.role === MEMBER_ROLE) {
        items = menuItems.filter((item) => !item.coach);
      } else {
        items = menuItems.filter((item) => item.coach);
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
                {isLoggedIn ? (
                  <>
                    <Span
                      style={{
                        textTransform: "capitalize",
                        marginLeft: 5,
                        fontSize: "var(--fs-bold-weight)",
                      }}
                    >
                      Welcome back, {userInfo.firstName} {userInfo.lastName}
                    </Span>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={openMenu ? "long-menu" : undefined}
                      aria-expanded={openMenu ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={() => {
                          handleNavigation("/user/profile");
                          handleClose();
                        }}
                      >
                        <Button
                          variant="text"
                          txcolor="var(--black)"
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
                          color="primary"
                          txcolor="var(--black)"
                          startIcon={<LogoutOutlinedIcon />}
                          variant="text"
                        >
                          Logout
                        </Button>
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
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
