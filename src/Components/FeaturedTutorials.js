import React from 'react';
import { Card, Image, Container, Header, Button } from 'semantic-ui-react';

const tutorials = [
  {
    image: 'https://picsum.photos/200',
    title: "Tutorial's Name",
    description: 'e.g., JS6',
    author: 'username',
    rating: 5
  },
  {
    image: 'https://picsum.photos/201',
    title: "Tutorial's Name",
    description: 'e.g., React Router',
    author: 'username',
    rating: 5
  },
  {
    image: 'https://picsum.photos/202',
    title: "Tutorial's Name",
    description: 'e.g., Express',
    author: 'username',
    rating: 4.9
  }
];

const FeaturedTutorials = () => (
  <Container>
    <Header as='h2' textAlign='center' style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#2a7d7d', marginBottom: '20px' }}>Featured Tutorials</Header>
    <Card.Group itemsPerRow={3}>
      {tutorials.map((tutorial, index) => (
        <Card key={index}>
          <Image src={tutorial.image} />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Description>{tutorial.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>
              <i className="star icon"></i>
              {tutorial.rating} {tutorial.author}
            </span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <div style={{ marginTop: '20px' }}></div>
    <Button fluid>See all tutorials</Button>
    <div style={{ marginTop: '50px' }}></div>
  </Container>
);

export default FeaturedTutorials;
