import React, { useState } from 'react';
import { Button } from './ButtonMemo';

export const UseCallback = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = () => setDelta(delta => delta + 1);
  const increment = () => setC(c => c + delta);


  return (
    <div>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <br />
      <div>
        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>
      </div>
    </div>
  );
}