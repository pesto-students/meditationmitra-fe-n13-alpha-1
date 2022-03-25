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
import {
  BODY1,
  CENTER,
  COACH_ROLE,
  END,
  FLEX,
  LOADER_IMG,
  MEMBER_ROLE,
  POINTER,
} from "../utils/Constants";

const Popup = ({ open, onClose, onLogin }) => (
  <Dialog open={open}>
    <Box sx={{ paddingX: "30px", paddingY: "50px" }}>
      <Box sx={{ display: FLEX, justifyContent: END }}>
        <CloseOutlinedIcon sx={{ cursor: POINTER }} onClick={onClose} />
      </Box>
      <DialogTitle style={{ textAlign: CENTER }}>
        Welcome to Meditation Mitra
      </DialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Typography variant={BODY1}>
            How would you like to register yourself?
          </Typography>
          <PrimaryButton onClick={() => onLogin(MEMBER_ROLE)}>
            User
          </PrimaryButton>
          <PrimaryButton onClick={() => onLogin(COACH_ROLE)}>
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
    <img src={LOADER_IMG} width={100} />
  </Dialog>
);

LoaderPopup.propTypes = {
  open: PropTypes.bool,
};

export const PaymentPopup = ({ open, childern }) => {
  console.log(childern);
  return (
    <Dialog open={open}>
      <Box sx={{ paddingX: "30px", paddingY: "50px" }}>{childern}</Box>
    </Dialog>
  );
};

PaymentPopup.propTypes = {
  open: PropTypes.bool,
  childern: PropTypes.any,
};

export default Popup;
