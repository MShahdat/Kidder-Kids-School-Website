import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import Top from './scroll/Top';
import ScrollToTop from './scroll/ScrollTop';
import { ToastContainer, Zoom } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Top></Top>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};

export default App;