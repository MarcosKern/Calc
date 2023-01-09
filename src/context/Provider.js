import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import MyContext from './Context';

function Provider({ children }) {
  const [result, setResult] = useState('')


  const value = useMemo(() => ({
    result,
    setResult,
  }), [
    result,
    setResult
  ]);

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;