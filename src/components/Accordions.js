import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { CalendlyEventListener } from "react-calendly";
import { CalendlyButton, PrimaryButton } from "./Buttons";
import { GetMeetLink, GetCalendlyEvent } from "../api/services/meetService";
import { BODY1, H6, TEXT, _BLANK } from "../utils/Constants";

export const CourseAccordion = ({
  section,
  isPurchased,
  courseId,
  fetchData,
  link,
}) => {
  const [googleMeetCal, setGoogleMeetCal] = useState(true);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant={H6}>{section.sectionTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant={BODY1}>{section.sectionDescription}</Typography>

        {isPurchased && !link && (
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

        {isPurchased && link && (
          <PrimaryButton href={link} target={_BLANK} variant={TEXT}>
            Google Meet
          </PrimaryButton>
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
  link: PropTypes.any,
};
