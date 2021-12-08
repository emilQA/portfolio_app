import React from 'react';
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import Contact from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from "./pages/MovieDetail";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
      <div className="App">
          <GlobalStyle/>
          <Nav/>
          <Switch>
              <Route path="/" exact>
                  <AboutUs/>
              </Route>
              <Route path="/work" exact>
                  <OurWork/>
              </Route>
              <Route path='/work/:id'>
                  <MovieDetail/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
