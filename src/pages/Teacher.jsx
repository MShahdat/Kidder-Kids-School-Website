import React from 'react';
import HeroCard from '../components/HeroCard';
import Teachers from '../components/techers/Teachers';
import Nav from '../components/Nav';

const Teacher = () => {
  const url = 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <Nav></Nav>
      <HeroCard url={url} page={'Our Teachers'}></HeroCard>
      <Teachers></Teachers>
    </div>
  );
};

export default Teacher;