import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'
import ListItem from '../../components/ListItem'

const LocationDetails = ({ match }) => {
  const {
    params: { locationId }
  } = match;
  
  const [location, setLocation] = useState({
    loading: false,
    data: null,
    error: false
  });

  let locationLists = {
    residents: [],
    films: [],
    residentsHasItems: false,
    filmsHasItems: false
  }
  
  useEffect(() => {
    setLocation({
      loading: true,
      data: null,
      error: false
    })
    const getLocation = async () => {
      let response = null;

      response = await ghibliApi.getLocation(locationId);
      setLocation({
        loading: false,
        data: response,
        error: false
      })
    }
    getLocation();
  }, []);

  let content = null;
  let residentList = null;
  let filmList = null;

  if(location.data){
    locationLists.residents = location.data.residents;  
    locationLists.films = location.data.films;  
    locationLists.residentsHasItems = location.data.residents[0].split('/')[location.data.residents[0].split('/').length - 1] !== '';
    locationLists.filmsHasItems = location.data.films[0].split('/')[location.data.films[0].split('/').length - 1] !== '';
console.log(location.data.films[0])
    content = <>
      <Col md={12}>
        <h1>{location.data.name}</h1>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Climate</Card.Title>
            <Card.Text className="mb-2 detail">{location.data.climate}</Card.Text>
            <Card.Title>Terrain</Card.Title>
            <Card.Text className="mb-2 detail">{location.data.terrain}</Card.Text>
            <Card.Title>Surface Water</Card.Title>
            <Card.Text className="mb-2 detail">{location.data.surface_water}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>;

    if(locationLists.residentsHasItems) {
      residentList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Residents</Card.Title>
            {
              locationLists.residents.map((resident, i) => (
                <ListItem key={'resident' + i} link={resident}></ListItem>
              ))
            }
          </Card.Body>
        </Card>
      </Col>
    } 

    if(locationLists.filmsHasItems) {
      filmList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Films</Card.Title>
            {
              locationLists.films.map((film, i) => (
                <ListItem key={'film' + i} link={film}></ListItem>
              ))
            } 
          </Card.Body>
        </Card>
      </Col>
    } 
  }

  return (
    <Container>
    <Row> 
      {content}
      {residentList}
      {filmList}
    </Row>
  </Container>
  )
}

export default LocationDetails
