import React from 'react';
import HeroCard from '../components/HeroCard';
import Facility from '../components/facilities/Facility';
import Nav from '../components/Nav';
const Facilities = () => {
  const url = 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?q=80&w=1197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <Nav></Nav>
      <HeroCard url={url} page={'Our Facility'}></HeroCard>
      <Facility></Facility>
    </div>
  );
};

export default Facilities;