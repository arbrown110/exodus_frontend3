import './App.css';
import Main from './components/Main'
//import { connect } from 'react-redux'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import AdventureContainer from './containers/AdventureContainer'
//import Adventure from './components/Adventure'
import Events from './components/Events'
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
            <Route exact path='/new'component={AdventureForm} /> 
            <Route path='/adventures' render={(routerProps) => <Adventures {...routerProps} adventures={this.props.adventures} />} />
            <Route path='/dadventures/:id' render={(routerProps) => <AdventureShow {...routerProps} adventures={this.props.adventures} />} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contacts' component={Contacts} />
            <Route exact path='/Links' component={Links} />
                    
          </Switch>
         </div> 
              

      </Router>

    );
  }
}




export default App;
