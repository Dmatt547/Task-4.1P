import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from 'C:/Users/danie/OneDrive/Documents/UNI/SIT313 - Front End Dev/my-new-app/src/Components/Header';
import FeaturedArticles from 'C:/Users/danie/OneDrive/Documents/UNI/SIT313 - Front End Dev/my-new-app/src/Components/FeaturedArticles';
import FeaturedTutorials from 'C:/Users/danie/OneDrive/Documents/UNI/SIT313 - Front End Dev/my-new-app/src/Components/FeaturedTutorials';
import Footer from 'C:/Users/danie/OneDrive/Documents/UNI/SIT313 - Front End Dev/my-new-app/src/Components/Footer';
import LaregImage from 'C:/Users/danie/OneDrive/Documents/UNI/SIT313 - Front End Dev/my-new-app/src/Components/LargeImage';
import Subscribe from 'C:/Users/danie/OneDrive/Documents/UNI/SIT313 - Front End Dev/my-new-app/src/Components/Subscribe';

const App = () => (
  <Container>
    <Header />
    <LaregImage/>
    <FeaturedArticles />
    <FeaturedTutorials />
    <Subscribe />
    <Footer />
  </Container>
);

export default App;
