import { React, useState } from "react";
import { Container ,Row, Col } from "react-bootstrap";
import { EdgeInputTable, GraphV, BellmanFord } from "./exports";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Layout = () => {
    const [edges, setEdges] = useState([]);
    const [startingPoint, setStartingPoint] = useState("");
    const [distance, setDistance] = useState({});

    const handleStartingPointChange = (event) => {
        setStartingPoint(event.target.value); 
    };

    const hanldeCalculate = () => {
        const shortestPaths = BellmanFord(edges, startingPoint);
        setDistance(shortestPaths);
        console.log(shortestPaths);
    }

    const downloadGraph = () => {
            // 
      };

    return(
        <Container fluid className="px-4">
            <Row>
                <Col>
                    <div className="my-4 flex items-center justify-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 text-gray-700 font-semibold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                        <h2 className="mt-4 text-center text-gray-700 font-semibold">
                            Bellman-Ford Shortest Path Finder
                        </h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Row className="mt-4">
                        <h4 className=" text-gray-600 font-semibold">Edge Input Table</h4>
                        <EdgeInputTable edges={edges} setEdges={setEdges}/>
                    </Row>
                    <Row className="mt-4">
                        <h4 className=" text-gray-600 font-semibold">Starting Node</h4>
                            <div className="mt-3 flex justify-between items-center">
                            <input
                                type="text"
                                value={startingPoint}
                                placeholder="S"
                                onChange={handleStartingPointChange} 
                                className=" text-xl border border-gray-900 outline-none py-2 px-3 w-1/2"
                            />
                            <Button variant="dark" onClick={hanldeCalculate}>Calculate</Button>
                            <p className="text-3xl text-gray-300 font-extralight">/</p>
                            <Button variant="success" onClick={downloadGraph} >Download Graph</Button>
                        </div>
                    </Row>
                    <Row className="mt-4">
                        <h4 className=" text-gray-600 font-semibold">Minimum Paths Table</h4>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Vertex</th>
                            <th>Distance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(distance).map(([vertex, dist]) => (
                            <tr key={vertex}>
                                <td>{vertex}</td>
                                <td>{dist === Infinity ? "Infinity" : dist}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="mt-4">
                    <h4 className=" text-gray-600 font-semibold">Graph Visualization</h4>
                    <GraphV edges={edges}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;