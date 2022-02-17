import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import SideBarFilter from "./SideBarFilter";
import Container from "../Container";
import Drawer from "./Drawer";
import Stack from "../Stack";
import Box from "../Box";

const SearchFilter = ({ onSearch, onFilter }) => {
  return (
    <Stack direction="row">
      <Box display={["block", "block", "none"]} mt="4rem">
        <Drawer>
          <SideBarFilter onFilter={onFilter} />
        </Drawer>
      </Box>
      <Container mt="3rem">
        <TextField
          fullWidth
          onKeyPress={(event) => onSearch(event.target.value)}
          label="Search for Courses"
        />
      </Container>
    </Stack>
  );
};

SearchFilter.propTypes = {
  onSearch: PropTypes.func,
  onFilter: PropTypes.func,
};

export default SearchFilter;
