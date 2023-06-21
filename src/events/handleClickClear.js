const handleClickClear = (search) => {
  search.clearBtn.addEventListener('click', () => {
    const input = search.searchInput;
    const button = search.clearBtn;
    input.value = '';
    button.className = 'hidden';
    input.focus();
  });
};

export default handleClickClear;
