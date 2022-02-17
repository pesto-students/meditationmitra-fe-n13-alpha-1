import PropTypes from "prop-types";
import Box from "./Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const FileUpload = ({ id = "fileId", display, icon }) => (
  <Box display={display}>
    <Box component="label" htmlFor={id}>
      {icon || (
        <>
          <UploadFileIcon fontSize="large" />
          <Box component="span">Choose Poster</Box>
        </>
      )}
    </Box>

    <Box component="input" type="file" id={id} hidden accept="image/*" />
  </Box>
);

FileUpload.propTypes = {
  id: PropTypes.string,
  display: PropTypes.array,
  icon: PropTypes.any,
};

export default FileUpload;
