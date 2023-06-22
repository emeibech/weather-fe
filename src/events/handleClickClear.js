const handleClickClear = ({ search, dropdown }) => {
  search.clearBtn.addEventListener('click', () => {
    const input = search.searchInput;
    const button = search.clearBtn;
    input.value = '';
    button.className = 'hidden';
    input.focus();
    dropdown.emptyList();
  });
};

export default handleClickClear;
