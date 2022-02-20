import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formReducer",
  initialState: {
    name: "",
    price: "",
    description: "",
    startDate: "",
    tags: [],
    file: null,
    isSubmit: false,
  },
  reducers: {
    updateField: (state, action) => {
      const { payload } = action;
      const { type, value } = payload;
      if (type === "name") state.name = value;
      else if (type === "price") state.price = value;
      else if (type === "description") state.description = value;
      else if (type === "startDate") state.startDate = value;
      else if (type === "tags") state.tags = [...state.tags, value];
      else if (type === "file") state.file = value;
    },
    onSubmit: (state) => (state.isSubmit = !state.isSubmit),
  },
});
console.log(formSlice);

export const { actions: formActions, reducer: formReducer } = formSlice;
