import './style.css';
import fetchClientCity from './data/fetchClientCity';
import fetchWeatherOC from './data/fetchWeatherOC';
import filterData from './data/filterData';
import processData from './data/processData';
import header from './ui/header';
import CurrentWeather from './ui/CurrentWeather';

document.addEventListener('DOMContentLoaded', () => {
  header();
  const current = CurrentWeather();
});
