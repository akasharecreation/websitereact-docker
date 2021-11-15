
import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import Pricing from './components/Pricing/Pricing';
import Services from './pages/Services/Services';

import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <GlobalStyle />
       <ScrollToTop />

      <Navbar /> 
      <Switch> 
        <Route path="/" exact component={Home} />

        <Route path="/products" exact component={Pricing} />
         <Route path="/services" exact component={Services} />
         <Route path="/footer" exact component={Footer} /> 
      </Switch>
     <Footer />
   
    </Router> 
  );





}


export default App;
