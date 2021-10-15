import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../api/ghibliApi'
import TextCard from '../components/TextCard'

const Film = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;

      response = await ghibliApi.getFilmList();
      setFilms(response)
    }
    getList();
  }, []);

  return (
    <Container>
      <Row> 
        {
          films.map((film, i) => (
            <Col md={6} key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{film.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{film.original_title}</Card.Subtitle>
                  <Card.Link href={`films/${film.id}`}>Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Film
