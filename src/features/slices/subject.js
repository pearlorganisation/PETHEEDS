import { createSlice } from '@reduxjs/toolkit';

import {
  getAllSubjects,
 
} from '../actions/subject';


const initialState = {
  isLoading: false,
  errorMessage: '',
  subjectData: [],
};

const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // signUp lifecycle methods
      .addCase(getAllSubjects.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = '';
      })
      .addCase(getAllSubjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        
        state.subjectData = action.payload.data;
      
      
      })
      .addCase(getAllSubjects.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        
      });
     
  },
});

export default subjectSlice.reducer;
export const {} = subjectSlice.actions;
