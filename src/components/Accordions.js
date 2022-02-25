import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { CalendlyButton } from "./Buttons";
import { CalendlyEventListener } from "react-calendly";
import { GetMeetLink, GetCalendlyEvent } from "../api/services/meetService";

export const CourseAccordion = ({
  section,
  isPurchased,
  courseId,
  fetchData,
}) => {
  const [googleMeetCal, setGoogleMeetCal] = useState(true);
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
            onEventScheduled={async (data) => {
              if (googleMeetCal) {
                const cData = await GetCalendlyEvent();
                await GetMeetLink({
                  courseId,
                  sectionName: section.sectionTitle,
                  cData,
                });
                setGoogleMeetCal(false);
              }
              await fetchData();
              console.log("onEventScheduled", data);
            }}
            onDateAndTimeSelected={(data) => {
              console.log(data);
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
