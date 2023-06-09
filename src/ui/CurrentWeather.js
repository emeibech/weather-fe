import {
  DivFactory,
  TextFactory,
  ImgFactory,
  MoreInfoFactory,
} from './elementFactories';
import icons from '../assets/icons/icons';

const CurrentWeather = ({ isLoading, parent }) => {
  // Parent container for current weather
  const currentWeatherDiv = DivFactory({
    isLoading,
    parent,
    name: 'currentWeatherDiv',
    style: 'flex flex-col gap-y-16',
  });

  // Main info for current weather
  const main = (() => {
    const mainDiv = DivFactory({
      isLoading,
      parent: currentWeatherDiv.div,
      name: 'mainDiv',
      style: 'grid grid-cols-2 place-items-center',
    });

    const icon = ImgFactory({
      isLoading,
      parent: mainDiv.div,
      name: 'icon',
      src: icons['02n'],
      style: 'h-20 w-20',
    });

    const temp = TextFactory({
      isLoading,
      parent: mainDiv.div,
      name: 'temp',
      text: '23°C',
      type: 'p',
      style: 'text-6xl',
    });

    const description = TextFactory({
      isLoading,
      parent: mainDiv.div,
      name: 'description',
      text: 'Few Clouds',
      type: 'p',
      style: 'text-xl col-span-2 mt-8',
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
      parent: currentWeatherDiv.div,
      name: 'moreInfoDiv',
      style: 'grid gap-y-2',
    });

    const feelsLike = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Feels Like',
      value: '26°C',
    });

    const chanceOfRain = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Chance of Rain',
      value: '74%',
    });

    const windSpeed = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Wind Speed',
      value: '8 km/h',
    });

    const windDirection = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Wind Direction',
      value: 'WNW',
    });

    const humidity = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Humidity',
      value: '89%',
    });

    const uvi = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'UV Index',
      value: '4 Moderate',
    });

    const cloudCover = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Cloud cover',
      value: '40%',
    });

    const visibility = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Visibility',
      value: '10 km',
    });

    const sunrise = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Sunrise',
      value: '05:26 AM',
    });

    const sunset = MoreInfoFactory({
      isLoading,
      parent: moreInfoDiv.div,
      property: 'Sunset',
      value: '06:21 PM',
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
