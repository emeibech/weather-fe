import './style.css';
import Header from './ui/Header';
import CitiesDropdown from './ui/CitiesDropdown';
import initialLoad from './controller/initialLoad';
import handleFocusSearch from './events/handleFocusSearch';
import handleBlurSearch from './events/handleBlurSearch';
import handleClickClear from './events/handleClickClear';
import handleUserInput from './events/handleUserInput';
import handleSubmitSearch from './events/handleSubmitSearch';
import handleClickDropdown from './events/handleClickDropdown';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const header = Header(app);
  const citiesDropdown = CitiesDropdown(header.rightHeader.div);

  initialLoad(app);

  handleSubmitSearch(header.searchBar);

  handleClickDropdown({
    search: header.searchBar,
    dropdown: citiesDropdown,
  });

  handleFocusSearch({
    search: header.searchBar,
    dropdown: citiesDropdown,
  });

  handleBlurSearch({
    search: header.searchBar,
    dropdown: citiesDropdown,
  });

  handleClickClear({
    search: header.searchBar,
    dropdown: citiesDropdown,
  });

  handleUserInput({
    search: header.searchBar,
    dropdown: citiesDropdown,
  });
});
