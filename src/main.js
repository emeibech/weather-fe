import './style.css';
// import fetchClientCity from './data/fetchClientCity';
// import fetchWeatherOC from './data/fetchWeatherOC';
// import filterData from './data/filterData';
// import processData from './data/processData';
import header from './ui/header';
import Location from './ui/Location';
import CurrentWeather from './ui/CurrentWeather';
import DailyForecast from './ui/DailyForecast';

// const initialLoad = async () => {
//   const ipInfo = await fetchClientCity();
//   const onecallData = await fetchWeatherOC({
//     lat: ipInfo.lat,
//     lon: ipInfo.lon,
//   });

//   const filteredOC = filterData(onecallData);
//   const processedData = processData(filteredOC);
//   return processedData;
// };

document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelector('#app');
  const isLoading = false;

  header();
  const location = Location({ parent, isLoading });
  const current = CurrentWeather({ isLoading, parent });
  const daily = DailyForecast({ isLoading, parent });

  console.log({ location, current, daily });
});
