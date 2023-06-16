import {
  DivFactory,
  TextFactory,
  ImgFactory,
  SectionFactory,
} from './elementFactories';
import MoreInfo from './MoreInfo';
import icons from '../assets/icons/icons';

const CurrentWeather = ({ parent, data }) => {
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
      src: icons[data.icon],
      style: 'h-20 w-20',
    });

    const temp = TextFactory({
      parent: mainDiv.div,
      name: 'temp',
      text: data.temp,
      type: 'p',
      style: 'text-6xl',
    });

    const description = TextFactory({
      parent: mainDiv.div,
      name: 'description',
      text: data.description,
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
      style: 'grid gap-y-2 px-2',
    });

    const feelsLike = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Feels Like',
      value: data.feelsLike,
    });

    const chanceOfRain = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Chance of Rain',
      value: data.pop,
    });

    const windSpeed = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Wind Speed',
      value: data.windSpeed,
    });

    const windDirection = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Wind Direction',
      value: data.windDeg,
    });

    const humidity = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Humidity',
      value: data.humidity,
    });

    const uvi = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'UV Index',
      value: data.uvi,
    });

    const cloudCover = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Cloud cover',
      value: data.clouds,
    });

    const visibility = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Visibility',
      value: data.visibility,
    });

    const sunrise = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Sunrise',
      value: data.sunrise,
    });

    const sunset = MoreInfo({
      parent: moreInfoDiv.div,
      property: 'Sunset',
      value: data.sunset,
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
    main,
    moreInfo,
  };
};

export default CurrentWeather;
