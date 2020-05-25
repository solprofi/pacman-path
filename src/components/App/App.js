import React, { useState, Fragment } from 'react';

import Button from '../Button/Button';
import Maze from '../Maze/Maze';
import maze from '../../constants/maze';
import { findPath } from '../../helpers/utils';

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

  const onSearchSelect = e => {
    if (points.start && points.target) {
      setData(findPath(e.target.value, points));
    }
  }

  return (
    <Fragment>
      <div className='container'>
        <Maze
          data={data}
          points={points}
          handleClick={definePoints}
        />
      </div>

      <div className='container'>
        <div className='buttonContainer'>
          <Button
            value='BFS'
            text='Breadth First Search'
            handleClick={onSearchSelect}
          />
          <Button
            value='DFS'
            text='Depth First Search'
            handleClick={onSearchSelect}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default App;