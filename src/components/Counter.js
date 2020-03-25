import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => count + 1);
  };

  return (
    <div className="counter">
      <h3>click the if you like the post</h3>
      <h3>likes {count}</h3>
      <button onClick={handleClick}>give a like</button>
    </div>
  );
};

export default Counter;
