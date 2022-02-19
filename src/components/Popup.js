import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
// import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import { PrimaryButton } from "./Buttons";

const Popup = ({ open, onClose }) => (
  <Dialog open={open}>
    <DialogTitle style={{ textAlign: "center" }}>
      Welcome to Meditation Mitra
    </DialogTitle>
    <DialogContent>
      <Stack spacing={4}>
        <Typography variant="body1">
          How would you like to register yourself?
        </Typography>
        <PrimaryButton onClick={onClose}>Register as User</PrimaryButton>
        <PrimaryButton>Register as Instructor</PrimaryButton>
      </Stack>
    </DialogContent>
  </Dialog>
);

Popup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export const LoaderPopup = ({ open }) => (
  <Dialog open={open}>
    <img src="/images/loader.gif" width={100} />
  </Dialog>
);

LoaderPopup.propTypes = {
  open: PropTypes.bool,
  // onClose: PropTypes.func,
};
export default Popup;
