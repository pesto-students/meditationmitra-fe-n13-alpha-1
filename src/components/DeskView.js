import Box from "./Box";
import Container from "./Container";
import PropTypes from "prop-types";

const DeskView = ({ children }) => (
  <Box display={["none", "block"]}>
    <Container>{children}</Container>
    <Container maxWidth="xl">{children}</Container>
  </Box>
);

DeskView.propTypes = {
  children: PropTypes.any,
};

export default DeskView;
