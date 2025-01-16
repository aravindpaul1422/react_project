import React from 'react';
import './App.css';
// import MyUsestate from './Usestate';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  // const movie=[{'id':1,'name':"Gajini"},
  //   { 'id': 2, 'name': "PK" },
  //   { 'id': 3, 'name': "Bahubali" },
  //   { 'id': 4, 'name': "KGF" },
  //   { 'id': 5, 'name': "kanguva" }

  // ]
  // const newlist=movie.map((data, index)=>{
  //   return <li key={index}>{data.name}</li>
  // })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    {/* {newlist} */}
      {/* <MyUsestate /> */}
    </div>
  );
}


// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

export default App;
