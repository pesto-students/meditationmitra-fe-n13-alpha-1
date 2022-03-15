import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField as MaterialTextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { OUTLINED, WHITE } from "../utils/Constants";

const TextField = ({ title, placeholder, value, disabled }) => (
  <FormControl fullWidth sx={{ margin: "2% 0" }}>
    <FormLabel>{title}</FormLabel>
    <FormGroup>
      <MaterialTextField
        sx={{ background: WHITE }}
        variant={OUTLINED}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    </FormGroup>
  </FormControl>
);

TextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextField;
