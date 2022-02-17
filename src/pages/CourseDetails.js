import { Divider } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import { Typography } from "../components/Typography";
import { Button, SuccessButton, PrimaryButton } from "../components/Buttons";
import Box from "../components/Box";
import Grid from "../components/Grid";
import Stack from "../components/Stack";
import Span from "../components/Span";
import { courseSection } from "../__mock__/__mock__";
import { CourseAccordion } from "../components/Accordions";
import Container from "../components/Container";
import { Section } from "../components/Section";

const CourseDetails = () => {
  const [mobViewHeight, setMoBViewHeight] = useState("55%");
  const [seeDetailsBtnLabel, setSeeDetailsBtnLabel] = useState("See Details");
  const [showDetailsFlag, setShowDetailsFlag] = useState(true);

  const showMoreDetails = () => {
    setMoBViewHeight("90%");
    setSeeDetailsBtnLabel("Hide Details");
    setShowDetailsFlag(false);
  };
  const hideMoreDetails = () => {
    setMoBViewHeight("55%");
    setSeeDetailsBtnLabel("See Details");
    setShowDetailsFlag(true);
  };
  const gridItemStyles = {
    borderRight: "1px solid var(--orange)",
    paddingTop: "0",
  };

  const sections = () =>
    courseSection.map((section) => (
      <CourseAccordion key={"section" + section.id} section={section} />
    ));

  return (
    <>
      <DeskView container={false}>
        <Section
          bgColor="var(--orange)"
          position="relative"
          style={{ marginBottom: "10vh" }}
        >
          <Container maxWidth="lg">
            <Box sx={{ padding: "2rem 0", color: "var(--white)" }}>
              <Typography variant="h4">Course Name</Typography>
              <Typography variant="body1">
                Phasellus vestibulum lorem sed risus ultricies tristique nulla
                aliquet. Vel quam elementum pulvinar etiamnim lobortis
                scelerisque. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur....
              </Typography>
            </Box>
          </Container>
        </Section>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={2} sx={gridItemStyles}>
              <Stack direction="row" spacing={2}>
                <AccountCircleIcon fontSize="large" />
                <Box>
                  <Typography variant="body1">Trainer</Typography>
                  <Typography variant="body2">Trainer Name</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={2} sx={gridItemStyles}>
              <Typography variant="body1">Category</Typography>
              <Typography variant="body2">Meditation</Typography>
            </Grid>
            <Grid item xs={2} sx={gridItemStyles}>
              <Typography>Reviews</Typography>
              <Stack direction="row">
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <Typography>(123)</Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} sx={{ paddingTop: "0" }}>
              <Stack direction="row" spacing={1}>
                <FavoriteBorderIcon />
                <Typography>Wishlist</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ padding: "2rem 7rem" }}>{sections()}</Box>
      </DeskView>
      <MobileView height={mobViewHeight} bgcolor="var(--white)">
        <Typography variant="body1" sx={{ margin: "6% 0 1% 0" }}>
          Description
        </Typography>
        <Typography variant="body2">
          Phasellus vestibulum lorem sed risus ultricies tristique nulla
          aliquet. Vel quam elementum pulvinar etiamnim lobortis scelerisque.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur....
        </Typography>
        <Button variant="text" txcolor="var(--orange)">
          Show more
        </Button>
        <Divider />
        <Typography>Trainer</Typography>
        <Box
          sx={{
            width: "90%",
            padding: "5% 5%",
            borderRadius: "10px",
            background: "var(--bgColor)",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <img />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="subtitle2">Trainer Name</Typography>
              <Span>No.Of courses</Span> <Span>No.Of students</Span>
            </Grid>
          </Grid>
        </Box>
        <Stack direction="row" spacing={6} mt={1}>
          <PrimaryButton
            onClick={showDetailsFlag ? showMoreDetails : hideMoreDetails}
          >
            {seeDetailsBtnLabel}
          </PrimaryButton>
          <SuccessButton>Add to Cart</SuccessButton>
        </Stack>
        <Box
          sx={{
            padding: "2rem 0",
            display: showDetailsFlag ? "none" : "block",
          }}
        >
          {sections()}
        </Box>
      </MobileView>
    </>
  );
};

export default CourseDetails;
