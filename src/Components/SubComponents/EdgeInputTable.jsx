import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const EdgeInputTable = ({ edges, setEdges }) => {

  const handleAddEdge = () => {
    setEdges([...edges, { source: "", destination: "", weight: "" }]);
  };

//   both functions use immutable operations to update the edges state by creating a copy
//   of the array, making modifications, and then setting the state with the updated array.
//   This approach ensures that React knows a change has occurred and triggers a re-render
//   with the updated state
const handleInputChange = (index, event, key) => {
    const newEdges = [...edges];
    if (key === 'weight') {
      newEdges[index][key] = parseInt(event.target.value, 10) || ""; // Convert to number or keep empty string
    } else {
      newEdges[index][key] = event.target.value;
    }
    setEdges(newEdges);
  };

  const handleRemoveEdge = (index) => {
    const newEdges = [...edges];
    newEdges.splice(index, 1);
    console.log(index);
    setEdges(newEdges);
  };

// clear all
  const clearAll = (index) => {
    const confirmed = window.confirm('Are you sure you want to clear all edges?');
    if (confirmed) {
    const newEdges = [...edges];
    newEdges.splice(index);
    setEdges(newEdges);
    }
  };

  return (
    <>
      <Table hover bordered>
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Weight</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="rounded">
          {edges.map((edge, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={edge.source}
                  onChange={(e) => handleInputChange(index, e, "source")}
                  className="text-xl p-2 w-full outline-none bg-transparent"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={edge.destination}
                  onChange={(e) => handleInputChange(index, e, "destination")}
                  className="text-xl p-2 w-full outline-none bg-transparent"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={edge.weight}
                  onChange={(e) => handleInputChange(index, e, "weight")}
                  className="text-xl p-2 w-full outline-none bg-transparent"
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => handleRemoveEdge(index)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="flex items-center justify-start gap-4">
        <Button variant="dark" onClick={handleAddEdge}>
          Add Edge
        </Button>
        <p className="text-3xl text-gray-300 font-extralight">/</p>
        <Button variant="secondary" onClick={clearAll}>
          Clear All
        </Button>
      </div>
    </>
  );
};

export default EdgeInputTable;
