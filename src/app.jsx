import React, { useState } from 'react';

import Counters from './components/counters';
import NavBar from './components/navBar';

function App() {
  const initialState = [
    { id: 1, value: 3, name: 'Spoon' },
    { id: 2, value: 2, name: 'Folk' },
    { id: 3, value: 1, name: 'Tarelka' },
    { id: 4, value: 1, name: 'Start kit for mimimalist' },
    { id: 5, value: 1, name: 'Trash staff' },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters((prev) => prev.filter((pr) => pr.id !== id));
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map(
      (counter) =>
        (counter.id === id && (counter.value += 1) && counter) || counter
    );
    setCounters((prev) => newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map(
      (counter) =>
        (counter.id === id &&
          counter.value > 0 &&
          (counter.value -= 1) &&
          counter) ||
        counter
    );
    setCounters((prev) => newCounters);
  };

  const handleReset = () => setCounters(initialState);
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => (a += c.value), 0)} />
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
