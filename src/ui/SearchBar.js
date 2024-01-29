import { ImgFactory } from './elementFactories';
import search from '../assets/svgs/search-gray.svg';
import clear from '../assets/svgs/clear-white.svg';

const SearchBar = (parent) => {
  const containerForm = (() => {
    const form = document.createElement('form');
    form.setAttribute('action', '');
    form.setAttribute('data-name', 'containerForm');
    form.className = 'grid items-center';

    parent.appendChild(form);

    const removeFromDom = () => parent.removeChild(form);
    const render = (next) => parent.insertBefore(form, next);

    return {
      form,
      removeFromDom,
      render,
    };
  })();

  const searchInput = (() => {
    const input = document.createElement('input');
    input.setAttribute('aria-label', 'Search bar');
    input.setAttribute('type', 'search');
    input.setAttribute('id', 'search');
    input.setAttribute('name', 'search');
    input.setAttribute('placeholder', 'Search');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('data-name', 'searchInput');

    containerForm.form.appendChild(input);

    return input;
  })();

  const searchSvg = ImgFactory({
    parent: containerForm.form,
    name: 'searchSvg',
    src: search,
    style: 'h-4 w-4',
    alt: 'Search icon',
  });

  const clearBtn = (() => {
    const button = document.createElement('button');
    button.setAttribute('data-name', 'clearBtn');
    button.setAttribute('type', 'button');
    button.className = 'hidden';

    containerForm.form.appendChild(button);

    return button;
  })();

  const clearSvg = ImgFactory({
    parent: clearBtn,
    name: 'clearSvg',
    src: clear,
    style: 'h-4 w-4',
    alt: 'Clear icon',
  });

  return {
    containerForm,
    searchInput,
    clearBtn,
    searchSvg,
    clearSvg,
  };
};

export default SearchBar;
