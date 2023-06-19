const collapse = (full) => {
  full.fullInfoSection.section.addEventListener('click', () => {
    full.summary.render(full.fullInfoSection.section.nextSibling);
    full.removeFromDom();
  }, { once: true });
};

const expand = ({ daily, fullInfo }) => {
  fullInfo.render();
  daily.removeFromDom();
  collapse(fullInfo);
};

const handleClickDaily = ({
  dailyArr,
  fullInfoArr,
}) => {
  dailyArr.forEach((day, index) => {
    day.dailyDiv.div.addEventListener('click', () => {
      expand({
        daily: day,
        fullInfo: fullInfoArr[index],
      });
    });
  });
};

export default handleClickDaily;
