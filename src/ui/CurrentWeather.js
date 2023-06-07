import { DivFactory, TextFactory, ImgFactory } from './elementFactories';

const CurrentWeather = () => {
  const isLoading = false;
  const app = document.querySelector('#app');

  const currentWeatherDiv = DivFactory({
    isLoading,
    parent: app,
    name: 'currentWeatherDiv',
    style: '',
  });

  const mainDiv = DivFactory({
    isLoading,
    parent: currentWeatherDiv.div,
    name: 'mainDiv',
    style: 'grid grid-cols-2 place-items-center gap-x-16',
  });

  const icon = ImgFactory({
    isLoading,
    parent: mainDiv.div,
    name: 'icon',
    src: 'https://openweathermap.org/img/wn/02n@4x.png',
    style: 'h-20 w-20',
  });

  const temp = TextFactory({
    isLoading,
    parent: mainDiv.div,
    name: 'temp',
    text: '23°C',
    type: 'Strong',
    style: 'text-5xl',
  });

  const description = TextFactory({
    isLoading,
    parent: mainDiv.div,
    name: 'description',
    text: 'Few Clouds',
    type: 'Strong',
    style: '',
  });

  const feelsLike = TextFactory({
    isLoading,
    parent: mainDiv.div,
    name: 'feelsLike',
    text: 'Feels like 26°C',
    type: 'p',
    style: 'opacity-50',
  });

  return {
    mainDiv,
    icon,
    temp,
    description,
    feelsLike,
  };
};

export default CurrentWeather;
