import React, { useEffect, useState } from 'react';

import './css/Error.css';
const Error = ({ msg }) => {
  const [displayComponent, setDisplayComponent] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setDisplayComponent(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (displayComponent) {
    return (
      <>
        {displayComponent && (
          <div className='error-container'>
            <h4>{msg}</h4>
          </div>
        )}
      </>
    );
  }

  return null;
};

export default Error;
