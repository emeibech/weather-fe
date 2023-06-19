import DailyFullInfo from './DailyFullInfo';

const FullInfoArray = ({ dailyArr, metric, imperial }) => {
  const fullInfoArr = dailyArr.map((day, index) => {
    const fullInfo = DailyFullInfo({
      parent: day.dailyDiv.div.parentElement,
      name: metric[index].dt,
      summary: day,
      nextElem: day.dailyDiv.div.nextSibling,
      metric: metric[index],
      imperial: imperial[index],
    });

    return fullInfo;
  });

  return fullInfoArr;
};

export default FullInfoArray;
