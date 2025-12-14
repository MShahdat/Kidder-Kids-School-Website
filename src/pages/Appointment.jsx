import React from 'react';
import HeroCard from '../components/HeroCard';
import Appointments from '../components/appointment/Appointment';
import Nav from '../components/Nav';

const Appointment = () => {
  const url = 'https://images.unsplash.com/photo-1440288736878-766bd5839edb?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div>
      <Nav></Nav>
      <HeroCard url={url} page={'Appointment'}></HeroCard>
      <Appointments></Appointments>
    </div>
  );
};

export default Appointment;