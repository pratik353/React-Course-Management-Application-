import React from 'react'
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Header from "./components/common/Header";  // header contain our page navigation options
import Courses from './components/Courses';
import { Route, Routes, Navigate} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import ManageCourses from './components/ManageCourses';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    // function getPage(){
    //     const Route = window.location.pathname;
    //     if(Route === '/about') return <AboutPage/>
    //     else if(Route === '/courses') return <Courses/>
    //   return (
    //     <HomePage/>
    //   )
    // }



    return(
      <div className='container-fluid'>
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar
closeOnClick
pauseOnFocusLoss
draggable
pauseOnHover
/>
          <Header/>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/course/:slug" element={<ManageCourses />} />   {/* URL parameters */}
            <Route path="course" element={<ManageCourses />} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/about-page" element={<Navigate to="/about" replace />} />
          </Routes>
      </div>
    )
}

export default App