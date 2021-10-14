import React from 'react'
import Card from './Card.js'
import { Container, Row, Col } from 'react-bootstrap';

function MainContent() {
  return (
      <Container>
        <Row>
          <Col md={4}>
            <Card 
              title="Films"
              image="films.png"
              link="/"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="People"
              image="people.png"
              link="/"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="Species"
              image="species.png"
              link="/"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card 
              title="Vehicles"
              image="vehicles.png"
              link="/"
            />
          </Col>
          <Col md={4}>
            <Card 
              title="Locations"
              image="location.png"
              link="/"
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

export default MainContent
