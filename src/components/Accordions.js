import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { CalendlyButton } from "./Buttons";
import { CalendlyEventListener } from "react-calendly";
// import { useState } from "react";

export const CourseAccordion = ({ section, isPurchased }) => {
  // const [calendlyBtnVisible, setCalendlyBtnVisible] = useState(true);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6">{section.sectionTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1">{section.sectionDescription}</Typography>

        {isPurchased && (
          <CalendlyEventListener
            // onDateAndTimeSelected={(data) => {
            //   console.log("onDateAndTimeSelected", data);
            // }}
            onEventScheduled={(data) => {
              console.log("onEventScheduled", data);
              // setCalendlyBtnVisible(false);
            }}
          >
            <CalendlyButton
              // styles={{ display: calendlyBtnVisible ? "block" : "none" }}
              url="https://calendly.com/nukesh-poodi"
              text="Schedule"
            />
          </CalendlyEventListener>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

CourseAccordion.propTypes = {
  section: PropTypes.any,
  isPurchased: PropTypes.bool,
};
