import maze from './maze';
import { findNextSteps, createGrid } from './utils';

class Pacman {
  constructor(start, target) {
    this.start = start;
    this.target = target;
    this.steps = 0;
  };

  static create(start, target) {
    return new Pacman(start, target);
  };

  recurseDFS(cur, parent, isTraversed) {
    this.steps += 1;

    if (cur.x === this.target.x && cur.y === this.target.y) {
      return true;
    }

    const nextSteps = findNextSteps({ curX: cur.x, curY: cur.y });

    for (const next of nextSteps) {
      if (isTraversed[next.x][next.y]) {
        continue;
      };
      isTraversed[next.x][next.y] = true;

      const isPathFound = this.recurseDFS(next, parent, isTraversed);

      if (isPathFound === true) {
        parent[next.x][next.y] = cur;
        return true;
      };
    };

    return false;
  };

  DFSSearch() {
    const parent = createGrid(maze.length, maze[0].length, { x: -1, y: -1 });
    const isTraversed = createGrid(maze.length, maze[0].length, false);

    isTraversed[this.start.x][this.start.y] = true;

    const isPathFound = this.recurseDFS({ x: this.start.x, y: this.start.y }, parent, isTraversed);

    if (!isPathFound) {
      return 'Error';
    }

    console.log(this.steps);

    return parent;
  };


  BFSSearch() {
    let numberOfSteps = 0;
    const distance = createGrid(maze.length, maze[0].length, Infinity);
    const parent = createGrid(maze.length, maze[0].length, { x: -1, y: -1 });
    const queue = [];

    distance[this.start.x][this.start.y] = 0;
    queue.push({ curX: this.start.x, curY: this.start.y });

    while (queue.length) {
      const cur = queue.shift();
      const nextSteps = findNextSteps(cur);

      nextSteps.forEach(next => {
        if (distance[cur.curX][cur.curY] + 1 < distance[next.x][next.y]) {
          distance[next.x][next.y] = distance[cur.curX][cur.curY] + 1;
          queue.push({ curX: next.x, curY: next.y });

          parent[next.x][next.y] = { x: cur.curX, y: cur.curY };

          numberOfSteps++;
        }
      });
    }

    if (distance[this.target.x][this.target.y] === Infinity) {
      return 'Error';
    }

    console.log(numberOfSteps);

    return parent;
  };
};



export default Pacman;
