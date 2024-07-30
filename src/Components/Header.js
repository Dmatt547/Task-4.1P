import React from 'react';
import { Menu, Input, Container, Button } from 'semantic-ui-react';

const Header = () => (
  <Menu>
    <Container style={{ display: 'flex', alignItems: 'center' }}>
      <Menu.Item header style={{ flex: '0 1 auto' }}>DEV@Deakin</Menu.Item>
      <div style={{ flex: '1 1 auto' }}>
        <Input fluid placeholder='Search...' />
      </div>
      <Menu.Menu position='right' style={{ flex: '0 1 auto', display: 'flex' }}>
        <Menu.Item>
          <Button primary name='post'>Post</Button>
        </Menu.Item>
        <Menu.Item>
          <Button primary name='login'>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default Header;
