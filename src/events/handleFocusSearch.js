const handleFocusSearch = ({ search, dropdown }) => {
  search.searchInput.addEventListener(
    'focus',
    () => {
      if (search.searchInput.value === '') {
        dropdown.emptyList();
        dropdown.hideError();
      }

      dropdown.showDropdown();
    },
  );
};

export default handleFocusSearch;
