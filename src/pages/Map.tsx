import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapContainerProps } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { fetchCovidData } from '../redux/mapSlice';
import { LatLng} from 'leaflet';
import L from 'leaflet'

function Map() {
  const dispatch = useAppDispatch();
  const covidData = useSelector((state: RootState) => state.maps.data);
//   const loading = useSelector((state: RootState) => state.covid.loading);

  // console.log(covidData,'78');


  const  center: [number, number] = [1,1]

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (

    <MapContainer center={center} zoom={1}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {covidData.map((country) => (
        <Marker key={country.countryInfo.iso3} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <h3>{country.country}</h3>
            <p>Cases: {country.cases}</p>
            <p>Deaths: {country.deaths}</p>
            <p>continent: {country.continent}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
