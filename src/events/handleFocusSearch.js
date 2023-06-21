const handleFocusSearch = (search) => {
  search.searchInput.addEventListener('input', () => {
    const button = search.clearBtn;
    const { value } = search.searchInput;

    if (value.length > 0) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
};

export default handleFocusSearch;
