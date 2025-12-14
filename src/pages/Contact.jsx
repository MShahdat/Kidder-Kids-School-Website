import React from 'react';
import HeroCard from '../components/HeroCard';
import Contac from '../components/contact/Contact';
import Nav from '../components/Nav';
const Contact = () => {
  const url = 'https://images.unsplash.com/photo-1542000551557-3fd0ad0eb15f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <Nav></Nav>
      <HeroCard url={url} page={'Contact Us'}></HeroCard>
      <Contac></Contac>
    </div>
  );
};

export default Contact;