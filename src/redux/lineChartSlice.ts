
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CaseData {
  date: string;
  cases: number;
}

interface CovidDataState {
  
  data: any[];
  loading: boolean;
  error: string | null;
    updated:number,
    cases:number,
    todayCases:number,
    deaths:number,
    todayDeaths:number,
    recovered:number,
    todayRecovered:number,
    active:number,
    critical:number,
    casesPerOneMillion:number,
    deathsPerOneMillion:number,
    tests:number,
    testsPerOneMillion:number,
    population:number,
    oneCasePerPeople:number,
    oneDeathPerPeople:number,
    oneTestPerPeople:number,
    activePerOneMillion:number,
    recoveredPerOneMillion:number,
    criticalPerOneMillion:number,
    affectedCountries:number
  }

const initialState: CovidDataState = {

  updated: 1683797898170, 
  cases: 688091303, todayCases: 20575, deaths: 6873000, todayDeaths: 12, recovered: 660502581, todayRecovered: 23697, active: 20715722, critical: 39079, casesPerOneMillion: 88276, deathsPerOneMillion: 881.7, tests: 6986067836, testsPerOneMillion: 879310.87, population: 7944935131, oneCasePerPeople: 0, oneDeathPerPeople: 0, oneTestPerPeople: 0, activePerOneMillion: 2607.41, recoveredPerOneMillion: 83135.05, criticalPerOneMillion: 4.92, affectedCountries: 231,
 
  data: [],
  loading: false,
  error: null,
};

export const fetchChartData = createAsyncThunk(
  'cases/fetchChartData',
  async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await response.json();
    console.log(data, '44')
    return data;
  },

);

const covidDataSlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    //   setCovidData(state, action: PayloadAction<CovidDataState>) {
    //       return action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChartData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

// export const { setCovidData } = covidDataSlice.actions;
export default covidDataSlice.reducer;
