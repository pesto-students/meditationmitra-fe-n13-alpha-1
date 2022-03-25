import PropTypes from "prop-types";
import {
  ABSOLUTE,
  MOBILE_RESPONSIVE,
  ORANGE,
  TRUE_STR,
  XL,
  ZERO,
  _100_PERC,
} from "../utils/Constants";
import Box from "./Box";
import Container from "./Container";

const MobileView = ({ children }) => (
  <Box
    display={MOBILE_RESPONSIVE}
    width={_100_PERC}
    height={_100_PERC}
    bgcolor={ORANGE}
    zIndex={ZERO}
    position={ABSOLUTE}
  >
    <Box mobBody>
      <Container mobbody={TRUE_STR} maxWidth={XL} marginx="10%">
        {children}
      </Container>
    </Box>
  </Box>
);

MobileView.propTypes = {
  children: PropTypes.any,
};

export default MobileView;
