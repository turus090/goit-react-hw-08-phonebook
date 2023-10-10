import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts } from 'api/api';

const initialState = {
  list: [
    {
      name: 'John',
      number: '123123',
    },
  ],
  filter: '',
};

export const getContactsData = createAsyncThunk(
  'contacts/getList',
  async () => {
    const res = await getContacts();
    return res;
  }
);

export const createContactData = createAsyncThunk(
  'contact/create',
  async candidate => {
    await createContact(candidate);
    return candidate;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addCase(getContactsData.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
    builder.addCase(createContactData.fulfilled, (state, action) => {
      state.list = [...state.list, { ...action.payload }];
    });
  },
});

export default contactsSlice.reducer;
