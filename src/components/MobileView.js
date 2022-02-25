import PropTypes from "prop-types";
import Box from "./Box";
import Container from "./Container";

const MobileView = ({ children }) => (
  <Box
    display={["block", "block", "none"]}
    width="100%"
    height="100%"
    bgcolor="var(--orange)"
    zIndex="0"
    position="absolute"
  >
    <Box mobBody>
      <Container mobbody="true" maxWidth="xl" marginx="10%">
        {children}
      </Container>
    </Box>
  </Box>
);

MobileView.propTypes = {
  children: PropTypes.any,
};

export default MobileView;
