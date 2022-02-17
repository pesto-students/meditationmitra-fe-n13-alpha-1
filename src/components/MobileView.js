import PropTypes from "prop-types";
import Box from "./Box";
import Container from "./Container";

const MobileView = ({ children }) => (
  <Box mobBody display={["block", "none"]}>
    <Container mobbody="true" maxWidth="xl" marginx="10%">
      {children}
    </Container>
  </Box>
);

MobileView.propTypes = {
  children: PropTypes.any,
};

export default MobileView;
