const unluckyDictionary = [
  'Unfortunately',
  'Regrettably',
  'Sadly',
  'Unluckily',
  'Regrettably',
];
const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

const failureReason = (failure) => {
  if (failure === 'Collision') {
    return 'collision with another car.';
  } else if (
    failure === 'Exhaust' ||
    failure === 'Engine' ||
    failure === 'Battery'
  ) {
    return `${failure.toLowerCase()} issue`;
  } else {
    return 'unforseen circumstances';
  }
};

const positionRemark = (startPosi, endPosi, driver) => {
  if (startPosi >= endPosi) {
    return `This was a good result for ${driver}. He ended at position ${endPosi}`;
  } else {
    return `This was not the result expected by ${driver}. ${driver} ended at position ${endPosi}`;
  }
};
export const createSeasonJourney = (raceDetail, idx) => {
  // console.log(raceDetail);
  let type,
    remark = '';

  if (idx === 0)
    remark = `This is the first race of the year ${raceDetail.season}.`;

  remark += `${raceDetail.Results[0].Driver.familyName} started on grid position ${raceDetail.Results[0].grid}.`;

  if (raceDetail?.Results[0].status !== 'Finished') {
    type = 'danger';
    remark += `${
      unluckyDictionary[randomIndex(unluckyDictionary)]
    } there was an incident on lap number ${raceDetail.Results[0].laps}, ${
      raceDetail.Results[0].Driver.familyName
    } was not able to finish this race due to ${failureReason()}. No points acquired in this race.`;
  } else {
    remark += `${
      raceDetail.Results[0].Driver.familyName
    } succesfully completed the race. ${positionRemark(
      raceDetail.Results[0].grid,
      raceDetail.Results[0].position,
      raceDetail.Results[0].Driver.familyName
    )}. ${
      raceDetail.Results[0].laps
    } laps were done in this race with fastest lap occuring on lap number ${
      raceDetail.Results[0].FastestLap.lap
    } in time period of ${
      raceDetail.Results[0].FastestLap.Time.time
    } at average speed of ${
      raceDetail.Results[0].FastestLap.AverageSpeed.speed
    } ${raceDetail.Results[0].FastestLap.AverageSpeed.units}.${
      raceDetail.Results[0].points
    } points acquired by ${
      raceDetail.Results[0].Driver.familyName
    } in this race`;
  }
  return [type, remark];
};
