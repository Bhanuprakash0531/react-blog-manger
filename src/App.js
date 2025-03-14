/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/////////////////////////////////////////////////////////////

import React from 'react';
import './App.css'

function App(){
  return(
    <div className="App">
      <header className='App'>
        <p>Hello, I'm leaving React!</p>
        <p>Hello, I'm learning React!</p>
        <h2>My Journey with React</h2>
      </header>
    </div>
  );
}
export default App;

///////////////////////////////////////////////////////

import React from "react";
import Header from "./components/Header";




function App(){
  return(
    <div className="App">
      <Header />
        {/* Other future components will go here*'/}
    </div>
  )
}
export default App;

////////////////////////////////


import React from "react";
import BlogBody from "./components/blogbody";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App(){
  return(
    <div class="App">
      <Header></Header>
    <BlogBody></BlogBody>
    <Footer></Footer>
    </div>
  );
}
export default App;
*/
////////////////////////////////

import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogBody from "./components/blogbody";
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import BlogPosts from './components/BlogPosts';
import FetchDemo from "./components/FetchDemo";
import FetchDemoAsync from "./components/FetchDemoAsync";

function App(){
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<BlogBody/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/blog-posts" element={<BlogPosts/>}/>
      <Route path="/fetch-demo" element={<FetchDemo/>}/>
      <Route path="/fetchAsync-demo" element={<FetchDemoAsync/>} />
      {/*Additionals routes like /about or /contact will be added later */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;