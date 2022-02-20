import PropTypes from "prop-types";
import Box from "./Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useDispatch } from "react-redux";
import { courseActions } from "../api/reducers/courseReducer";

const FileUpload = ({ id = "fileId", display, icon }) => {
  const dispatch = useDispatch();
  const onfileChange = (e) =>
    dispatch(courseActions.updateFile(e.target.files[0]));

  return (
    <Box display={display}>
      <Box component="label" htmlFor={id}>
        {icon || (
          <>
            <UploadFileIcon fontSize="large" />
            <Box component="span">Choose Poster</Box>
          </>
        )}
      </Box>

      <Box
        component="input"
        type="file"
        id={id}
        hidden
        accept="image/*"
        onChange={onfileChange}
        // value={value}
      />
    </Box>
  );
};

FileUpload.propTypes = {
  id: PropTypes.string,
  display: PropTypes.array,
  icon: PropTypes.any,
  mobile: PropTypes.bool,
  // value: PropTypes.string,
};

export default FileUpload;
