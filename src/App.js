import React from 'react';
import './bootstrap/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import {Container, Row, Col } from 'react-bootstrap'
import Home from './components/home/Home'
import NoMatch from './components/nomatch/NoMatch'
import Layout from './components/layout/Layout'
import NavigationBar from './components/navigationbar/NavigationBar'
import cardLinks from './components/cardlinks/CardLinks'
// import LeftMenu from './components/leftmenu/LeftMenu'
import './App.css'
import Services from './components/Services/Services'
import ResponsiveFooter from './components/footer/Responsivefooter'
import ScrollToTop from './components/scrollToTop/scrollToTop'


function App() {
  return (
    <React.Fragment>
    <Router history={history} basename={process.env.PUBLIC_URL}>  
    <ScrollToTop>
    <Layout>
    <NavigationBar/>
    
      <Switch>
        <Route exact path="/" component={Home} />
       <Route path="/services" component={Services} />
         
        <Route component={NoMatch} />
      </Switch>
      </Layout>
      </ScrollToTop>
    </Router>
    <ResponsiveFooter/>
    </React.Fragment>



  );
}

export default App;
