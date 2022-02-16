import styled from "@emotion/styled";
import { Typography as MaterialTypography } from "@mui/material";

export const Typography = styled(MaterialTypography)``;

export const TextDark = styled(MaterialTypography)`
  margin: auto;
  font-family: var(--ff-bm-sarif);
  font-size: var(--fs-logo-text);
  font-color: var(--orange);
`;

export const TextBlack = styled(MaterialTypography)`
  font-family: var(--ff-bm-sarif);
  font-size: var(--fs-logo-text);
  font-color: var(--Black);
  font-weight: var(--bold-weight);
`;

export const TextWhite = styled(MaterialTypography)`
  font-family: var(--ff-bm-sarif);
  font-size: var(--fs-logo-text);
  font-color: var(--white);
`;
 
export const TextGray = styled(Typography)`
font-color: var(--white-gray);
font-size: var(--fs-base);`;