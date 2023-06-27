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

const MainFactory = () => {
  const app = document.querySelector('#app');
  const footer = document.querySelector('[data-name="footer"]');
  const mainElement = document.createElement('main');
  mainElement.setAttribute('data-name', 'main');
  mainElement.className = 'px-2';

  app.insertBefore(mainElement, footer);

  const removeElement = () => mainElement.removeChild(mainElement);

  const fadeIn = () => {
    mainElement.removeAttribute('data-visible', 'true');
    mainElement.setAttribute('data-visible', 'false');
    setTimeout(() => {
      mainElement.removeAttribute('data-visible', 'false');
      mainElement.setAttribute('data-visible', 'true');
    }, 10);
  };

  return {
    mainElement,
    removeElement,
    fadeIn,
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
  isFahrenheit,
  imperial,
}) => {
  const textElement = document.createElement(type);
  textElement.setAttribute('data-name', name);

  textElement.className = style;
  textElement.textContent = (isFahrenheit) ? imperial : text;

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
    textElement,
    removeElement,
    changeToImperial,
    changeToMetric,
  };
};

const LinkFactory = ({
  parent,
  name,
  text,
  href,
  style,
}) => {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  link.target = '_blank';
  link.setAttribute('data-name', name);
  link.className = style;

  parent.appendChild(link);

  return link;
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

const ListItemFactory = ({
  parent,
  text,
  style,
  name = 'listItem',
}) => {
  const li = document.createElement('li');
  li.textContent = text;
  li.setAttribute('data-name', name);
  li.className = style;

  parent.appendChild(li);

  const setText = (string) => {
    li.textContent = string;
  };

  const hideListItem = () => li.classList.add('hidden');
  const showListItem = () => li.classList.remove('hidden');

  return {
    li,
    setText,
    hideListItem,
    showListItem,
  };
};

export {
  DivFactory,
  MainFactory,
  SectionFactory,
  TextFactory,
  ImgFactory,
  SvgFactory,
  ListItemFactory,
  LinkFactory,
};
