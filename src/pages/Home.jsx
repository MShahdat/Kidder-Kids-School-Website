import React from 'react';
import Hero from '../components/home/Hero';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Facility from '../components/facilities/Facility';
import About1 from '../components/about/About1';
import About2 from '../components/about/About2';
import Class from '../components/classes/Class';
import Teachers from '../components/techers/Teachers';
import Appointment from '../components/appointment/Appointment';
import Testimonials from '../components/testimonial/Testimonials';
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Hero></Hero>
      <Facility></Facility>
      <About1></About1>
      <About2></About2>
      <Class></Class>
      <Teachers></Teachers>
      <Appointment></Appointment>
      {/* <Testimonials></Testimonials> */}
    </div>
  );
};

export default Home;