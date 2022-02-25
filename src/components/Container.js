import styled from "@emotion/styled";
import { compose, spacing } from "@mui/system";
import { Container as MaterailContainer } from "@mui/material";

const Container = styled(MaterailContainer)`
  ${compose(spacing)}
  ${({ mobbody }) =>
    mobbody &&
    `
        height: 90%;
        overflow: auto;
        padding-bottom: 10%
    `};
`;

export default Container;
