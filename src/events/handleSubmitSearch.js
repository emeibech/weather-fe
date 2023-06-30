import weatherAlt from '../controller/weatherAlt';

const handleSubmitSearch = (search) => {
  const { form } = search.containerForm;
  const input = search.searchInput;
  const button = search.clearBtn;
  form.addEventListener(
    'submit',
    (event) => {
      event.preventDefault();
      const { value } = search.searchInput;
      const selected = document.querySelector('[data-selected]');

      // Prevent api call when input is empty
      if (value === '') return;

      /* This check is to prevent conflict with another api call
      coming from navigateDropdown when pressing enter. */
      if (selected) return;

      weatherAlt(value);
      search.searchInput.blur();
      input.value = '';
      button.classList.add('hidden');
    },
  );
};

export default handleSubmitSearch;
