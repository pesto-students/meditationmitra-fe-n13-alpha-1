import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { PrimaryButton } from "./Buttons";

const Popup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClick={onClose}>
      <DialogTitle style={{ textAlign: "center" }}>
        Welcome to Meditation Mitra
      </DialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Typography variant="body1">
            How would you like to register yourself?
          </Typography>
          <PrimaryButton>Register as User</PrimaryButton>
          <PrimaryButton>Register as Instructor</PrimaryButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

Popup.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Popup;
