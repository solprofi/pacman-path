import maze from '../constants/maze';
import Pacman from './Pacman';

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

const deepCloneArray = array => array.map((elem) => [...elem]);

export const stringPointsToObjects = points => {
  return {
    start: {
      x: +points.start.split('-')[0],
      y: +points.start.split('-')[1]
    },
    target: {
      x: +points.target.split('-')[0],
      y: +points.target.split('-')[1]
    }
  };
};


export const applyPathToMaze = (target, parent) => {
  const mazeWithPath = deepCloneArray(maze);

  let { x, y } = target;

  while (x !== -1 && y !== -1) {
    mazeWithPath[x][y] = 'path';
    ({ x, y } = parent[x][y]);
  };

  return mazeWithPath;
};

export const findPath = (option, points) => {
  const { start, target } = stringPointsToObjects(points);
  const pacman = new Pacman(start, target);
  let parent;

  if (option === 'BFS') {
    console.time('pacman.searchBFS');
    parent = pacman.searchBFS();
    console.timeEnd('pacman.searchBFS');
  };
  if (option === 'DFS') {
    console.time('pacman.searchDFS');
    parent = pacman.searchDFS();
    console.timeEnd('pacman.searchDFS');
  } else {
    console.log('Unknown path type');
  }

  return applyPathToMaze(target, parent);
};