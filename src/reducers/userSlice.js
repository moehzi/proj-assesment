import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'Faizi',
    eKTP: '12309542342',
    address: 'Jl. Permata Ringgi',
    dateOfBirth: '19 Maret 2000',
    phoneNumbers: [{ phoneNumber: '0812345678' }],
    job: 'Student',
    family: [
      {
        name: 'Bambang Pamungkas',
        dateOfBirth: '20 Maret 2000',
        relationshipStatus: 'parent',
      },
      {
        name: 'Angelina Jolie',
        dateOfBirth: '21 Maret 2000',
        relationshipStatus: 'parent',
      },
    ],
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: initialState,
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
      console.log(state, action);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
