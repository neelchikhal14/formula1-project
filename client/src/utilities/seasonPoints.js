export const getCumulativePoints = (results) => {
  let totalSeasonPoints = 0;
  results.forEach(
    (result) => (totalSeasonPoints += Number(result.Results[0].points))
  );
  return totalSeasonPoints;
};
