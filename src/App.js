import './App.css';
import Main from './components/Main'
//import { connect } from 'react-redux'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import AdventureContainer from './containers/AdventureContainer'
import Adventure from './components/Adventure'
import About from './components/About'
import Home from  './components/Home'
import Links from './components/Links'
import Contacts from './components/Contacts'

class App extends React.Component {



  render() {


    return (
      <Router>
        <div className="App">
          <Main />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/adventure/:id'component={Adventure} /> 
            <Route exact path='/adventures' component={AdventureContainer} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contats' component={Contacts} />
            <Route exact path='/Links' component={Links} />
                    
          </Switch>
         </div> 
              

      </Router>

    );
  }
}




export default App;
