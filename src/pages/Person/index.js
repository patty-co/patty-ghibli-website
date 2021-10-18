import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

import ghibliApi from '../../api/ghibliApi'

const PersonIndex = () => {
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    const getList = async () => {
      let response = null;

      response = await ghibliApi.getPeopleList();
      setPeople(response)
    }
    getList();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">All People</h1>
        </Col>
      </Row>
      <Row> 
        {
          people.map((person, i) => (
            <Col md={4} key={i}>
              <Card>
                <Card.Body>
                  <Card.Title>{person.name}</Card.Title>
                  <Link to={`/people/${person.id}`}>Show details</Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default PersonIndex

