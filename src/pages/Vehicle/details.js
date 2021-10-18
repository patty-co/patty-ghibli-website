import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'
import CardText from '../../components/CardText'

const VehicleDetails = ({ match }) => {
  const {
    params: { vehicleId }
  } = match;
  
  const [vehicle, setVehicle] = useState({
    loading: false,
    data: null,
    error: false
  });
  
  useEffect(() => {
    setVehicle({
      loading: true,
      data: null,
      error: false
    })
    const getVehicle = async () => {
      let response = null;

      response = await ghibliApi.getVehicle(vehicleId);
      setVehicle({
        loading: false,
        data: response,
        error: false
      })
    }
    getVehicle();
  }, []);

  let content = null;

  if(vehicle.data){
    content = <>
      <Col md={12}>
        <h1>{vehicle.data.name}</h1>
      </Col>
      <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text className="mb-2 detail">{vehicle.data.description}</Card.Text>
            <Card.Title>Vehicle Class</Card.Title>
            <Card.Text className="mb-2 detail">{vehicle.data.vehicle_class}</Card.Text>
            <Card.Title>Length</Card.Title>
            <Card.Text className="mb-2 detail">{vehicle.data.length}</Card.Text>
            <Card.Title>Pilot</Card.Title>
            <CardText link={vehicle.data.pilot}></CardText>
            <Card.Title>Film</Card.Title>
            <CardText link={vehicle.data.films}></CardText>
          </Card.Body>
        </Card>
      </Col>
    </>;
  }

  return (
    <Container>
    <Row> 
      {content}
    </Row>
  </Container>
  )
}

export default VehicleDetails
