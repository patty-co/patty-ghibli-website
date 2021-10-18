import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'

const SpecieIndex = () => {
  const [species, setSpecies] = useState([]);
  
  useEffect(() => {
    const getList = async () => {
      let response = null;

      response = await ghibliApi.getSpecieList();
      setSpecies(response)
    }
    getList();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">All Species</h1>
        </Col>
      </Row>
      <Row> 
        {
          species.map((specie, i) => (
            <Col md={4} key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{specie.name}</Card.Title>
                  <Link to={`/species/${specie.id}`}>Show details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default SpecieIndex
