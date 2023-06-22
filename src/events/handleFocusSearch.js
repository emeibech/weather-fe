const handleFocusSearch = ({ search, dropdown }) => {
  search.searchInput.addEventListener('focus', () => {
    dropdown.showDropdown();
  });
};

export default handleFocusSearch;
