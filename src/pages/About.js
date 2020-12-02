import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Image from '../img/search.jpeg';

function About() {
  return (
    <div>
      <Hero backgroundImage={Image}>
        <h1>Randomizing Employee Directory</h1>
        <h2>A search for random users... brought to you by React.js</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size='md-12'>
            <h1>How to use...</h1>
          </Col>
        </Row>
        <Row>
          <Col size='md-12'>
            <p>Search and discover random users!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
