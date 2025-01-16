
import React from 'react';
import './App.css';
import { Link} from 'react-router-dom';
function Home() {
    return(
        <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>
        </nav>
        <h1>Home</h1>
        </div>
        )
}


export default Home