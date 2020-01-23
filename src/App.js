import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {


  return (
    <Router>
      <div className="body">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/catalog" component={Catalog} />
          <Route render={() => <h2>Page Not found</h2>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
