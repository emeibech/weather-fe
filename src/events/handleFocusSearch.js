const handleFocusSearch = (search) => {
  search.searchInput.addEventListener('input', () => {
    const button = search.clearBtn;
    const { value } = search.searchInput;

    if (value.length < 1) {
      button.classList.add('hidden');
    } else {
      button.classList.remove('hidden');
    }
  });
};

export default handleFocusSearch;
