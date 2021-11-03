import React from 'react';
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import Contact from './pages/ContactUs';
import OurWork from './pages/OurWork';


function App() {
  return (
      <div className="App">
          <GlobalStyle/>
          <Nav/>
          <AboutUs/>
          <Contact/>
          <OurWork/>
      </div>
  );
}

export default App;
