import PropTypes from "prop-types";
import Box from "./Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useDispatch } from "react-redux";
import { courseActions } from "../api/reducers/courseReducer";
import { useState } from "react";

const FileUpload = ({ id = "fileId", display, icon }) => {
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const onfileChange = (e) => {
    if (e.target.files[0]) setImageURL(URL.createObjectURL(e.target.files[0]));
    dispatch(courseActions.updateFile(e.target.files[0]));
  };

  return (
    <Box display={display}>
      <Box component="label" htmlFor={id}>
        {(imageURL ? (
          <Box
            sx={{
              margin: "auto",
              marginTop: "100px",
              width: "40%",
              height: "13vh",
              border: "1px dashed var(--black)",
            }}
          >
            <img src={imageURL} width="100%" height="100vh" />
          </Box>
        ) : (
          icon
        )) || (
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
