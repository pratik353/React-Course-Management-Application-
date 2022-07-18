import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='jumbotron'>
        <h1>Pluralsight Administration</h1>
        <p>React, flux, and React Router for react ultra-responsive web apps</p>
        
        {/* Link provied us instantenius page transition */}
        <Link to='about' className='btn btn-primary'>About</Link>     
    </div>
  )
}

export default HomePage;