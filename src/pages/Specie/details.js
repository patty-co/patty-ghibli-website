import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'
import ListItem from '../../components/ListItem'

const SpecieDetails = ({ match }) => {
  const {
    params: { specieId }
  } = match;
  
  const [specie, setSpecie] = useState({
    loading: false,
    data: null,
    error: false
  });

  let specieLists = {
    people: [],
    films: [],
    peopleHasItems: false,
    filmsHasItems: false
  }
  
  useEffect(() => {
    setSpecie({
      loading: true,
      data: null,
      error: false
    })
    const getSpecie = async () => {
      let response = null;

      response = await ghibliApi.getSpecie(specieId);
      setSpecie({
        loading: false,
        data: response,
        error: false
      })
    }
    getSpecie();
  }, []);

  let content = null;
  let peopleList = null;
  let filmList = null;

  if(specie.data){
    specieLists.people = specie.data.people;  
    specieLists.films = specie.data.films; 
    specieLists.peopleHasItems = specie.data.people[0].split('/')[specie.data.people[0].split('/').length - 1] !== '';
    specieLists.filmsHasItems = specie.data.films[0].split('/')[specie.data.films[0].split('/').length - 1] !== '';

    content = <>
      <Col md={12}>
        <h1>{specie.data.name}</h1>
      </Col>
      <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title>Classification</Card.Title>
            <Card.Text className="mb-2 detail">{specie.data.classification}</Card.Text>
            <Card.Title>Eye Colors</Card.Title>
            <Card.Text className="mb-2 detail">{specie.data.eye_colors}</Card.Text>
            <Card.Title>Hair Colors</Card.Title>
            <Card.Text className="mb-2 detail">{specie.data.hair_colors}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>;

    if(specieLists.peopleHasItems) {
      peopleList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>People</Card.Title>
            {
              specieLists.people.map((person, i) => (
                <ListItem key={'person' + i} link={person}></ListItem>
              ))
            }
          </Card.Body>
        </Card>
      </Col>
    } 

    if(specieLists.filmsHasItems) {
      filmList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Films</Card.Title>
            {
              specieLists.films.map((film, i) => (
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
      {peopleList}
      {filmList}
    </Row>
  </Container>
  )
}

export default SpecieDetails
