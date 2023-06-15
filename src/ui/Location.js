import { TextFactory } from './elementFactories';

const Location = ({
  app,
  city,
  country,
}) => {
  const main = (() => {
    const parent = document.createElement('main');
    parent.setAttribute('data-name', 'main');

    app.appendChild(parent);

    const removeElement = () => parent.removeChild(parent);

    return {
      parent,
      removeElement,
    };
  })();

  const location = TextFactory({
    parent: main.parent,
    name: 'location',
    text: `${city}, ${country}`,
    type: 'h2',
    style: 'text-lg text-left px-8',
  });

  return {
    main,
    location,
  };
};

export default Location;
