import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'

const FilmIndex = () => {

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
        <Col md={12}>
          <h1 class="text-center">All Films</h1>
        </Col>
      </Row>
      <Row> 
        {
          films.map((film, i) => (
            <Col md={4} key={i}>
              <Card>
                <Card.Body>
                  <Card.Img className="mb-2" src={film.image} />
                  <Card.Title>{film.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{film.original_title}</Card.Subtitle>
                  <Link to={`/film/${film.id}`}>Show details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default FilmIndex
