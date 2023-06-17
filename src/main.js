import './style.css';
// import fetchClientCity from './data/fetchClientCity';
// import fetchWeatherOC from './data/fetchWeatherOC';
import filterData from './data/filterData';
import processData from './data/processData';
import header from './ui/header';
import Location from './ui/Location';
import CurrentWeather from './ui/CurrentWeather';
import DailyForecast from './ui/DailyForecast';
import handleClickDaily from './events/handleClickDaily';
import testData from './data/testData';

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

  // Process test data
  const data = processData(filterData(testData));
  // console.table(data.metric.daily[0]);

  // Render header
  header();

  // Render main element
  const main = (() => {
    const mainElement = document.createElement('main');
    mainElement.setAttribute('data-name', 'main');

    app.appendChild(mainElement);

    const removeElement = () => mainElement.removeChild(mainElement);

    return {
      mainElement,
      removeElement,
    };
  })();

  // Instantiate and render location
  const location = Location({
    parent: main.mainElement,
    city: 'Tokyo',
    country: 'Japan',
  });
  // Instantiate and render current weather
  const current = CurrentWeather({
    parent: main.mainElement,
    data: data.metric.current,
  });
  // Instantiate and render daily forecast
  const daily = DailyForecast({
    parent: main.mainElement,
    data: data.metric.daily,
  });

  // handle click events on daily forecast
  handleClickDaily({
    dailyArr: daily.dailyArr,
    data: data.metric.daily,
  });

  if (isLoading) console.log(current, location);
});
