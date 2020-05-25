import React from 'react';

import Tile from '../Tile/Tile';
import './Maze.scss';

const Maze = ({ data, points, handleClick }) => (
  <div>
    {data.map((row, i) => (
      <div key={`row-${i}`} className='mazeRow'>
        {row.map((type, j) => (
          <Tile
            id={`${i}-${j}`}
            type={type}
            points={points}
            key={`${i}-${j}`}
            handleClick={handleClick}
          />
        ))}
      </div>
    ))}
  </div>
);

export default Maze;
