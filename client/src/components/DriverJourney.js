import React from 'react';

import { createSeasonJourney } from '../utilities/journeyCreater';

import './css/DriverJourney.css';
const DriverJourney = ({ apiData }) => {
  const { data } = apiData;
  const raceDetails = data.Races;
  return (
    <div className='driver-journey-container'>
      <h2>Journey throughout the season</h2>
      {raceDetails.map((race, idx) => {
        return (
          <div className='race-info' key={idx}>
            <div className='race-number-container'>
              <div className='race-number'>
                <span
                  className={
                    createSeasonJourney(race, idx)[0] === 'danger'
                      ? `race-text danger-text`
                      : `race-text`
                  }
                >
                  Race
                </span>
                <span
                  className={
                    createSeasonJourney(race, idx)[0] === 'danger'
                      ? `race-text danger-text`
                      : `race-text`
                  }
                >
                  {race.round}
                </span>
              </div>
            </div>
            <div className='race-details'>
              <h3 className='grand-prix'>{race.raceName}</h3>
              <span className='circuit-name'>{race.Circuit.circuitName}</span>
              <span className='circuit-location'>
                {race.Circuit.Location.locality}
              </span>
              <span className='race-journey'>
                {createSeasonJourney(race, idx)[1]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DriverJourney;
