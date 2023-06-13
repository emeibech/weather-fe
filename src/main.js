import './style.css';
// import fetchClientCity from './data/fetchClientCity';
// import fetchWeatherOC from './data/fetchWeatherOC';
// import filterData from './data/filterData';
// import processData from './data/processData';
import header from './ui/header';
import Location from './ui/Location';
import CurrentWeather from './ui/CurrentWeather';
import DailyForecast from './ui/DailyForecast';
import handleClickDaily from './events/handleClickDaily';

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
  const app = document.querySelector('#app');
  const isLoading = false;

  header();
  const location = Location({ isLoading, app });
  const current = CurrentWeather({
    isLoading,
    parent: location.main.parent,
  });

  const daily = DailyForecast({
    isLoading,
    parent: location.main.parent,
  });

  handleClickDaily(daily);

  // console.log({ location, current, daily });
});
