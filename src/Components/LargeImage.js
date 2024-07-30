// src/components/LargeImage.js
import React from 'react';
import { Image } from 'semantic-ui-react';

const LargeImage = () => (
  <div style={{ width: '100%', height: '60vh', overflow: 'hidden' }}>
    <Image src='https://picsum.photos/1920/1080' fluid style={{ width: '100%', height: 'auto' }} />
  </div>
);

export default LargeImage;
