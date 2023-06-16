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
  data,
}) => {
  const fullInfoSection = SectionFactory({
    parent,
    name,
    style: 'min-w-full border-t border-b rounded p-3 cursor-pointer',
  });

  const dayText = TextFactory({
    parent: fullInfoSection.section,
    name: data.dt.toLowerCase(),
    text: data.dt,
    type: 'h3',
    style: 'text-lg place-self-start',
  });

  const collapseSvg = SvgFactory({
    parent: fullInfoSection.section,
    name: 'collapseSvg',
    pathValue: 'M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z',
    width: '48',
    height: '48',
    style: 'w-6 h-6 place-self-center rotate-180',
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
      src: icons[data.icon],
      style: 'h-16 w-16',
    });

    const description = TextFactory({
      parent: mainDiv.div,
      name: 'description',
      text: data.description,
      type: 'p',
      style: 'text-xl',
    });

    const summaryText = TextFactory({
      parent: mainDiv.div,
      name: 'summaryText',
      text: data.summary,
      type: 'p',
      style: 'text-sm mt-2',
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
      text: data.tempDay,
      type: 'p',
      style: 'text-2xl',
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
      text: data.tempNight,
      type: 'p',
      style: 'text-2xl',
    });

    const feelsLikeDay = TextFactory({
      parent: dayTempDiv.div,
      name: 'feelsLikeDay',
      text: `Feels Like ${data.feelsLikeDay}`,
      type: 'p',
      style: 'text-sm opacity-50',
    });

    const feelsLikeNight = TextFactory({
      parent: nightTempDiv.div,
      name: 'feelsLikeNight',
      text: `Feels Like ${data.feelsLikeNight}`,
      type: 'p',
      style: 'text-sm opacity-50',
    });

    const extra = DivFactory({
      parent: mainDiv.div,
      name: 'extra',
      style: 'grid gap-y-2 mt-12 mb-4 min-w-full px-6',
    });

    const chanceOfRain = MoreInfo({
      parent: extra.div,
      property: 'Chance of Rain',
      value: data.pop,
    });

    const windSpeed = MoreInfo({
      parent: extra.div,
      property: 'Wind Speed',
      value: data.windSpeed,
    });

    const windDirection = MoreInfo({
      parent: extra.div,
      property: 'Wind Direction',
      value: data.windDeg,
    });

    const humidity = MoreInfo({
      parent: extra.div,
      property: 'Humidity',
      value: data.humidity,
    });

    const uvi = MoreInfo({
      parent: extra.div,
      property: 'UV Index',
      value: data.uvi,
    });

    const cloudCover = MoreInfo({
      parent: extra.div,
      property: 'Cloud Cover',
      value: data.clouds,
    });

    const sunrise = MoreInfo({
      parent: extra.div,
      property: 'Sunrise',
      value: data.sunrise,
    });

    const sunset = MoreInfo({
      parent: extra.div,
      property: 'Sunset',
      value: data.sunset,
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

  return {
    fullInfoSection,
    main,
    summary,
    removeFromDom,
    render,
  };
};

export default DailyFullInfo;
