import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../components/Card.js'

const Home = () => {
  return (
    <Container>
        <Row>
          <Col md={4}>
            <Card 
              title="Films"
              image="films.png"
              link="/films"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="People"
              image="people.png"
              link="/people"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="Species"
              image="species.png"
              link="/species"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card 
              title="Vehicles"
              image="vehicles.png"
              link="/vehicles"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="Locations"
              image="location.png"
              link="/locations"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="Quiz"
              image="quiz.png"
              link="/"
            />
          </Col>
        </Row>
      </Container>
  )
}

export default Home
