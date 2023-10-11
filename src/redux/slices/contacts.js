import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts, deleteContact } from 'api/api';

const initialState = {
  list: [],
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
export const deleteContactData = createAsyncThunk(
  'contact/delete',
  async idCandidate => {
    await deleteContact(idCandidate);
    return idCandidate;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getContactsData.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
    builder.addCase(createContactData.fulfilled, (state, action) => {
      state.list = [...state.list, { ...action.payload }];
    });
    builder.addCase(deleteContactData.fulfilled, (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    });
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
