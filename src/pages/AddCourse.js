import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Container from "../components/Container";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import Stack from "../components/Stack";
import { Typography } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import Chips from "../components/Chips";
// import { Grid } from "@mui/material";

const AddCourse = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const Form = () => (
    <Container mt={2}>
      <TextField
        title="Course Title"
        placeholder="ex. Meditation for beginners"
      />
      <TextArea
        title="Course Description"
        placeholder="Write a short para on your course"
      />
      <Chips items={["Focus", "Meditation"]} handleClick={handleClick} />
      <Stack direction="row" spacing={4}>
        <Typography component="span" sx={{ lineHeight: "2.5em" }}>
          Add Section
        </Typography>
        <Fab
          color="primary"
          size="small"
          aria-label="add"
          sx={{ marginLeft: "15px" }}
        >
          <AddIcon />
        </Fab>
      </Stack>
      <TextField title="Section Title" placeholder="Title for the Section" />
      <Stack direction="row" spacing={4}>
        <Typography component="span">Add Session</Typography>
        <Fab color="primary" size="small" aria-label="add">
          <AddIcon />
        </Fab>
      </Stack>
      <TextField placeholder="Title for the Session" />
      <TextField placeholder="Add Session Date" />
      <Stack direction="row" spacing={4}>
        <PrimaryButton>Save</PrimaryButton>
        {/* <PrimaryButton>Rest</PrimaryButton> */}
      </Stack>
    </Container>
  );
  return (
    <>
      <DeskView>
        <Container>
          <Form />
        </Container>
      </DeskView>
      <MobileView>
        <Form />
      </MobileView>
    </>
  );
};
export default AddCourse;
