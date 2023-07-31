import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  errors: false,
  data: {}
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    getDetails: (state) => {
      state.loading = true;
    },
    getDetailsSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.errors = false;
    },
    getDetailsError: (state) => {
      state.loading = false;
      state.errors = true;
    }
  }
});

export const {
    getDetails,
    getDetailsSuccess,
    getDetailsError
} = detailsSlice.actions;

export default detailsSlice.reducer;