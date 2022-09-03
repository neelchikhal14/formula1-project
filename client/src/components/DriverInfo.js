import React from 'react';

const DriverInfo = ({ apiData }) => {
  const { data } = apiData;
  const driverDetails = data.Races[0].Results[0].Driver;

  console.log(driverDetails);
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
    </div>
  );
};

export default DriverInfo;
