import icons from '../assets/icons/icons';
import expand from '../assets/svgs/expand.svg';

const DivFactory = ({
  isLoading,
  parent,
  name,
  style,
}) => {
  const div = document.createElement('div');
  div.setAttribute('data-name', name);

  if (!isLoading) {
    div.className = style;
  }

  parent.appendChild(div);

  const removeElement = () => parent.removeChild(div);

  return {
    div,
    parent,
    removeElement,
  };
};

const TextFactory = ({
  isLoading,
  parent,
  name,
  text,
  type,
  style,
}) => {
  const textElement = document.createElement(type);
  textElement.setAttribute('data-name', name);

  if (!isLoading) {
    textElement.className = style;
    textElement.textContent = text;
  }

  parent.appendChild(textElement);

  const removeElement = () => parent.removeChild(textElement);

  return {
    parent,
    removeElement,
  };
};

const ImgFactory = ({
  isLoading,
  parent,
  name,
  src,
  style,
}) => {
  const img = document.createElement('img');
  img.setAttribute('data-name', name);

  if (!isLoading) {
    img.src = src;
    img.className = style;
  }

  parent.appendChild(img);

  const removeElement = () => parent.removeChild(img);

  return {
    parent,
    removeElement,
  };
};

const MoreInfoFactory = ({
  isLoading,
  parent,
  property,
  value,
}) => {
  const container = DivFactory({
    isLoading,
    parent,
    name: 'infoContainer',
    style: 'flex flex-row justify-between border-b py-1',
  });

  const propertyText = TextFactory({
    isLoading,
    parent: container.div,
    name: 'property',
    text: property,
    type: 'p',
    style: 'opacity-75',
  });

  const valueText = TextFactory({
    isLoading,
    parent: container.div,
    name: 'value',
    text: value,
    type: 'p',
    style: 'opacity-75',
  });

  return {
    propertyText,
    valueText,
  };
};

const DailySummary = ({
  isLoading,
  parent,
  day,
  icon,
  tempDay,
  tempNight,
  feelsLikeDay,
  feelsLikeNight,
}) => {
  const dailyDiv = DivFactory({
    isLoading,
    parent,
    name: 'dailyDiv',
    style: 'border cursor-pointer rounded-lg min-w-full',
  });

  const dayText = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'day',
    text: day,
    type: 'p',
    style: 'text-xl',
  });

  const iconImg = ImgFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'icon',
    src: icons[icon],
    style: 'w-12 h-12',
  });

  const expandImg = ImgFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'expand',
    src: expand,
    style: 'w-8 h-8 row-span-2 justify-self-end self-center',
  });

  const dayTempDiv = DivFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'dayTempDiv',
    style: 'flex flex-col',
  });

  const dayTemp = TextFactory({
    isLoading,
    parent: dayTempDiv.div,
    name: 'dayTemp',
    text: tempDay,
    type: 'p',
    style: 'opacity-75 text-sm',
  });

  const dayFeelsLike = TextFactory({
    isLoading,
    parent: dayTempDiv.div,
    name: 'dayFeelsLike',
    text: feelsLikeDay,
    type: 'p',
    style: 'opacity-75 text-sm',
  });

  const nightTempDiv = DivFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'nightTempDiv',
    style: 'flex flex-col',
  });

  const nightTemp = TextFactory({
    isLoading,
    parent: nightTempDiv.div,
    name: 'nightTemp',
    text: tempNight,
    type: 'p',
    style: 'opacity-75 text-sm',
  });

  const nightFeelsLike = TextFactory({
    isLoading,
    parent: nightTempDiv.div,
    name: 'nightFeelsLike',
    text: feelsLikeNight,
    type: 'p',
    style: 'opacity-75 text-sm',
  });

  return {
    dailyDiv,
    dayText,
    iconImg,
    expandImg,
    dayTempDiv,
    dayTemp,
    dayFeelsLike,
    nightTempDiv,
    nightTemp,
    nightFeelsLike,
  };
};

export {
  DivFactory,
  TextFactory,
  ImgFactory,
  MoreInfoFactory,
  DailySummary,
};
