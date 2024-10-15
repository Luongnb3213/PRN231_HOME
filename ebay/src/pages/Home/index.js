import React from 'react';
import Slideshow from './Slideshow';
import CollectionList from './CollectionList';

const Home = () => {
  return (
    <div className='mt-4'>
      <Slideshow />
      <CollectionList />
    </div>
  );
};

export default Home;
