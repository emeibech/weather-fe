import {
  DivFactory,
  TextFactory,
  ImgFactory,
  SectionFactory,
} from './elementFactories';
import MoreInfo from './MoreInfo';
import icons from '../assets/icons/icons';

const CurrentWeather = ({ isLoading, parent, data }) => {
  const currentWeatherSection = SectionFactory({
    parent,
    isLoading,
    name: 'currentWeatherSection',
    style: 'flex flex-col gap-y-12',
  });

  // Main info for current weather
  const main = (() => {
    const mainDiv = DivFactory({
      isLoading,
      parent: currentWeatherSection.section,
      name: 'mainDiv',
      style: 'grid grid-cols-2 place-items-center',
    });

    const icon = ImgFactory({
      isLoading,
      parent: mainDiv.div,
      name: 'icon',
      src: icons[data.icon],
      style: 'h-20 w-20',
    });

    const temp = TextFactory({
      isLoading,
      parent: mainDiv.div,
      name: 'temp',
      text: data.temp,
      type: 'p',
      style: 'text-6xl',
    });

    const description = TextFactory({
      isLoading,
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
      isLoading,
      parent: currentWeatherSection.section,
      name: 'moreInfoDiv',
      style: 'grid gap-y-2',
    });

    const feelsLike = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Feels Like',
      value: data.feelsLike,
    });

    const chanceOfRain = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Chance of Rain',
      value: data.pop,
    });

    const windSpeed = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Wind Speed',
      value: data.windSpeed,
    });

    const windDirection = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Wind Direction',
      value: data.windDeg,
    });

    const humidity = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Humidity',
      value: data.humidity,
    });

    const uvi = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'UV Index',
      value: data.uvi,
    });

    const cloudCover = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Cloud cover',
      value: data.clouds,
    });

    const visibility = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Visibility',
      value: data.visibility,
    });

    const sunrise = MoreInfo({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Sunrise',
      value: data.sunrise,
    });

    const sunset = MoreInfo({
      isLoading,
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
