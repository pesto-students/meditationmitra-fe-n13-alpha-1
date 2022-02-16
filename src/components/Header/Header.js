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

const Header = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      label: "Home",
      label: "My Courses",
      path: "/enrolled-courses",
      icon: <HomeOutlinedIcon />,
    },
    {
      label: "Courses",
      path: "/courses",
      icon: <SearchIcon />,
    },
    {
      label: "Profile",
      path: "/user/profile",
      icon: <PermIdentityIcon />,
    },
  ];

  const handleNavigation = (selectedNavigation = "/") =>
    navigate(selectedNavigation);

  const bottomHeader = () => (
    <Box mobHeader display={["block", "block", "none"]}>
      <BottomNav items={menuItems} onNavigate={handleNavigation} />
    </Box>
  );
  return (
    <>
      <Box header display={["none", "none", "block"]}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={4}>
                <LogoLink
                  component="button"
                  onClick={() => handleNavigation("/enrolled-courses")}
                >
                  {PROJECT_TITLE}
                </LogoLink>
                <TopNav items={menuItems} onNavigate={handleNavigation} />
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" spacing={2} justifyContent="right">
                <PrimaryButton variant="contained" size="small">
                  Guest Login
                </PrimaryButton>
                <PrimaryButton variant="contained" size="small">
                  Google Login
                </PrimaryButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {bottomHeader()}
    </>
  );
};

export default Header;
