import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from './API';

const initialState = {
  value: {
    firt: "",
    last: "",
    age: 0,
    tokenUsed: ""
  },
  status: 'idle',
};

export const getUserProfileAsync = createAsyncThunk(
  'profile/getUserProfileAsync', async (_, { getState }) => {
    const response = await getUserProfile(getState().user.value);
    return response.data;
  }
);


// export const getUserProfileAsync = createAsyncThunk(
//   'profile/getUserProfile',
//   async (user) => {
//     const response = await getUserProfile(user);
//     return response.data;
//   }
// );


export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfileAsync.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export const userProfile = (state) => state.profile.value;

export default profileSlice.reducer;
