import React from 'react';
import HeroCard from '../components/HeroCard';
import About1 from '../components/about/About1';
import About2 from '../components/about/About2';
import Nav from '../components/Nav';
const About = () => {
    const url = 'https://images.unsplash.com/photo-1614113036347-9f60df80730a?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <div>
             <Nav></Nav>
              <HeroCard url = {url} page = {'About Us'}></HeroCard>  
              <About1></About1>  
              <About2></About2>
        </div>
    );
};

export default About;