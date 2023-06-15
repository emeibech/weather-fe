import DailyFullInfo from '../ui/DailyFullInfo';

const collapse = (full) => {
  full.fullInfoSection.section.addEventListener('click', () => {
    full.summary.render(full.fullInfoSection.section.nextSibling);
    full.removeFromDom();
  });
};

const expand = ({ dailyArr, data }) => {
  dailyArr.forEach((day, index) => {
    day.dailyDiv.div.addEventListener('click', () => {
      const fullInfo = DailyFullInfo({
        parent: day.dailyDiv.div.parentElement,
        name: data[index].dt,
        summary: day,
        nextElem: day.dailyDiv.div.nextSibling,
        data: data[index],
      });

      day.removeFromDom();
      fullInfo.render();

      collapse(fullInfo);
    });
  });
};

const handleClickDaily = ({ dailyArr, data }) => expand({ dailyArr, data });

export default handleClickDaily;
