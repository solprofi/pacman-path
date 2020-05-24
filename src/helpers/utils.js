import maze from '../constants/maze';

export const getTileNameName = (id, type, points) => {
  if (id === points.start) {
    return 'start';
  } else if (id === points.target) {
    return 'target';
  } else if (type === 0) {
    return 'wall';
  } else if (type === 1) {
    return 'empty';
  } else if (type === 'path') {
    return 'path';
  } else {
    return '';
  }
};

export const isStepValid = step => maze[step.x][step.y] === 1;

export const findNextSteps = cur => {
  const possibleSteps = [
    { x: cur.curX + 1, y: cur.curY },
    { x: cur.curX - 1, y: cur.curY },
    { x: cur.curX, y: cur.curY + 1 },
    { x: cur.curX, y: cur.curY - 1 }
  ];

  return possibleSteps.filter(step => isStepValid(step));
};

export const createGrid = (width, height, value) => {
  const outerArr = [];

  for (let i = 0; i < width; i++) {
    const innerArr = [];
    for (let j = 0; j < height; j++) {
      innerArr.push(value);
    }
    outerArr.push(innerArr);
  };

  return outerArr;
};