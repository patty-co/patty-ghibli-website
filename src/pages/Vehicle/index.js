import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'

const VehicleIndex = () => {
  const [vehicles, setVehicles] = useState([]);
  
  useEffect(() => {
    const getList = async () => {
      let response = null;

      response = await ghibliApi.getVehicleList();
      setVehicles(response)
    }
    getList();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">All Vehicles</h1>
        </Col>
      </Row>
      <Row> 
        {
          vehicles.map((vehicle, i) => (
            <Col md={4} key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{vehicle.name}</Card.Title>
                  <Link to={`/vehicles/${vehicle.id}`}>Show details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default VehicleIndex
