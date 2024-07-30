// src/components/Subscribe.js
import React from 'react';
import { Container, Input, Button, Header, Segment } from 'semantic-ui-react';

const Subscribe = () => (
  <Segment style={{ padding: '2em 0em', backgroundColor: '#f7f7f7' }} textAlign='center'>
    <Container>
      <Header as='h3' style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
        SIGN UP FOR OUR DAILY INSIDER
      </Header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Input
          placeholder='Enter your email'
          style={{ width: '300px', marginRight: '10px' }}
        />
        <Button primary>Subscribe</Button>
      </div>
    </Container>
  </Segment>
);

export default Subscribe;
