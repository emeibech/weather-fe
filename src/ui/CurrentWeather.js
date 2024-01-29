import {
  DivFactory,
  TextFactory,
  ImgFactory,
  SectionFactory,
} from './elementFactories';
import MoreInfo from './MoreInfo';
import icons from '../assets/icons/icons';

const CurrentWeather = ({
  parent,
  metric,
  imperial,
  isFahrenheit,
  placeholder = false,
}) => {
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
      style: 'grid grid-cols-2 place-items-center px-8',
    });

    const icon = (() => {
      if (placeholder) {
        return DivFactory({
          parent: mainDiv.div,
          name: 'placeholderImg',
          style: 'h-20 w-20 animate-pulse',
        });
      }

      return ImgFactory({
        parent: mainDiv.div,
        name: 'icon',
        src: icons[metric.icon],
        alt: 'Weather icon',
        style: 'h-20 w-20',
      });
    })();

    const temp = (() => {
      if (placeholder) {
        return TextFactory({
          parent: mainDiv.div,
          name: 'placeholderText',
          text: '##°C',
          type: 'p',
          style: 'text-5xl animate-pulse',
        });
      }

      return TextFactory({
        parent: mainDiv.div,
        name: 'temp',
        text: metric.temp,
        type: 'p',
        style: 'text-5xl',
        imperial: imperial.temp,
        isFahrenheit,
      });
    })();

    const description = (() => {
      if (placeholder) {
        return TextFactory({
          parent: mainDiv.div,
          name: 'placeholderText',
          text: 'Placeholder description',
          type: 'p',
          style: 'text-xl text-center col-span-2 mt-4 animate-pulse',
        });
      }

      return TextFactory({
        parent: mainDiv.div,
        name: 'description',
        text: metric.description,
        type: 'p',
        style: 'text-xl col-span-2 mt-4',
      });
    })();

    return {
      icon,
      temp,
      description,
    };
  })();

  // More info for current weather
  const moreInfoDiv = DivFactory({
    parent: currentWeatherSection.section,
    name: 'moreInfoDiv',
    style: 'grid gap-y-2 px-6',
  });

  const feelsLike = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Feels Like',
    value: (placeholder) ? '##°C' : metric.feelsLike,
    imperial: (placeholder) ? null : imperial.feelsLike,
    placeholder,
    isFahrenheit,
  });

  const chanceOfRain = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Chance of Rain',
    value: (placeholder) ? '##%' : metric.pop,
    placeholder,
  });

  const windSpeed = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Wind Speed',
    value: (placeholder) ? '##kmh' : metric.windSpeed,
    imperial: (placeholder) ? null : imperial.windSpeed,
    placeholder,
    isFahrenheit,
  });

  const windDirection = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Wind Direction',
    value: (placeholder) ? 'PH' : metric.windDeg,
    placeholder,
  });

  const humidity = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Humidity',
    value: (placeholder) ? '##%' : metric.humidity,
    placeholder,
  });

  const uvi = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'UV Index',
    value: (placeholder) ? '# Placeholder' : metric.uvi,
    placeholder,
  });

  const cloudCover = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Cloud cover',
    value: (placeholder) ? '##%' : metric.clouds,
    placeholder,
  });

  const visibility = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Visibility',
    value: (placeholder) ? '##km' : metric.visibility,
    imperial: (placeholder) ? null : imperial.visibility,
    placeholder,
    isFahrenheit,
  });

  const sunrise = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Sunrise',
    value: (placeholder) ? '##:##' : metric.sunrise,
    placeholder,
  });

  const sunset = MoreInfo({
    parent: moreInfoDiv.div,
    property: 'Sunset',
    value: (placeholder) ? '##:##' : metric.sunset,
    placeholder,
  });

  const removeFromDom = () => parent.removeChild(currentWeatherSection.section);

  return {
    currentWeatherSection,
    removeFromDom,
    variableUnits: [
      main.temp,
      feelsLike.valueText,
      windSpeed.valueText,
      visibility.valueText,
    ],
    misc: {
      chanceOfRain,
      windDirection,
      humidity,
      uvi,
      cloudCover,
      sunrise,
      sunset,
    },
  };
};

export default CurrentWeather;
