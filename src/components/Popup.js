import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { PrimaryButton } from "./Buttons";
import Box from "./Box";

const Popup = ({ open, onClose, onLogin }) => (
  <Dialog open={open}>
    <Box sx={{ paddingX: "30px", paddingY: "50px" }}>
      <Box sx={{ justifyContent: "end" }}>
        <CloseOutlinedIcon sx={{ cursor: "pointer" }} onClick={onClose} />
      </Box>
      <DialogTitle style={{ textAlign: "center" }}>
        Welcome to Meditation Mitra
      </DialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Typography variant="body1">
            How would you like to register yourself?
          </Typography>
          <PrimaryButton onClick={() => onLogin("member")}>User</PrimaryButton>
          <PrimaryButton onClick={() => onLogin("coach")}>
            Instructor
          </PrimaryButton>
        </Stack>
      </DialogContent>
    </Box>
  </Dialog>
);

Popup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func,
};

export const LoaderPopup = ({ open }) => (
  <Dialog open={open}>
    <img src="/images/loader.gif" width={100} />
  </Dialog>
);

LoaderPopup.propTypes = {
  open: PropTypes.bool,
};
export default Popup;
