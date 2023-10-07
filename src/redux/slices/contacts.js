import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getContacts } from 'api/api';

const initialState = {
  contacts: [
    {
      name: 'John',
      number: '123123',
    },
  ],
  filter: '',
};

export const getContactsData = createAsyncThunk(
  'contacts/getList',
  async token => {
    const response = await getContacts(token);
    return response;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(getContactsData.fulfilled, (state, action) => {});
  },
});

export default contactsSlice.reducer;
