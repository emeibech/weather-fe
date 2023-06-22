import validateInput from '../controller/validateInput';
import filterCities from '../controller/filterCities';
import formatSuggestions from '../controller/formatSuggestions';

const handleUserInput = ({ dropdown, input }) => {
  input.addEventListener('input', () => {
    const { value } = input;

    if (validateInput(value)) {
      const suggestions = filterCities(value);
      const formattedCities = formatSuggestions(suggestions);

      dropdown.emptyList();
      dropdown.addToList(formattedCities);
      dropdown.showDropdown();

      if (value.length < 1) {
        dropdown.emptyList();
        dropdown.hideDropdown();
      }
    }
  });
};

export default handleUserInput;
