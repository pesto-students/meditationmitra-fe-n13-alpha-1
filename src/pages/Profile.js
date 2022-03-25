import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import TextField from "../components/TextField";
import Container from "../components/Container";
import Grid from "../components/Grid";
import { PrimaryButton } from "../components/Buttons";
import Stack from "../components/Stack";
import { Typography } from "../components/Typography";
import { authActions } from "../api/reducers/authReducer";
import {
  HOME_PATH,
  DEFAULT_AVATAR,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  ROLE,
  END,
  COLUMN,
} from "../utils/Constants";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authReducer);
  const onLogout = () => {
    navigate(HOME_PATH);
    dispatch(authActions.logout());
  };
  const Form = () => (
    <>
      <Typography variant="h5" mt="20px">
        Profile
      </Typography>
      <TextField title={FIRST_NAME} value={userInfo.firstName} disabled />
      <TextField title={LAST_NAME} value={userInfo.lastName} disabled />
      <TextField title={EMAIL} value={userInfo.email} disabled />
      <TextField title={ROLE} value={userInfo.role} disabled />
    </>
  );
  return (
    <>
      <DeskView>
        <Container sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4} alignContent={END}>
              <img src={DEFAULT_AVATAR} width="50%" />
            </Grid>
            <Grid item xs={8}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </DeskView>
      <MobileView>
        <Stack direction={COLUMN} spacing={4}>
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
