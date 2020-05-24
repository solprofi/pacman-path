import React, { useState } from 'react';
import Maze from '../Maze/Maze';
import maze from '../../constants/maze';
import './App.scss';

const App = () => {
  const [points, setPoint] = useState({ start: '', target: '' });
  const [data, setData] = useState(maze);

  const definePoints = e => {
    if (!points.start) {
      setPoint({ ...points, start: e.target.id })
    } else {
      setPoint({ ...points, target: e.target.id });
    }
  };

  return (
    <div className='container'>
      <Maze
        data={data}
        points={points}
        handleClick={definePoints}
      />
    </div>
  );
};

export default App;