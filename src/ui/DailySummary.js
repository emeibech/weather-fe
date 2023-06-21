import {
  DivFactory,
  TextFactory,
  ImgFactory,
  SvgFactory,
} from './elementFactories';
import icons from '../assets/icons/icons';

const DailySummary = ({
  isLoading,
  parent,
  day,
  icon,
  tempDay,
  tempNight,
  imperial,
}) => {
  const dailyDiv = DivFactory({
    isLoading,
    parent,
    name: day,
    style: 'border-t border-b rounded min-w-full gap-y-2',
  });

  dailyDiv.div.setAttribute('data-collapsed', 'true');

  const dayText = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: day,
    text: day,
    type: 'h3',
    style: 'text-lg',
  });

  const iconImg = ImgFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'icon',
    src: icons[icon],
    style: 'w-8 h-8',
  });

  const expandSvg = SvgFactory({
    parent: dailyDiv.div,
    name: 'expandSvg',
    pathValue: 'M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z',
    width: '48',
    height: '48',
    style: 'w-6 h-6 row-span-2 place-self-center',
  });

  const dayTemp = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'dayTemp',
    text: `Day: ${tempDay}`,
    type: 'p',
    style: 'text-zinc-300 text-sm tracking-wide',
    imperial: `Day: ${imperial.tempDay}`,
  });

  const nightTemp = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'nightTemp',
    text: `Night: ${tempNight}`,
    type: 'p',
    style: 'text-zinc-300 text-sm tracking-wide',
    imperial: `Night: ${imperial.tempNight}`,
  });

  const removeFromDom = () => parent.removeChild(dailyDiv.div);
  const render = (nextSibling) => {
    parent.insertBefore(dailyDiv.div, nextSibling);
    dailyDiv.div.setAttribute('data-collapsed', false);
    setTimeout(() => {
      dailyDiv.div.removeAttribute('data-collapsed', false);
      dailyDiv.div.setAttribute('data-collapsed', true);
    }, 0);
  };

  return {
    dailyDiv,
    dayText,
    iconImg,
    expandSvg,
    dayTemp,
    nightTemp,
    removeFromDom,
    render,
  };
};

export default DailySummary;
