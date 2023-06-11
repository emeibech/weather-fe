import icons from '../assets/icons/icons';

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
}) => {
  const dailyDiv = DivFactory({
    isLoading,
    parent,
    name: day,
    style: 'border-t border-b rounded min-w-full gap-y-2',
  });

  const dayText = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'day',
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

  const expandSvg = (() => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('fill', 'rgb(120,120,120)');
    svg.setAttribute('height', '48');
    svg.setAttribute('width', '48');
    svg.setAttribute('viewBox', '0 -960 960 960');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M480-357q-6 0-11-2t-10-7L261-564q-8-8-7.5-21.5T262-607q10-10 21.5-8.5T304-606l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501-366q-5 5-10 7t-11 2Z',
    );

    svg.appendChild(path);

    if (!isLoading) {
      svg.classList.add('w-8', 'h-8', 'row-span-2', 'place-self-center');
    }

    dailyDiv.div.appendChild(svg);

    const removeElement = () => dailyDiv.div.removeChild(svg);

    return {
      svg,
      removeElement,
    };
  })();

  const dayTemp = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'dayTemp',
    text: `Day: ${tempDay}`,
    type: 'p',
    style: 'opacity-75 text-sm tracking-wide',
  });

  const nightTemp = TextFactory({
    isLoading,
    parent: dailyDiv.div,
    name: 'nightTemp',
    text: `Night: ${tempNight}`,
    type: 'p',
    style: 'opacity-75 text-sm tracking-wide',
  });

  return {
    dailyDiv,
    dayText,
    iconImg,
    expandSvg,
    dayTemp,
    nightTemp,
  };
};

export {
  DivFactory,
  TextFactory,
  ImgFactory,
  MoreInfoFactory,
  DailySummary,
};
