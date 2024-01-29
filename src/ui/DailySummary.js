import {
  DivFactory,
  TextFactory,
  ImgFactory,
  SvgFactory,
} from './elementFactories';
import icons from '../assets/icons/icons';

const DailySummary = ({
  parent,
  day,
  icon,
  tempDay,
  tempNight,
  imperial,
  placeholder,
  isFahrenheit,
}) => {
  const summary = (() => {
    if (placeholder) {
      return DivFactory({
        parent,
        name: 'placeholderDiv',
        style: ' rounded min-w-full gap-y-2 animate-pulse',
      });
    }

    const dailyDiv = DivFactory({
      parent,
      name: day,
      style: ' rounded min-w-full gap-y-2',
    });

    const dayText = TextFactory({
      parent: dailyDiv.div,
      name: day,
      text: day,
      type: 'h3',
      style: 'text-lg',
    });

    const iconImg = ImgFactory({
      parent: dailyDiv.div,
      name: 'icon',
      src: icons[icon],
      alt: 'Weather icon',
      style: 'w-8 h-8',
    });

    const expandSvg = SvgFactory({
      parent: dailyDiv.div,
      name: 'expandSvg',
      pathValue: 'M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z',
      width: '48',
      height: '48',
      style: 'w-6 h-6 row-span-2 place-self-center',
      alt: 'Collapsed/Expanded svg image',
    });

    const dayTemp = TextFactory({
      parent: dailyDiv.div,
      name: 'dayTemp',
      text: `Day: ${tempDay}`,
      type: 'p',
      style: 'text-zinc-300 text-sm tracking-wide',
      imperial: `Day: ${imperial.tempDay}`,
      isFahrenheit,
    });

    const nightTemp = TextFactory({
      parent: dailyDiv.div,
      name: 'nightTemp',
      text: `Night: ${tempNight}`,
      type: 'p',
      style: 'text-zinc-300 text-sm tracking-wide',
      imperial: `Night: ${imperial.tempNight}`,
      isFahrenheit,
    });

    return {
      dailyDiv,
      dayText,
      iconImg,
      expandSvg,
      dayTemp,
      nightTemp,
    };
  })();

  const removeFromDom = () => parent.removeChild(summary.dailyDiv.div);
  const render = (nextSibling) => {
    parent.insertBefore(summary.dailyDiv.div, nextSibling);
    summary.dailyDiv.div.setAttribute('data-collapsed', false);
    summary.dailyDiv.div.setAttribute('aria-expanded', true);
    setTimeout(() => {
      summary.dailyDiv.div.removeAttribute('data-collapsed', false);
      summary.dailyDiv.div.setAttribute('data-collapsed', true);
      summary.dailyDiv.div.setAttribute('aria-expanded', false);
    }, 0);
  };

  return {
    ...summary,
    removeFromDom,
    render,
  };
};

export default DailySummary;
