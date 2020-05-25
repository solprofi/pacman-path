import React from 'react';

import { getTileNameName } from '../../helpers/utils';
import './Tile.scss';

const Tile = ({ id, type, points, handleClick }) => {
  return (
    <div
      id={id}
      className={getTileNameName(id, type, points)}
      onClick={handleClick}
    >
      <div className='food' />
    </div>
  );
};

export default Tile;