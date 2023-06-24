import weatherAlt from '../controller/weatherAlt';

const handleSubmitSearch = (search) => {
  const { form } = search.containerForm;
  const input = search.searchInput;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = search.searchInput;
    weatherAlt(value);
    search.searchInput.blur();
    input.value = '';
  });
};

export default handleSubmitSearch;
