const handleBlurSearch = ({ search, dropdown }) => {
  const input = search.searchInput;

  input.addEventListener('blur', () => {
    dropdown.hideDropdown();
  });
};

export default handleBlurSearch;
