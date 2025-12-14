import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import Top from './scroll/Top';
import ScrollToTop from './scroll/ScrollTop';

const App = () => {
  return (
    <div>
      <Top></Top>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default App;