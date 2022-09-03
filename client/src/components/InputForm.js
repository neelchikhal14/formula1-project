import React, { useState } from 'react';
import axios from 'axios';
import { drivers } from '../constants/drivers';
import { yearRange } from '../constants/year';
const InputForm = ({ apiData, setApiData }) => {
  const [year, setYear] = useState(null);
  const [driverName, setDriverName] = useState('');

  const handleSubmitJourney = (e) => {
    e.preventDefault();
    const url = `http://ergast.com/api/f1/${year}/drivers/${driverName}/results.json`;
    setApiData((apiData) => ({
      ...apiData,
      loading: true,
    }));
    const fetch = async () => {
      try {
        const { data } = await axios.get(url);
        // console.log(data);
        if (data?.MRData?.RaceTable?.Races.length === 0) {
          setApiData((apiData) => ({
            ...apiData,
            data: null,
          }));
          setApiData((apiData) => ({
            ...apiData,
            error: {
              message: `No Data found for ${driverName.toUpperCase()} for the year ${year}`,
            },
          }));
        } else {
          setApiData((apiData) => ({
            ...apiData,
            data: data?.MRData?.RaceTable,
          }));
          setApiData((apiData) => ({
            ...apiData,
            error: null,
          }));
        }
      } catch (error) {
        setApiData((apiData) => ({ ...apiData, error: error }));
        setApiData((apiData) => ({
          ...apiData,
          data: null,
        }));
      } finally {
        setApiData((apiData) => ({ ...apiData, loading: false }));
      }
    };
    fetch();
  };

  return (
    <form onSubmit={handleSubmitJourney}>
      <label htmlFor='driver-select'>Choose A Driver:</label>
      <select
        id='driver-select'
        defaultValue={'DEFAULT'}
        onChange={(e) => setDriverName(e.target.value)}
      >
        <option value='DEFAULT' disabled hidden>
          Choose here
        </option>
        {drivers.map((dr) => (
          <option key={dr.driverId} value={dr.driverId}>
            {dr.completeDriverName}
          </option>
        ))}
      </select>
      <label htmlFor='year-select'>Choose Year:</label>
      <select
        id='year-select'
        defaultValue={'DEFAULT'}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value='DEFAULT' disabled hidden>
          Choose here
        </option>
        {yearRange.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button type='submit'>See Journey</button>
    </form>
  );
};

export default InputForm;
