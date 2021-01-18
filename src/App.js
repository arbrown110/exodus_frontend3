import './App.css';
import Main from './components/Main'
//import { connect } from 'react-redux'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//import AdventureContainer from './containers/AdventureContainer'
//import Adventures from './components/Adventures'
//import Events from './components/Events'
import About from './components/About'
import Home from  './components/Home'
import Links from './components/Links'
import Contacts from './components/Contacts'
import Adventures from './Containers/Adventures'
class App extends React.Component {



  render() {


    return (
      <Router>
        <div className="App">
          <Main />
  
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contacts' component={Contacts} />
            <Route exact path='/Links' component={Links} />
            <Adventures />
                    
        
         </div> 
              

      </Router>

    );
  }
}




export default App;
