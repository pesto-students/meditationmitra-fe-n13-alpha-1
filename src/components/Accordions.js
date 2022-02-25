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
import { GetMeetLink } from "../api/services/meetService";

export const CourseAccordion = ({
  section,
  isPurchased,
  courseId,
  fetchData,
}) => {
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
            onEventScheduled={async () => {
              await GetMeetLink({
                courseId,
                sectionName: section.sectionTitle,
              });
              await fetchData();
              // console.log("onEventScheduled", data);
            }}
          >
            <CalendlyButton
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
  courseId: PropTypes.string,
  fetchData: PropTypes.func,
};
