import {
  SectionFactory,
  TextFactory,
  DivFactory,
  ImgFactory,
  SvgFactory,
} from './elementFactories';
import MoreInfo from './MoreInfo';
import icons from '../assets/icons/icons';
import moon from '../assets/svgs/moon-light.svg';
import sun from '../assets/svgs/sun-light.svg';

const DailyFullInfo = ({
  parent,
  name,
  summary,
  nextElem,
  metric,
  imperial,
}) => {
  const fullInfoSection = SectionFactory({
    parent,
    name,
    style: 'min-w-full border-t border-b rounded p-3 cursor-pointer',
  });

  const dayText = TextFactory({
    parent: fullInfoSection.section,
    name: metric.dt.toLowerCase(),
    text: metric.dt,
    type: 'h3',
    style: 'text-lg place-self-start',
  });

  const collapseSvg = SvgFactory({
    parent: fullInfoSection.section,
    name: 'collapseSvg',
    pathValue: 'M262-367q-9-9-9.5-21t8.5-21l198-198q5-5 10-7t11-2q6 0 11 2t10 7l198 197q9 8 9 20.5t-9 21.5q-9 9-21.5 9t-21.5-9L480-543 304-366q-8 9-20.5 8.5T262-367Z',
    width: '48',
    height: '48',
    style: 'w-6 h-6 place-self-center',
  });

  const main = (() => {
    const mainDiv = DivFactory({
      parent: fullInfoSection.section,
      name: 'mainDiv',
      style: 'flex flex-col place-items-center col-span-2',
    });

    const icon = ImgFactory({
      parent: mainDiv.div,
      name: 'icon',
      src: icons[metric.icon],
      style: 'h-16 w-16',
    });

    const description = TextFactory({
      parent: mainDiv.div,
      name: 'description',
      text: metric.description,
      type: 'p',
      style: 'text-xl',
    });

    const summaryText = TextFactory({
      parent: mainDiv.div,
      name: 'summaryText',
      text: `${metric.summary}.`,
      type: 'p',
      style: 'text-zinc-300 text-sm mt-2',
    });

    const temperature = DivFactory({
      parent: mainDiv.div,
      name: 'temperature',
      style: 'grid grid-cols-2 mt-6 place-items-center min-w-full',
    });

    const dayTempDiv = DivFactory({
      parent: temperature.div,
      name: 'dayTempDiv',
      style: 'flex flex-col gap-x-2',
    });

    const mainDayTemp = DivFactory({
      parent: dayTempDiv.div,
      name: 'mainDayTemp',
      style: 'flex gap-x-2 place-items-center',
    });

    const sunSvg = ImgFactory({
      parent: mainDayTemp.div,
      name: 'sun',
      src: sun,
      style: 'w-6 h-6',
    });

    const dayTemp = TextFactory({
      parent: mainDayTemp.div,
      name: 'dayTemp',
      text: metric.tempDay,
      type: 'p',
      style: 'text-2xl',
      imperial: imperial.tempDay,
    });

    const nightTempDiv = DivFactory({
      parent: temperature.div,
      name: 'nightTemp',
      style: 'flex flex-col gap-x-2',
    });

    const mainNightTemp = DivFactory({
      parent: nightTempDiv.div,
      name: 'mainNightTemp',
      style: 'flex gap-x-2 place-items-center',
    });

    const moonSvg = ImgFactory({
      parent: mainNightTemp.div,
      name: 'moonSvg',
      src: moon,
      style: 'w-6 h-6',
    });

    const nightTemp = TextFactory({
      parent: mainNightTemp.div,
      name: 'nightTemp',
      text: metric.tempNight,
      type: 'p',
      style: 'text-2xl',
      imperial: imperial.tempNight,
    });

    const feelsLikeDay = TextFactory({
      parent: dayTempDiv.div,
      name: 'feelsLikeDay',
      text: `Feels Like ${metric.feelsLikeDay}`,
      type: 'p',
      style: 'text-sm text-zinc-400',
      imperial: `Feels Like ${imperial.feelsLikeDay}`,
    });

    const feelsLikeNight = TextFactory({
      parent: nightTempDiv.div,
      name: 'feelsLikeNight',
      text: `Feels Like ${metric.feelsLikeNight}`,
      type: 'p',
      style: 'text-sm text-zinc-400',
      imperial: `Feels Like ${imperial.feelsLikeNight}`,
    });

    const extra = DivFactory({
      parent: mainDiv.div,
      name: 'extra',
      style: 'grid gap-y-2 mt-12 mb-6 min-w-full px-6',
    });

    const chanceOfRain = MoreInfo({
      parent: extra.div,
      property: 'Chance of Rain',
      value: metric.pop,
    });

    const windSpeed = MoreInfo({
      parent: extra.div,
      property: 'Wind Speed',
      value: metric.windSpeed,
      imperial: imperial.windSpeed,
    });

    const windDirection = MoreInfo({
      parent: extra.div,
      property: 'Wind Direction',
      value: metric.windDeg,
    });

    const humidity = MoreInfo({
      parent: extra.div,
      property: 'Humidity',
      value: metric.humidity,
    });

    const uvi = MoreInfo({
      parent: extra.div,
      property: 'UV Index',
      value: metric.uvi,
    });

    const cloudCover = MoreInfo({
      parent: extra.div,
      property: 'Cloud Cover',
      value: metric.clouds,
    });

    const sunrise = MoreInfo({
      parent: extra.div,
      property: 'Sunrise',
      value: metric.sunrise,
    });

    const sunset = MoreInfo({
      parent: extra.div,
      property: 'Sunset',
      value: metric.sunset,
    });

    return {
      dayText,
      collapseSvg,
      mainDiv: {
        icon,
        description,
        summaryText,
        temperature: {
          dayTempDiv,
          mainDayTemp,
          sunSvg,
          dayTemp,
          feelsLikeDay,
          nightTempDiv,
          mainNightTemp,
          moonSvg,
          nightTemp,
          feelsLikeNight,
        },
        extra: {
          chanceOfRain,
          windSpeed,
          windDirection,
          humidity,
          uvi,
          cloudCover,
          sunrise,
          sunset,
        },
      },
    };
  })();

  const removeFromDom = () => parent.removeChild(fullInfoSection.section);
  const render = () => {
    parent.insertBefore(fullInfoSection.section, nextElem);
    fullInfoSection.section.setAttribute('data-expanded', false);
    // setTimeout is just to make this line async and trigger the animation
    setTimeout(() => {
      fullInfoSection.section.removeAttribute('data-expanded', false);
      fullInfoSection.section.setAttribute('data-expanded', true);
    }, 0);
  };

  removeFromDom();

  return {
    fullInfoSection,
    main,
    summary,
    removeFromDom,
    render,
  };
};

export default DailyFullInfo;
