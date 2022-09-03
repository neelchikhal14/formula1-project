import React from 'react';

import { createSeasonJourney } from '../utilities/journeyCreater';
const DriverJourney = ({ apiData }) => {
  const { data } = apiData;
  const raceDetails = data.Races;
  return (
    <div>
      {raceDetails.map((race, idx) => {
        return (
          <div className='race-info' key={idx}>
            <div className='race-number'>
              <span className='race-text'>Race</span>
              <span>{race.round}</span>
            </div>
            <div className='race-details'>
              <h3>{race.raceName}</h3>
              <span>{race.Circuit.circuitName}</span>
              <span>{race.Circuit.Location.locality}</span>
              <h5>{createSeasonJourney(race, idx)[1]}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DriverJourney;
