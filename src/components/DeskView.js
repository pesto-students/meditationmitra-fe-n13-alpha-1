import Box from "./Box";
import Container from "./Container";
import PropTypes from "prop-types";

const DeskView = ({ children, noContainer }) => (
  <Box display={["none", "none", "block"]}>
    {noContainer ? children : <Container maxWidth="xl">{children}</Container>}
  </Box>
);

DeskView.propTypes = {
  children: PropTypes.any,
  noContainer: PropTypes.bool,
};

export default DeskView;
