import React from 'react';

import { getCumulativePoints } from '../utilities/seasonPoints';

import './css/DriverInfo.css';
const DriverInfo = ({ apiData }) => {
  const { data } = apiData;
  const driverDetails = data.Races[0].Results[0].Driver;

  // console.log(data.Races);
  return (
    <div className='f1-driver-details-container'>
      <fieldset>
        <legend>
          {' '}
          {driverDetails.givenName.toUpperCase()}{' '}
          {driverDetails.familyName.toUpperCase()}{' '}
        </legend>
        <div className='driver-primary-details'>
          <div className='driver-primary-details-box'>
            <span className='driver-primary-detail-title'>Team</span>
            <span className='driver-primary-detail-value'>
              {data.Races[0].Results[0].Constructor.name}
            </span>
          </div>
          <div className='driver-primary-details-box'>
            <span className='driver-primary-detail-title'>Season</span>
            <span className='driver-primary-detail-value'>{data.season}</span>
          </div>
          <div className='driver-primary-details-box'>
            <span className='driver-primary-detail-title'>Date of Birth</span>
            <span className='driver-primary-detail-value'>
              {driverDetails.dateOfBirth}
            </span>
          </div>
          <div className='driver-primary-details-box'>
            <span className='driver-primary-detail-title'>Nationality</span>
            <span className='driver-primary-detail-value'>
              {driverDetails.nationality}
            </span>
          </div>
          <div className='driver-primary-details-box'>
            <span className='driver-primary-detail-title'>
              Permanent Number
            </span>
            <span className='driver-primary-detail-value'>
              {driverDetails.permanentNumber}
            </span>
          </div>
          <div className='driver-primary-details-box'>
            <span className='driver-primary-detail-title'>Wikipedia</span>
            <a href={driverDetails.url} className='driver-primary-detail-value'>
              Wiki Link
            </a>
          </div>
        </div>
        <div className='driver-season-cumulative-points'>
          <span>{data.season} season cumulative points:</span>
          <span>{getCumulativePoints(data.Races)}</span>
        </div>
      </fieldset>
    </div>
  );
};

export default DriverInfo;
