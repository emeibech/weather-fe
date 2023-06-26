import { MainFactory, TextFactory } from './elementFactories';

const FetchError = (error) => {
  const app = document.querySelector('#app');
  const prevMain = document.querySelector('[data-name="main"]');
  if (prevMain) app.removeChild(prevMain);

  const main = MainFactory();

  const fetchError = TextFactory({
    parent: main.mainElement,
    name: 'fetchError',
    text: error,
    type: 'em',
    style: 'text-center',
  });

  return fetchError;
};

export default FetchError;
