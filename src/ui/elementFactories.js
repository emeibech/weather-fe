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

export {
  DivFactory,
  TextFactory,
  ImgFactory,
  MoreInfoFactory,
};
