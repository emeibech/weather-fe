import onecall from '../controller/onecall';
import getCountryCode from '../controller/getCountryCode';
import sanitizeInput from '../controller/sanitizeInput';
import filterCities from '../controller/filterCities';
import formatSuggestions from '../controller/formatSuggestions';

const handleClickDropdown = ({ search, dropdown }) => {
  const input = search.searchInput;
  const suggestionBox = dropdown.dropdown.div;
  const button = search.clearBtn;

  const instantiateOC = (li) => {
    [input.value] = li.textContent.split(',');

    onecall({
      lat: li.getAttribute('data-lat'),
      lon: li.getAttribute('data-lon'),
      city: li.textContent.split(',')[0],
      country: li.textContent.split(', ')[1],
      countryCode: getCountryCode(li.textContent.split(', ')[1]),
    });

    input.value = '';
  };

  suggestionBox.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const { target } = event;

    if (target.nodeName === 'LI') {
      instantiateOC(target);
      dropdown.hideDropdown();
      input.blur();
      button.className = 'hidden';
    }

    if (target.nodeName === 'BUTTON') {
      input.value = sanitizeInput(input.value);
      dropdown.hideError();
      const suggestions = filterCities(input.value);
      const formattedCities = formatSuggestions(suggestions);
      dropdown.addToList(formattedCities);
    }
  });
};

export default handleClickDropdown;
