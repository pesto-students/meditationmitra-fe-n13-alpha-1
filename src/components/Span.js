import styled from "@emotion/styled";
import { compose, spacing, typography, color, flexbox } from "@mui/system";

const Span = styled.span`
  ${compose(spacing, typography, color, flexbox)}
`;

Span.defaultProps = {
  marginRight: "10px",
  color: "#91919F",
};

export default Span;
