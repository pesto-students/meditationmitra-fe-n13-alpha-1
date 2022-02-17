import styled from "@emotion/styled";
import { compose, spacing, typography, color, flexbox } from "@mui/system";

export const Section = styled.section`
  ${compose(spacing, typography, color, flexbox)}
  padding: 1rem;
  background: ${({ bgColor }) => bgColor && bgColor};
  position: ${({ position }) => position && position};
  min-height: 35px;
  color: ${({ color }) => color && color};
`;

export const FooterSection = styled(Section)`
  margin-top: 5%;
  padding: 5vh 0 10vh 0;
`;
