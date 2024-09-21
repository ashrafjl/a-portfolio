// src/CountUp.js
import React, { useEffect, useState } from 'react';

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000; // Duration in milliseconds
    const incrementTime = Math.floor(duration / end); // Time per increment

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [target]);

  return <span>{count}</span>;
};

export default CountUp;
