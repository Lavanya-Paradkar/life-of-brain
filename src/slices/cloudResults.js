import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const cloudResult = createSlice({
  name: "mental_health_status_value",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = [...state.value, action.payload]
    }
  },
});

export const { setValue } = cloudResult.actions;

export default cloudResult.reducer;
