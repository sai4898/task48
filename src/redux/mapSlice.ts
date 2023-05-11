import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCovidData = createAsyncThunk('covid/fetchData', async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
const data = await response.json()
// console.log(data,'00');
return data

  
});

interface CovidState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CovidState = {
  data: [],
  loading: false,
  error: null,
};

 const mapSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCovidData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCovidData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});


export default mapSlice.reducer