import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import SideBarFilter from "./SideBarFilter";
import Container from "../Container";
import Drawer from "./Drawer";
import Stack from "../Stack";
import Box from "../Box";
import {
  CENTER,
  EMPTY_STRING,
  FLEX,
  MOBILE_RESPONSIVE,
  ROW,
} from "../../utils/Constants";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [search, setSearch] = useState(EMPTY_STRING);
  const onChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearch(EMPTY_STRING);
    onSearch(EMPTY_STRING);
  };

  return (
    <Stack direction={ROW}>
      <Box display={MOBILE_RESPONSIVE} mt="2rem">
        <Drawer>
          <SideBarFilter onFilter={onFilter} />
        </Drawer>
      </Box>
      <Container mt="1rem" sx={{ display: FLEX, justifyContent: CENTER }}>
        <TextField
          fullWidth
          onChange={onChange}
          label="Search for Courses"
          sx={{ width: "70%" }}
          value={search}
          InputProps={{
            endAdornment: (
              <IconButton>
                {!search ? (
                  <SearchOutlinedIcon />
                ) : (
                  <CloseOutlinedIcon onClick={clearSearch} />
                )}
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
