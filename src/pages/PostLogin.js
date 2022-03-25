import PropTypes from "prop-types";
import MobileView from "../components/MobileView";
import { Typography } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import Container from "../components/Container";
import Stack from "../components/Stack";
import Box from "../components/Box";
import {
  COLUMN,
  CENTER,
  LOGO,
  FLEX,
  CONTAINED,
  SMALL,
} from "../utils/Constants";

const PostLogin = ({ handlePopupOpen, signIn }) => {
  return (
    <>
      <MobileView>
        <Container>
          <Stack direction={COLUMN} spacing={4}>
            <Box mt={10}>
              <Box sx={{ display: FLEX, justifyContent: CENTER }}>
                <img src={LOGO} width={250} />
              </Box>
              <Typography textAlign={CENTER}>Welcome to</Typography>
              <Typography textAlign={CENTER}>Meditation Mitra</Typography>
              <Typography textAlign={CENTER}>
                How would you like to register yourself?
              </Typography>
            </Box>
            <PrimaryButton
              fullWidth
              variant={CONTAINED}
              size={SMALL}
              onClick={handlePopupOpen}
            >
              Guest Login
            </PrimaryButton>
            <PrimaryButton
              fullWidth
              variant={CONTAINED}
              size={SMALL}
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
