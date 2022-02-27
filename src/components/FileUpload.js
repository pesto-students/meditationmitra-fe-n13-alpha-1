import PropTypes from "prop-types";
import Box from "./Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useDispatch, useSelector } from "react-redux";
import { courseActions } from "../api/reducers/courseReducer";

const FileUpload = ({ id = "fileId", display, icon, image }) => {
  const dispatch = useDispatch();
  const { imageURL } = useSelector((state) => state.courseReducer);
  const onfileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      dispatch(courseActions.updateFile({ file: selectedFile, imageURL }));
    } else {
      dispatch(courseActions.updateFile({ file: null, imageURL: image }));
    }
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
  image: PropTypes.string,
};

export default FileUpload;
