import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'
import ListItem from '../../components/ListItem'

const FilmDetails = ({ match }) => {
  const {
    params: { filmId }
  } = match;
  
  const [film, setFilm] = useState({
    loading: false,
    data: null,
    error: false
  });

  let filmLists = {
    species: [],
    vehicles: [],
    locations: [],
    people: [],
    speciesHasItems: false,
    vehiclesHasItems: false,
    locationsHasItems: false,
    peopleHasItems: false
  }
  
  useEffect(() => {
    setFilm({
      loading: true,
      data: null,
      error: false
    })
    const getFilm = async () => {
      let response = null;

      response = await ghibliApi.getFilm(filmId);
      setFilm({
        loading: false,
        data: response,
        error: false
      })
    }
    getFilm();
  }, []);

  let content = null;
  let peopleList = null;
  let vehicleList = null;
  let locationList = null;
  let specieList = null;

  if(film.data){
    filmLists.people = film.data.people;  
    filmLists.vehicles = film.data.vehicles;  
    filmLists.locations = film.data.locations;  
    filmLists.species = film.data.species; 
    filmLists.peopleHasItems = film.data.people[0].split('/')[film.data.people[0].split('/').length - 1] !== '';
    filmLists.vehiclesHasItems = film.data.vehicles[0].split('/')[film.data.vehicles[0].split('/').length - 1] !== '';
    filmLists.locationsHasItems = film.data.locations[0].split('/')[film.data.locations[0].split('/').length - 1] !== '';
    filmLists.speciesHasItems = film.data.species[0].split('/')[film.data.species[0].split('/').length - 1] !== '';

    content = <>
      <Col md={12}>
        <h1>{film.data.title}</h1>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text className="mb-2 detail">{film.data.description}</Card.Text>
            <Card.Title>Director</Card.Title>
            <Card.Text className="mb-2 detail">{film.data.director}</Card.Text>
            <Card.Title>Producer</Card.Title>
            <Card.Text className="mb-2 detail">{film.data.producer}</Card.Text>
            <Card.Title>Release date</Card.Title>
            <Card.Text className="mb-2 detail">{film.data.release_date}</Card.Text>
            <Card.Title>Running time</Card.Title>
            <Card.Text className="mb-2 detail">{film.data.running_time}</Card.Text>
            <Card.Title>Score</Card.Title>
            <Card.Text className="mb-2 detail">{film.data.rt_score}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Carousel className="mb-2">
              <Carousel.Item>
                <img
                  className="img-fluid d-block w-100 height300"
                  src={film.data.image}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-fluid d-block w-100 height300"
                  src={film.data.movie_banner}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>

            <Card.Title>Kanji</Card.Title>
            <Card.Subtitle className="mb-2 text-muted detail">{film.data.original_title}</Card.Subtitle>
            <Card.Title>Rōmaji</Card.Title>
            <Card.Subtitle className="mb-2 text-muted detail">{film.data.original_title_romanised}</Card.Subtitle>
            <Card.Title>Rōmaji</Card.Title>
            <Card.Subtitle className="mb-2 text-muted detail">{film.data.original_title_romanised}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </>;

    if(filmLists.peopleHasItems) {
      peopleList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>People</Card.Title>
            {
              filmLists.people.map((person, i) => (
                <ListItem key={'person' + i} link={person}></ListItem>
              ))
            }
          </Card.Body>
        </Card>
      </Col>
    } 

    if(filmLists.vehiclesHasItems) {
      vehicleList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Vehicles</Card.Title>
            {
              filmLists.vehicles.map((vehicle, i) => (
                <ListItem key={'vehicle' + i} link={vehicle}></ListItem>
              ))
            } 
          </Card.Body>
        </Card>
      </Col>
    } 

    if(filmLists.locationsHasItems) {
      locationList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Locations</Card.Title>
            {
              filmLists.locations.map((location, i) => (
                <ListItem key={'location' + i} link={location}></ListItem>
              ))
            }
          </Card.Body>
        </Card>
      </Col>  
    } 

    if(filmLists.speciesHasItems) {
      specieList = <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Species</Card.Title>
            {
              filmLists.species.map((specie, i) => (
                <ListItem key={'specie' + i} link={specie}></ListItem>
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
      {vehicleList}
      {locationList}
      {specieList}
    </Row>
  </Container>
  )
}

export default FilmDetails
