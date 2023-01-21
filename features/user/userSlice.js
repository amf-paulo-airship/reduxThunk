import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateUser } from './API';

const initialState = {
  value: {
    email: "",
    accessToken: "",
    refreshToken: false,
    gwxBrandIds: 0
  },
  status: 'idle',
};

export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (user) => {
    const response = await updateUser(user);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const userData = (state) => state.user.value;

export default userSlice.reducer;
