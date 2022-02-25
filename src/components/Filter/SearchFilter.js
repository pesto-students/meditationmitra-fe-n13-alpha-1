import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import SideBarFilter from "./SideBarFilter";
import Container from "../Container";
import Drawer from "./Drawer";
import Stack from "../Stack";
import Box from "../Box";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchFilter = ({ onSearch, onFilter }) => {
  return (
    <Stack direction="row">
      <Box display={["block", "block", "none"]} mt="2rem">
        <Drawer>
          <SideBarFilter onFilter={onFilter} />
        </Drawer>
      </Box>
      <Container mt="1rem" sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          fullWidth
          onKeyPress={(event) => onSearch(event.target.value)}
          label="Search for Courses"
          sx={{ width: "70%" }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlinedIcon />
              </IconButton>
            ),
          }}
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
