import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "../../api/ContactServices";

export const addContact = createAsyncThunk(
  "contacts/addcontact",
  async (data) => {
    await contactService.create(data);
    return data;
  }
);

const initialState = {
  contacts: {},
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [addContact.fulfilled]: (state, { payload }) => {
      console.log("Add Success");
      return { ...state, contacts: payload };
    },
  },
});

export const getAllcontacts = (state) => state.contacts.contacts;
export default contactSlice.reducer;
