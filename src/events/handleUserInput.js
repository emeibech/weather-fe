import validateInput from '../controller/validateInput';
import filterCities from '../controller/filterCities';
import formatSuggestions from '../controller/formatSuggestions';

const handleUserInput = ({ dropdown, search }) => {
  search.searchInput.addEventListener('input', () => {
    const { clearBtn } = search;
    const { value } = search.searchInput;
    const input = validateInput(value);

    if (value.length < 1) {
      clearBtn.classList.add('hidden');
    } else {
      clearBtn.classList.remove('hidden');
    }

    if (input.isValid) {
      dropdown.hideError();
      const suggestions = filterCities(value);
      const formattedCities = formatSuggestions(suggestions);

      dropdown.emptyList();
      dropdown.addToList(formattedCities);
      dropdown.showDropdown();

      if (value.length < 1) {
        dropdown.emptyList();
        dropdown.hideDropdown();
      }
    } else {
      dropdown.emptyList();
      dropdown.displayError(input.invalidChars);
      dropdown.showDropdown();
    }
  });
};

export default handleUserInput;
