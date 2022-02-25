import styled from "@emotion/styled";
import { Button as MaterialButton } from "@mui/material";
import { PopupButton } from "react-calendly";

export const Button = styled(MaterialButton)`
  box-shadow: none;
  color: ${({ txcolor }) => txcolor || "var(--white)"};
`;

export const PrimaryButton = styled(Button)`
  background: var(--orange);
  border: none;
  &:hover {
    background: var(--orange);
    border: none;
  }
`;

export const PrimaryTransparentButton = styled(Button)`
  border-color: var(--white);
`;

export const SecondaryButton = styled(Button)(() => ({
  fontSize: "var(--fs-h4)",
  position: "absolute",
  top: "21%",
  right: 0,
  padding: 0,
  fontWeight: "var(--semibold-weight)",
  color: "var(--orange)",
  letterSpacing: "2px",
}));

export const SuccessButton = styled(Button)`
  background: var(--success);
  border: none;
  &:hover {
    background: var(--success);
    border: none;
  }
`;

export const CalendlyButton = styled(PopupButton)`
  background: var(--orange);
  color: var(--white);
  border: none;
  min-width: 64px;
  padding: 4px 10px;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
`;
