import {
  SectionFactory,
  TextFactory,
  DivFactory,
  ImgFactory,
} from './elementFactories';
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

  const main = (() => {
    const mainDiv = DivFactory({
      parent: fullInfoSection.section,
      name: 'mainDiv',
      style: 'grid grid-cols-3',
    });

    const dayText = TextFactory({
      parent: mainDiv.div,
      name: data.dt.toLowerCase(),
      text: data.dt,
      type: 'h3',
      style: 'text-lg col-span-3',
    });

    const icon = ImgFactory({
      parent: mainDiv.div,
      name: 'icon',
      src: icons[data.icon],
      style: 'h-16 w-16 place-self-center col-span-3',
    });

    const description = TextFactory({
      parent: mainDiv.div,
      name: 'description',
      text: data.description,
      type: 'p',
      style: 'text-xl col-span-3 place-self-center',
    });

    const temperature = DivFactory({
      parent: mainDiv.div,
      name: 'temperature',
      style: 'grid grid-cols-2 col-span-3 mt-6 place-items-center',
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
      text: `Feels like ${data.feelsLikeDay}`,
      type: 'p',
      style: 'text-sm opacity-50',
    });

    const feelsLikeNight = TextFactory({
      parent: nightTempDiv.div,
      name: 'feelsLikeNight',
      text: `Feels like ${data.feelsLikeNight}`,
      type: 'p',
      style: 'text-sm opacity-50',
    });

    return {
      mainDiv,
      dayText,
      icon,
      description,
      temperature,
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
