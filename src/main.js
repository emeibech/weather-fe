import './style.css';
import Header from './ui/Header';
import handleFocusSearch from './events/handleFocusSearch';
import handleClickClear from './events/handleClickClear';
import handleUserInput from './events/handleUserInput';
import CitiesDropdown from './ui/CitiesDropdown';
import handleBlurSearch from './events/handleBlurSearch';
import initialLoad from './controller/initialLoad';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const header = Header(app);
  const citiesDropdown = CitiesDropdown(header.rightHeader.div);

  initialLoad(app);

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
