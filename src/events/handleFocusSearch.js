const handleFocusSearch = (search) => {
  search.searchInput.addEventListener('input', () => {
    const button = search.clearBtn;
    button.classList.remove('hidden');
    if (search.searchInput.value === '') button.classList.add('hidden');
  });
};

export default handleFocusSearch;
