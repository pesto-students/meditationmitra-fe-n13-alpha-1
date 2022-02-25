import PropTypes from "prop-types";
import MobileView from "../components/MobileView";
import { Typography } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import Container from "../components/Container";
import Stack from "../components/Stack";
import Box from "../components/Box";

const PostLogin = ({ handlePopupOpen, signIn }) => {
  return (
    <>
      <MobileView>
        <Container>
          <Stack direction="column" spacing={4}>
            <Box mt={10}>
              <Typography textAlign="center">Welcome to</Typography>
              <Typography textAlign="center">Meditation Mitra</Typography>
              <Typography textAlign="center">
                How would you like to register yourself?
              </Typography>
            </Box>
            <PrimaryButton
              fullWidth
              variant="contained"
              size="small"
              onClick={handlePopupOpen}
            >
              Guest Login
            </PrimaryButton>
            <PrimaryButton
              fullWidth
              variant="contained"
              size="small"
              onClick={signIn}
            >
              Google Login
            </PrimaryButton>
          </Stack>
        </Container>
      </MobileView>
    </>
  );
};

PostLogin.propTypes = {
  handlePopupOpen: PropTypes.func,
  signIn: PropTypes.func,
};

export default PostLogin;
