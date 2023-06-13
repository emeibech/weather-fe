import DailyFullInfo from '../ui/DailyFullInfo';
import collapse from './collapse';

const expand = (arr) => {
  arr.forEach((day) => {
    day[1].dailyDiv.div.addEventListener('click', () => {
      // console.log({
      //   day: day[0],
      //   isExpanded: day[1].getIsExpanded(),
      //   next: day[1].dailyDiv.div.nextSibling,
      // });

      const fullInfo = DailyFullInfo({
        parent: day[1].dailyDiv.div.parentElement,
        name: day[0],
        summary: day[1],
        nextElem: day[1].dailyDiv.div.nextSibling,
      });

      day[1].removeFromDom();
      fullInfo.render();

      collapse(fullInfo);
    });
  });
};

export default expand;
