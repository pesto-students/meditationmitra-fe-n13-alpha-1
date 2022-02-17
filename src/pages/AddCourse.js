import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import Container from "../components/Container";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import Stack from "../components/Stack";
import { Typography } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import Chips from "../components/Chips";
import Grid from "../components/Grid";
import FileUpload from "../components/FileUpload";
import Box from "../components/Box";
import { useEffect, useState } from "react";

const AddCourse = () => {
  const [sections, setSections] = useState([]);
  const [sessions, setSessions] = useState([]);

  const Session = () => (
    <>
      <Typography variant="body1">Session {sessions.length + 1}</Typography>
      <TextField placeholder="Title for the Session" />
      <TextField placeholder="Add Session Date" />
    </>
  );

  const Section = () => (
    <>
      <Typography variant="body1">Section {sections.length + 1}</Typography>
      <TextField title="Section Title" placeholder="Title for the Section" />
      <Box
        sx={{
          border: "1px solid var(--orange)",
          padding: "2%",
          marginY: "2%",
        }}
      >
        <FabButton
          title="Add session"
          onClickFn={() => {
            setSessions([...sessions, Session()]);
          }}
        />
        {sessions.map((session, index) => (
          <Box key={index}>{session}</Box>
        ))}
      </Box>
    </>
  );

  useEffect(() => {
    if (sessions.length) setSessions([Session()]);
    if (sections.length) setSections([Section()]);
  }, []);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const FabButton = ({ title, onClickFn }) => (
    <Stack direction="row" spacing={4}>
      <Typography component="span" sx={{ lineHeight: "2.5em" }}>
        {title}
      </Typography>
      <Fab
        onClick={onClickFn}
        size="small"
        aria-label="add"
        sx={{
          marginLeft: "15px",
          background: "var(--orange)",
          color: "var(--white)",
          "&:hover": {
            background: "var(--orange)",
            color: "var(--white)",
          },
        }}
      >
        <AddIcon />
      </Fab>
    </Stack>
  );

  FabButton.propTypes = {
    title: PropTypes.string,
    onClickFn: PropTypes.func,
  };

  const Form = () => (
    <Container mt={2}>
      <TextField title="Title" placeholder="ex. Meditation for beginners" />
      <TextField title="Price" placeholder="ex. 2000" />
      <TextArea
        title="Course Description"
        placeholder="Write a short para on your course"
      />
      <Chips items={["Focus", "Meditation"]} handleClick={handleClick} />
      <FileUpload display={["block", "block", "none"]} />
      <Box
        sx={{ border: "1px solid var(--orange)", padding: "2%", marginY: "2%" }}
      >
        <FabButton
          title="Add Section"
          onClickFn={() => setSections([...sections, Section()])}
        />
        {sections.map((section, index) => (
          <Box key={index}>{section}</Box>
        ))}
      </Box>

      <Stack direction="row" spacing={4}>
        <PrimaryButton>Save</PrimaryButton>
      </Stack>
    </Container>
  );
  const DeskTopViewFileUplod = () => (
    <Box
      sx={{
        margin: "auto",
        marginTop: "100px",
        paddingTop: "13%",
        width: "40%",
        height: "20vh",
        background: "var(--gray)",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          marginTop: "30px",
          width: "30%",
        }}
      >
        <Fab
          size="small"
          aria-label="add"
          sx={{ margin: "auto", boxShadow: "none" }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
  return (
    <>
      <DeskView>
        <Container st>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FileUpload id="fileId" icon={<DeskTopViewFileUplod />} />
            </Grid>
            <Grid item xs={8}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </DeskView>
      <MobileView>
        <Form />
      </MobileView>
    </>
  );
};
export default AddCourse;
