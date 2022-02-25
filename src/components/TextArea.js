import {
  FormControl,
  FormGroup,
  FormLabel,
  TextareaAutosize,
} from "@mui/material";
import PropTypes from "prop-types";

const TextArea = ({ title, placeholder, value }) => (
  <FormControl fullWidth sx={{ margin: "2% 0" }}>
    <FormLabel>{title}</FormLabel>
    <FormGroup>
      <TextareaAutosize
        variant="outlined"
        placeholder={placeholder}
        value={value}
        minRows={5}
        maxRows={10}
      />
    </FormGroup>
  </FormControl>
);

TextArea.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
