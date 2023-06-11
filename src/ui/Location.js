import { TextFactory } from './elementFactories';

const Location = ({ isLoading, app }) => {
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
    isLoading,
    parent: main.parent,
    name: 'location',
    text: 'Tokyo, Japan',
    type: 'h2',
    style: 'text-lg text-left px-8',
  });

  return {
    main,
    location,
  };
};

export default Location;
