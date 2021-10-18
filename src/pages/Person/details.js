import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'
import ListItem from '../../components/ListItem'
import CardText from '../../components/CardText'

const PersonDetails = ({ match }) => {
  const {
    params: { personId }
  } = match;
  
  const [person, setPerson] = useState({
    loading: false,
    data: null,
    error: false
  });
  
  useEffect(() => {
    setPerson({
      loading: true,
      data: null,
      error: false
    })
    const getPerson = async () => {
      let response = null;

      response = await ghibliApi.getPerson(personId);
      setPerson({
        loading: false,
        data: response,
        error: false
      })
    }
    getPerson();
  }, []);

  let content = null;

  if(person.data){
    content = <>
      <Col md={12}>
        <h1>{person.data.name}</h1>
      </Col>
      <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title>Gender</Card.Title>
            <Card.Text className="mb-2 detail">{person.data.gender}</Card.Text>
            <Card.Title>Age</Card.Title>
            <Card.Text className="mb-2 detail">{person.data.age}</Card.Text>
            <Card.Title>Eye Color</Card.Title>
            <Card.Text className="mb-2 detail">{person.data.eye_color}</Card.Text>
            <Card.Title>Hair Color</Card.Title>
            <Card.Text className="mb-2 detail">{person.data.hair_color}</Card.Text>
            <Card.Title>Film</Card.Title>
            <CardText link={person.data.films}></CardText>
            <Card.Title>Specie</Card.Title>
            <CardText link={person.data.species}></CardText>
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

export default PersonDetails
