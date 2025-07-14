// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import Name from './name.js';
import Price from './price.js';
import Description from './description.js';
import Image from './image.js';
import './App.css';

function App() {
  const firstName = "Chinonso";

  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: '22rem', borderRadius: '15px', overflow: 'hidden' }}>
        <Image />
        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h3>Hello, {firstName ? firstName : "there!"}</h3>
        {firstName && (
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            style={{ borderRadius: '50%', marginTop: '10px' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
