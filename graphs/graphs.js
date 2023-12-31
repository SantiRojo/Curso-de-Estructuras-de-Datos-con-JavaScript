/* 
  2 - 0
 / \
1 - 3
*/


// Edge List
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];

// Adjacewnt List
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graphHashTable = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
}

// Adjacent Matrix
const graph3 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]

const graph4 = {
  0: [0,0,1,0],
  1: [0,0,1,1],
  2: [1,1,0,1],
  3: [0,1,1,0],
}


// Ejercicio

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();