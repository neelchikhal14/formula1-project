import React from 'react';

import { getCumulativePoints } from '../utilities/seasonPoints';
const DriverInfo = ({ apiData }) => {
  const { data } = apiData;
  const driverDetails = data.Races[0].Results[0].Driver;

  // console.log(data.Races);
  return (
    <div>
      <div className='driver-name'>
        {driverDetails.familyName.toUpperCase()}{' '}
        {driverDetails.givenName.toUpperCase()}
      </div>
      <div className='extra-info'>
        <div className='season'>{data.season}</div>
        <div className='dob'>{driverDetails.dateOfBirth}</div>
        <div className='nationality'>{driverDetails.nationality}</div>
        <div className='number'>{driverDetails.permanentNumber}</div>
        <div className='wiki-link'>
          <a href={driverDetails.url}>Wiki Link</a>
        </div>
      </div>
      <div className='season-points'>
        <span>{getCumulativePoints(data.Races)}</span>
      </div>
    </div>
  );
};

export default DriverInfo;
