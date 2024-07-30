import React from 'react';
import { Container, Grid, Header, List, Segment, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#2a7d7d', fontSize: '1.2em' }}>
    <Container textAlign='center'>
      <Grid divided inverted stackable centered>
        <Grid.Row centered>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Explore' />
            <List link inverted>
              <List.Item as='a'>Home</List.Item>
              <List.Item as='a'>Questions</List.Item>
              <List.Item as='a'>Articles</List.Item>
              <List.Item as='a'>Tutorials</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as='h4' content='Support' />
            <List link inverted>
              <List.Item as='a'>FAQs</List.Item>
              <List.Item as='a'>Help</List.Item>
              <List.Item as='a'>Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h4' inverted>
              Stay connected
            </Header>
            <List horizontal link inverted>
              <List.Item as='a' href='https://www.facebook.com'>
                <Icon name='facebook' size='large' />
              </List.Item>
              <List.Item as='a' href='https://www.twitter.com'>
                <Icon name='twitter' size='large' />
              </List.Item>
              <List.Item as='a' href='https://www.linkedin.com'>
                <Icon name='linkedin' size='large' />
              </List.Item>
              <List.Item as='a' href='https://www.instagram.com'>
                <Icon name='instagram' size='large' />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign='center'>
            <p>DEV@Deakin 2022</p>
            <List horizontal link inverted>
              <List.Item as='a'>Privacy Policy</List.Item>
              <List.Item as='a'>Terms</List.Item>
              <List.Item as='a'>Code of Conduct</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
