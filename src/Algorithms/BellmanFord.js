import React from "react";

const BellmanFord = (edges, source) => {
    // logic
    const vertices = new Set();
    const distance = {};
  
    for (const edge of edges) {
      vertices.add(edge.source);
      vertices.add(edge.destination);
      distance[edge.source] = Infinity;
      distance[edge.destination] = Infinity;
    }
  
    distance[source] = 0;
  
    for (let i = 0; i < vertices.size - 1; i++) {
      for (const edge of edges) {
        const { source, destination, weight } = edge;
        if (distance[source] !== Infinity && distance[source] + weight < distance[destination]) {
          distance[destination] = distance[source] + weight;
        }
      }
    }
  
    for (const edge of edges) {
      const { source, destination, weight } = edge;
      if (distance[source] !== Infinity && distance[source] + weight < distance[destination]) {
        console.log("Graph contains negative cycle");
        return;
      }
    }
  
    return distance;
}

export default BellmanFord;