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

const SectionFactory = ({
  isLoading,
  parent,
  name,
  style,
}) => {
  const section = document.createElement('section');
  section.setAttribute('data-name', name);

  if (!isLoading) {
    section.className = style;
  }

  parent.appendChild(section);

  const removeElement = () => parent.removeChild(section);

  return {
    section,
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

export {
  DivFactory,
  SectionFactory,
  TextFactory,
  ImgFactory,
};
