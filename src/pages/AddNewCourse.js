import { FormControl, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { Chip } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";
import DateAdapter from "@mui/lab/AdapterMoment";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
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
import {
  AUTO,
  BODY1,
  categories,
  EMPTY_STRING,
  GRAY,
  MOBILE_RESPONSIVE,
  ORANGE,
  ROW,
  SECTION,
  SMALL,
  SPAN,
  VH10,
  WHITE,
  WHITE_GRAY,
} from "../utils/Constants";

const AddNewCourse = () => {
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const { file, imageURL } = useSelector((state) => state.courseReducer);
  const [date, setDate] = useState(new Date());
  const [inputField, setInputField] = useState({
    name: EMPTY_STRING,
    price: EMPTY_STRING,
    description: EMPTY_STRING,
    category: EMPTY_STRING,
  });
  const [sections, setSections] = useState([]);
  const [sectionValues, setSectionValues] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onClickOnChip = (chip) => {
    setInputField((prevState) => ({
      ...prevState,
      category: chip,
    }));
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
    setInputField({
      name: EMPTY_STRING,
      price: EMPTY_STRING,
      description: EMPTY_STRING,
      category: EMPTY_STRING,
    });
    setDate(new Date());
    dispatch(courseActions.updateFile(null));
    setSectionValues([]);
    setSections([]);
    dispatch(courseActions.updateFile({ file: null, imageURL: EMPTY_STRING }));
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
  };

  const Section = () => (
    <>
      <Typography variant={BODY1}>Section {sections.length + 1}</Typography>
      <TextField
        fullWidth
        title="Section Title"
        placeholder="Section Title"
        onChange={(e) =>
          onChange(SECTION + (sections.length + 1), "TF", e.target.value)
        }
      />
      <FormControl fullWidth sx={{ my: "10px" }}>
        <TextareaAutosize
          onChange={(e) =>
            onChange(SECTION + (sections.length + 1), "TA", e.target.value)
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
        margin: AUTO,
        marginTop: "100px",
        paddingY: "8%",
        width: "40%",
        height: VH10,
        background: GRAY,
        border: "1px dashed var(--black)",
      }}
    >
      <Box
        sx={{
          margin: AUTO,
          marginTop: "30px",
          width: "15%",
          color: WHITE_GRAY,
        }}
      >
        <AddCircleOutlineOutlinedIcon />
      </Box>
    </Box>
  );

  const FabButton = ({ title, onClickFn }) => (
    <Stack direction={ROW} spacing={4}>
      <Typography component={SPAN} sx={{ lineHeight: "2.5em" }}>
        {title}
      </Typography>
      <Fab
        onClick={onClickFn}
        size={SMALL}
        aria-label="add"
        sx={{
          marginLeft: "15px",
          background: ORANGE,
          color: WHITE,
          "&:hover": {
            background: ORANGE,
            color: WHITE,
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
        value={inputField.name}
      />
      <TextField
        sx={{ my: "10px" }}
        fullWidth
        name="price"
        placeholder="Enter the course price"
        onChange={inputHandler}
        value={inputField.price}
      />
      <FormControl fullWidth sx={{ my: "10px" }}>
        <TextareaAutosize
          title="Course Description"
          placeholder="Write a short para on your course"
          name="description"
          minRows={5}
          maxRows={10}
          onChange={inputHandler}
          value={inputField.description}
        />
      </FormControl>
      <Grid container my="2%">
        {categories.map((item, index) => (
          <Chip
            key={index}
            label={item}
            name="tags"
            onClick={() => onClickOnChip(item, index)}
            sx={{
              marginRight: "2%",
              background: inputField.category === item && ORANGE,
              color: inputField.category === item && WHITE,
            }}
          />
        ))}
      </Grid>
      <FileUpload display={MOBILE_RESPONSIVE} />
      <FormControl fullWidth sx={{ my: "10px" }}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <MobileDatePicker
            label="Select Start Date"
            value={date}
            onChange={(date) => setDate(date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
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
      <Stack direction={ROW} spacing={4}>
        <PrimaryButton onClick={onSave}>Save</PrimaryButton>
        <PrimaryButton onClick={resetForm}>Reset</PrimaryButton>
      </Stack>
    </Container>
  );

  return (
    <>
      <DeskView>
        <Container st>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FileUpload
                id="fileId"
                icon={<DeskTopViewFileUplod />}
                image={imageURL}
              />
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
