import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchAdventures } from '../actions/AdventuresActions';
//import AdventureForm from '../components/AdventureForm';
//import AdventuresList from '../components/AdventuresList';
//import AdventureShow from '../components/AdventureShow';


class Adventures extends React.Component {

    componentDidMount() {
      this.props.fetchAdventures()
    }
  
      render() {
          return (
            <div>
              <Switch>
                <Route path='/adventures/new' component={AdvenutreForm} />
                <Route path='/adventures/:id' render={(routerProps) => <AdvenutreShow {...routerProps}adventures={this.props.adventures} />} />
                <Route path='/adventures' render={(routerProps) => <AdvenutresList {...routerProps} adventures={this.props.adventures} />} />
              </Switch>
            </div>
          );
      }
  }
  
  const mapStateToProps = state => {
    return {
      adventures: state.adventures
    }
  };
  
  export default connect(mapStateToProps, { fetchAdventures })(Adventures);