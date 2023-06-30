import validateInput from '../controller/validateInput';
import filterCities from '../controller/filterCities';
import formatSuggestions from '../controller/formatSuggestions';
import navigateDropdown from '../controller/navigateDropdown';

const getActiveList = () => {
  const list = [...document.querySelector('[data-name="list"]').childNodes];
  const activeList = list.filter((li) => li.textContent !== '');
  return activeList;
};

const handleUserInput = ({ dropdown, search }) => {
  const input = search.searchInput;
  const { clearBtn } = search;
  let activeList;

  input.addEventListener(
    'input',
    () => {
      const { value } = input;
      const userInput = validateInput(value);

      if (value.length < 1) {
        clearBtn.classList.add('hidden');
      } else {
        clearBtn.classList.remove('hidden');
      }

      if (userInput.isValid) {
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
        dropdown.displayError(userInput.invalidChars);
        dropdown.showDropdown();
      }

      activeList = getActiveList();
    },
  );

  input.addEventListener(
    'keydown',
    (event) => {
      const { value } = input;
      const { keyCode } = event;

      if (value !== '') {
      /* Delaying the execution of navigateDropdown ensures
        that it will receive the correct activeList parameter.
        Without the timeout, navigateDropdown will execute first before
        the input event listener function that generates the new activeList. */
        setTimeout(
          () => {
            navigateDropdown({
              activeList,
              keyCode,
              search,
              dropdown,
            });
          },
          10,
        );
      }
    },
  );
};

export default handleUserInput;
