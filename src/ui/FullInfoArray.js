import DailyFullInfo from './DailyFullInfo';

const FullInfoArray = ({
  dailyArr,
  metric,
  imperial,
  isFahrenheit,
}) => {
  const fullInfoArr = dailyArr.map((day, index) => {
    const prev = dailyArr[index - 1];

    const fullInfo = DailyFullInfo({
      parent: day.dailyDiv.div.parentElement,
      name: metric[index].dt,
      summary: day,
      metric: metric[index],
      imperial: imperial[index],
      isFahrenheit,
      nextElem: (() => {
        if (index !== 0) return prev.dailyDiv.div.nextSibling;
        return day.dailyDiv.div.parentElement.firstChild.nextSibling;
      })(),
    });

    return fullInfo;
  });

  return fullInfoArr;
};

export default FullInfoArray;
