import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Context from './context/Context.jsx';
import NotFound from './components/NotFound.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Classes from './pages/Classes.jsx';
import Facilities from './pages/Facilities.jsx';
import Teacher from './pages/Teacher.jsx';
import Appointment from './pages/Appointment.jsx';
import Event from './pages/Event.jsx';
import Blogs from './pages/Blogs.jsx';
import Testimonial from './pages/Testimonial.jsx';


const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/facilities',
        element: <Facilities></Facilities>
      },
      {
        path: '/teachers',
        element: <Teacher></Teacher>
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>
      },
      {
        path: '/events',
        element: <Event></Event>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/testimonials',
        element: <Testimonial></Testimonial>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
)
