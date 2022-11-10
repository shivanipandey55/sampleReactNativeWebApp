import { ActionType } from './ActionType';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// type signupType = {
//   email: string;
//   password: string;
//   role: string;
//   firstName: string;
//   lastName: string;
// };
const handleSignupThunk = createAsyncThunk(
  ActionType.SIGNUP_POST_REQUEST,
  async (variable: any, thunkAPI) => {
    try {
      console.log(variable);
      const resp = await axios.post(
        'http://demo7128753.mockable.io/singUp',
        variable
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export default handleSignupThunk;
