import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import TextField from "../components/TextField";
import Container from "../components/Container";
import Grid from "../components/Grid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import Stack from "../components/Stack";
import { Typography } from "../components/Typography";
import { authActions } from "../api/reducers/authReducer";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authReducer);
  const onLogout = () => {
    navigate("/");
    dispatch(authActions.logout());
  };
  const Form = () => (
    <>
      <Typography variant="h5" mt="20px">
        Profile
      </Typography>
      <TextField title="First Name" value={userInfo.firstName} disabled />
      <TextField title="Last Name" value={userInfo.lastName} disabled />
      <TextField title="Email" value={userInfo.email} disabled />
      <TextField title="Role" value={userInfo.role} disabled />
    </>
  );
  return (
    <>
      <DeskView>
        <Container sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4} alignContent="end">
              <img src="/images/default-avatar.png" width="50%" />
            </Grid>
            <Grid item xs={8}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </DeskView>
      <MobileView>
        <Stack direction="column" spacing={4}>
          <Form />
          <PrimaryButton fullWidth onClick={onLogout}>
            Logout
          </PrimaryButton>
        </Stack>
      </MobileView>
    </>
  );
};

export default Profile;
