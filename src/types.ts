// src/types.ts

export interface MapData {
    country: string;
    countryInfo: {
      _id: number;
      iso2: string;
      iso3: string;
      lat?: number;
      long?: number;
      flag: string;
      center:number
    };
    cases: number;
    deaths: number;
    recovered: number;
  }
  