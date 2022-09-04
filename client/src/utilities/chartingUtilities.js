export const createLabelsAndDatasets = (apiData) => {
  const countries = [];
  const startPositions = [];
  const endPositions = [];
  const points = [];
  const results = apiData.data.Races;
  results.forEach((result) => {
    countries.push(result.Circuit.Location.country);
    const raceResult = result.Results[0];
    startPositions.push(Number(raceResult.grid));
    endPositions.push(Number(raceResult.position));
    points.push(Number(raceResult.points));
  });
  return [countries, startPositions, endPositions, points];
};
