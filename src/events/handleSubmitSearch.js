import weatherAlt from '../controller/weatherAlt';

const handleSubmitSearch = (search) => {
  const { form } = search.containerForm;
  const input = search.searchInput;
  const button = search.clearBtn;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = search.searchInput;
    weatherAlt(value);
    search.searchInput.blur();
    input.value = '';
    button.classList.add('hidden');
  });
};

export default handleSubmitSearch;
