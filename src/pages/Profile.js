import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import TextField from "../components/TextField";
import Container from "../components/Container";
import Grid from "../components/Grid";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.authReducer);
  const Form = () => (
    <>
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
        <Form />
      </MobileView>
    </>
  );
};

export default Profile;
