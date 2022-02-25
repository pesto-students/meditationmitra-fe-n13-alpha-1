import { FormControl, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { Chip } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import Box from "../components/Box";
import FileUpload from "../components/FileUpload";
import Grid from "../components/Grid";
import Container from "../components/Container";
import DeskView from "../components/DeskView";
import MobileView from "../components/MobileView";
import { PrimaryButton } from "../components/Buttons";
import { AddCourse } from "../api/services/courseService";
import Stack from "../components/Stack";
import { Typography } from "../components/Typography";
import { LoaderPopup } from "../components/Popup";
import { useDispatch } from "react-redux";
import { courseActions } from "../api/reducers/courseReducer";

const AddNewCourse = () => {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const { file } = useSelector((state) => state.courseReducer);
  const [date, setDate] = useState("");
  const [inputField, setInputField] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const [sections, setSections] = useState([]);
  const [sectionValues, setSectionValues] = useState({});

  const inputHandler = (e) => {
    const data = inputField;
    data[e.target.name] = e.target.value;
    setInputField(data);
  };
  const categories = ["Focus", "Meditation"];
  const onClickOnChip = (chip) => {
    const data = inputField;
    data.category = chip;
    setInputField(data);
  };

  const onSave = async () => {
    setSubmit(true);
    const formData = new FormData();
    formData.append("course-image", file);
    formData.append("name", inputField.name);
    formData.append("courseDescription", inputField.description);
    formData.append("category", inputField.category);
    formData.append("price", inputField.price);
    formData.append("sessions", JSON.stringify(sectionValues));
    formData.append("startDate", date);
    await AddCourse(formData);
    setSubmit(false);
    resetForm();
  };

  const resetForm = () => {
    inputField({ target: { name: "name", value: "" } });
    inputField({ target: { name: "price", value: "" } });
    inputField({ target: { name: "description", value: "" } });
    inputField({ target: { name: "category", value: "" } });
    setDate("");
    dispatch(courseActions.updateFile(null));
    setSectionValues([]);
    setSections([]);
  };

  const onChange = (section, type, value) => {
    const data = sectionValues;
    if (type.startsWith("TF"))
      data[section] = {
        ...data[section],
        ...{ sectionTitle: value },
      };
    else
      data[section] = {
        ...data[section],
        ...{ sectionDescription: value },
      };

    setSectionValues(data);
    //console.log(data);
  };

  const Section = () => (
    <>
      <Typography variant="body1">Section {sections.length + 1}</Typography>
      <TextField
        fullWidth
        title="Section Title"
        placeholder="Section Title"
        onChange={(e) =>
          onChange(`section` + (sections.length + 1), "TF", e.target.value)
        }
      />
      <FormControl fullWidth sx={{ my: "10px" }}>
        <TextareaAutosize
          onChange={(e) =>
            onChange(`section` + (sections.length + 1), "TA", e.target.value)
          }
          placeholder="Section Description"
          minRows={3}
          maxRows={5}
        />
      </FormControl>
    </>
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

  const form = () => (
    <Container mt={2}>
      <TextField
        sx={{ my: "10px" }}
        fullWidth
        name="name"
        placeholder="Enter the course title"
        onChange={inputHandler}
      />
      <TextField
        sx={{ my: "10px" }}
        fullWidth
        name="price"
        placeholder="Enter the course price"
        onChange={inputHandler}
      />
      <FormControl fullWidth sx={{ my: "10px" }}>
        <TextareaAutosize
          title="Course Description"
          placeholder="Write a short para on your course"
          name="description"
          minRows={5}
          maxRows={10}
          onChange={inputHandler}
        />
      </FormControl>
      <Grid container my="2%">
        {categories.map((item, index) => (
          <Chip
            key={index}
            label={item}
            name="tags"
            onClick={() => onClickOnChip(item, index)}
            sx={{ marginRight: "2%" }}
          />
        ))}
      </Grid>
      <FileUpload display={["block", "block", "none"]} />
      {/* <FormControl fullWidth sx={{ my: "10px" }}>
        <Box component="label" htmlFor="datePicker">
          Select Start Date
        </Box>
        <Box hidden>
          <DatePicker
            id="datePicker"
            // display="hidden"
            placeholderText="Select Start Date"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </Box>
      </FormControl> */}
      <FormControl fullWidth sx={{ my: "10px" }}>
        <DatePicker
          id="datePicker1"
          placeholderText="Select Start Date"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </FormControl>
      <Box
        sx={{ border: "1px solid var(--orange)", padding: "2%", marginY: "2%" }}
      >
        {sections.map((section, index) => (
          <Box key={index}>{section}</Box>
        ))}
        <FabButton
          title="Add Section"
          onClickFn={() => setSections([...sections, Section()])}
        />
      </Box>
      <Stack direction="row" spacing={4}>
        <PrimaryButton onClick={onSave}>Save</PrimaryButton>
      </Stack>
    </Container>
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
              {form()}
            </Grid>
          </Grid>
        </Container>
      </DeskView>
      <MobileView>{form()}</MobileView>
      <LoaderPopup open={submit} />
    </>
  );
};

export default AddNewCourse;
