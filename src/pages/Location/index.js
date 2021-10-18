import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'

const LocationIndex = () => {
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    const getList = async () => {
      let response = null;

      response = await ghibliApi.getLocationList();
      setLocations(response)
    }
    getList();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">All Locations</h1>
        </Col>
      </Row>
      <Row> 
        {
          locations.map((location, i) => (
            <Col md={4} key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{location.name}</Card.Title>
                  <Link to={`/locations/${location.id}`}>Show details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default LocationIndex
