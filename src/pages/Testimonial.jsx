import React from 'react';
import HeroCard from '../components/HeroCard';
import Testimonials from '../components/testimonial/Testimonials';
import Nav from '../components/Nav';
const Testimonial = () => {
  const url = 'https://images.unsplash.com/photo-1655009316723-e4af5fe7afe1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <Nav></Nav>
      <HeroCard url={url} page={'Testimonials'}></HeroCard>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Testimonial;