import React from 'react';
import HeroCard from '../components/HeroCard';
import Class from '../components/classes/Class';
import Appointment from '../components/appointment/Appointment';
import Testimonials from '../components/testimonial/Testimonials';
import Nav from '../components/Nav';
const Classes = () => {
  const url = 'https://images.unsplash.com/photo-1588075592405-d3d4f0846961?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <Nav></Nav>
      <HeroCard url={url} page={'Classes'}></HeroCard>
      <Class></Class>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Classes;