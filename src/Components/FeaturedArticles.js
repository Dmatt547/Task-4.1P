import React from 'react';
import { Card, Image, Container, Header, Button } from 'semantic-ui-react';

const articles = [
  {
    image: 'https://picsum.photos/203',
    title: "Article's Name",
    description: 'e.g., React OR Vue',
    author: "Author's name",
    rating: 5
  },
  {
    image: 'https://picsum.photos/204',
    title: "Article's Name",
    description: 'e.g., NodeJS',
    author: "Author's name",
    rating: 5
  },
  {
    image: 'https://picsum.photos/205',
    title: "Article's Name",
    description: 'e.g., React Hooks',
    author: "Author's name",
    rating: 5
  }
];

const FeaturedArticles = () => (
  <Container>
    <div style={{ marginTop: '20px' }}></div>
    <Header as='h2' textAlign='center' style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#2a7d7d', marginBottom: '20px' }}>Featured Articles</Header>
    <Card.Group itemsPerRow={3}>
      {articles.map((article, index) => (
        <Card key={index}>
          <Image src={article.image} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Description>{article.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span>
              <i className="star icon"></i>
              {article.rating} {article.author}
            </span>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <div style={{ marginTop: '20px' }}></div>
    <Button fluid>See all articles</Button>
    <div style={{ marginTop: '50px' }}></div>
  </Container>
);

export default FeaturedArticles;
