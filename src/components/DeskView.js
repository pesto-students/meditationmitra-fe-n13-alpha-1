import Box from "./Box";
import Container from "./Container";
import PropTypes from "prop-types";
import { DESKTOP_RESPONSIVE, XL } from "../utils/Constants";

const DeskView = ({ children, noContainer }) => (
  <Box display={DESKTOP_RESPONSIVE}>
    {noContainer ? children : <Container maxWidth={XL}>{children}</Container>}
  </Box>
);

DeskView.propTypes = {
  children: PropTypes.any,
  noContainer: PropTypes.bool,
};

export default DeskView;
