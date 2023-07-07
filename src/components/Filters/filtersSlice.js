import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    radioFilterChange: (state, action) => {
      state.status = action.payload;
    },
    filterPrioriesChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
export default filtersSlice;
