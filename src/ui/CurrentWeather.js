import {
  DivFactory,
  TextFactory,
  ImgFactory,
  SectionFactory,
} from './elementFactories';
import MoreInfo from './MoreInfo';
import icons from '../assets/icons/icons';

const CurrentWeather = ({ parent, metric, imperial }) => {
  const currentWeatherSection = SectionFactory({
    parent,
    name: 'currentWeatherSection',
    style: 'flex flex-col gap-y-12',
  });

  // Main info for current weather
  const main = (() => {
    const mainDiv = DivFactory({
      parent: currentWeatherSection.section,
      name: 'mainDiv',
      style: 'grid grid-cols-2 place-items-center',
    });

    const icon = ImgFactory({
      parent: mainDiv.div,
      name: 'icon',
      src: icons[metric.icon],
      style: 'h-20 w-20',
    });

    const temp = TextFactory({
      parent: mainDiv.div,
      name: 'temp',
      text: metric.temp,
      type: 'p',
      style: 'text-6xl',
      imperial: imperial.temp,
    });

    const description = TextFactory({
      parent: mainDiv.div,
      name: 'description',
      text: metric.description,
      type: 'p',
      style: 'text-xl col-span-2 mt-6',
    });

    return {
      mainDiv,
      icon,
      temp,
      description,
    };
  })();

  // More info for current weather
  const moreInfo = (() => {
    const moreInfoDiv = DivFactory({
      parent: currentWeatherSection.section,
      name: 'moreInfoDiv',
      style: 'grid gap-y-2 px-6',
    });

    const feelsLike = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Feels Like',
      value: metric.feelsLike,
      imperial: imperial.feelsLike,
    });

    const chanceOfRain = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Chance of Rain',
      value: metric.pop,
    });

    const windSpeed = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Wind Speed',
      value: metric.windSpeed,
      imperial: imperial.windSpeed,
    });

    const windDirection = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Wind Direction',
      value: metric.windDeg,
    });

    const humidity = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Humidity',
      value: metric.humidity,
    });

    const uvi = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'UV Index',
      value: metric.uvi,
    });

    const cloudCover = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Cloud cover',
      value: metric.clouds,
    });

    const visibility = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Visibility',
      value: metric.visibility,
      imperial: imperial.visibility,
    });

    const sunrise = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Sunrise',
      value: metric.sunrise,
    });

    const sunset = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Sunset',
      value: metric.sunset,
    });

    return {
      moreInfoDiv,
      feelsLike,
      chanceOfRain,
      humidity,
      windSpeed,
      windDirection,
      cloudCover,
      uvi,
      visibility,
      sunrise,
      sunset,
    };
  })();

  return {
    currentWeatherSection,
    variableUnits: [
      main.temp,
      moreInfo.feelsLike.valueText,
      moreInfo.windSpeed.valueText,
      moreInfo.visibility.valueText,
    ],
  };
};

export default CurrentWeather;
