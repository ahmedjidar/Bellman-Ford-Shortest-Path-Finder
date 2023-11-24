import React from 'react';
import { useEffect } from 'react';
import 'd3-drag';
import 'd3-shape';
import 'd3-force';
import 'd3-selection';
import 'd3-zoom';
import { Graph } from 'react-d3-graph';

const GraphV = ({ edges }) => {

  const graphData = {
    nodes: edges.flatMap(edge => [{ id: edge.source }, { id: edge.destination }]),
    links: edges.map((edge, index) => ({ source: edge.source, target: edge.destination, weight: edge.weight, })),
  };

  const myConfig = {
    directed: true,
    nodeHighlightBehavior: true,
    nodeClickBehavior: "zoom",
    staticGraph: false,
    linkLength: 500,
    node: {
      color: 'gray',
      size: 1000, 
      fontSize: 20, 
      highlightStrokeColor: 'lightblue',
      highlightFontSize: 25,
      highlightFontWeight: 'bold',
      highlightColor: 'lightgreen',
      labelPosition: 'center',
      fontColor: 'white',
    },
    link: {
        type: 'STRAIGHT',
        highlightColor: 'lightblue',
        renderLabel: true, 
        labelProperty: 'weight', 
        fontSize: 16,
        fontColor: 'black',
        fontWeight: 'normal',
        highlightFontWeight: 'bold',
        strokeWidth: 2, 
        color: 'gray',
        arrowProperties: {
          enabled: true,
          scaleFactor: 0.5, 
        },
    },
    width: 700,
    height: 1000, 
    d3: {
        hierarchical: {
          direction: 'LR', 
          sortMethod: 'directed', 
        },
        gravity: -500,
        alphaTarget: 1,
      },
  };

  const onClickNode = (nodeId) => {
    console.log(`Node clicked: ${nodeId}`);
  };

  return (
    <div className='h-full border border-gray-400 rounded p-2'>
        <p className='font-light text-base text-gray-400'>- Nexts are highlighted when hovering over a Node --</p>
        <div className='flex items-start justify-center'>
            <Graph
                id="graph-id"
                data={graphData}
                config={myConfig}
                onClickNode={onClickNode}
            />
        </div>
    </div>
  );
};

export default GraphV;
