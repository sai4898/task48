
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CaseData {
  date: string;
  cases: number;
}

interface CasesState {
  data: CaseData[];
  loading: boolean;
  error: string | null;
}

const initialState: CasesState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCasesData = createAsyncThunk(
  'cases/fetchCasesData',
  async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    const data = await response.json();
    // console.log(data);
    return data;
  }

  );

const casesSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCasesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCasesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCasesData.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export default casesSlice.reducer;
