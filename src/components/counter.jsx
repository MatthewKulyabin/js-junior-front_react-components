import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => {
    return (!count && 'Zerro') || count;
  };

  const getBageclasses = () => {
    let classes = 'badge m-2 bg-';
    classes += count === 0 ? 'danger' : 'primary';
    return classes;
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <>
      <span className={getBageclasses()}>{formCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="btn btn-secondary btn-sm m-2"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
