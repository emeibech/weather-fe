const DivFactory = ({
  parent,
  name,
  style,
}) => {
  const div = document.createElement('div');
  div.setAttribute('data-name', name);

  div.className = style;

  parent.appendChild(div);

  const removeElement = () => parent.removeChild(div);

  return {
    div,
    parent,
    removeElement,
  };
};

const SectionFactory = ({
  parent,
  name,
  style,
}) => {
  const section = document.createElement('section');
  section.setAttribute('data-name', name);

  section.className = style;

  parent.appendChild(section);

  const removeElement = () => parent.removeChild(section);

  const render = () => parent.appendChild(section);

  return {
    section,
    parent,
    removeElement,
    render,
  };
};

const TextFactory = ({
  parent,
  name,
  text,
  type,
  style,
  imperial = false,
}) => {
  const textElement = document.createElement(type);
  textElement.setAttribute('data-name', name);

  textElement.className = style;
  textElement.textContent = text;

  parent.appendChild(textElement);

  const removeElement = () => parent.removeChild(textElement);

  const changeToImperial = () => {
    textElement.textContent = imperial;
  };

  const changeToMetric = () => {
    textElement.textContent = text;
  };

  return {
    parent,
    removeElement,
    changeToImperial,
    changeToMetric,
  };
};

const ImgFactory = ({
  parent,
  name,
  src,
  style,
}) => {
  const img = document.createElement('img');
  img.setAttribute('data-name', name);

  img.src = src;
  img.className = style;

  parent.appendChild(img);

  const removeElement = () => parent.removeChild(img);

  return {
    parent,
    removeElement,
  };
};

const SvgFactory = ({
  parent,
  name,
  pathValue,
  width,
  height,
  style,
}) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('data-svg', name);
  svg.setAttribute('fill', 'rgb(120,120,120)');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', '0 -960 960 960');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathValue);

  svg.appendChild(path);
  style.split(' ').forEach((item) => svg.classList.add(item));
  parent.appendChild(svg);

  return {
    svg,
  };
};

export {
  DivFactory,
  SectionFactory,
  TextFactory,
  ImgFactory,
  SvgFactory,
};
