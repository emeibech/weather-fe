import removeSelected from '../controller/removeSelected';
import validateInput from '../controller/validateInput';

const handleBlurSearch = ({ search, dropdown }) => {
  const input = search.searchInput;
  const { value } = input;

  input.addEventListener(
    'blur',
    () => {
      if (validateInput(value)) input.focus();
      dropdown.hideDropdown();
      removeSelected();
    },
  );
};

export default handleBlurSearch;
