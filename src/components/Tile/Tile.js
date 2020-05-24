import React from 'react';

import { getTileNameName } from '../../helpers/utils';

const Tile = ({ id, type, points, handleClick }) => {
  return (
    <div
      id={id}
      className={getTileNameName(id, type, points)}
      onClick={handleClick}
    >
      <div className='dot' />
    </div>
  );
};

export default Tile;