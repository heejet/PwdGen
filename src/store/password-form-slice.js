import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOutputModalVisible: false };
const passwordFormSlice = createSlice({
  name: "passwordForm",
  initialState,
  reducers: {
    openOutputModal(state) {
      state.isOutputModalVisible = true;
    },
    closeOutputModal(state) {
      state.isOutputModalVisible = false;
    },
  },
});
export const passwordFormActions = passwordFormSlice.actions;
export default passwordFormSlice;
