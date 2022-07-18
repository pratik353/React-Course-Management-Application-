import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
    <h1>Page Not Found</h1>
    <p>
        <Link to='/'>Back to Home</Link>
    </p>
    </>
  )
}

export default NotFoundPage;