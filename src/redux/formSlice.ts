import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface User {
  id?: any;
  firstName: string;
  lastName: string;
  status:string
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const formSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const { id, firstName,lastName,status
      } = action.payload;
      const user = state.users.find(user=> user.id == id)
      if (user) {
      
        user.firstName = firstName;
        user.lastName = lastName;
        user.status = status
      }
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.holders.users;

export const { addUser, updateUser, deleteUser } = formSlice.actions;
export default formSlice.reducer;
