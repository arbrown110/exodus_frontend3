import React from 'react';
import EventForm from '../components/EventForm';
import EventsList from '../components/EventsList';

class Events extends React.Component {

    render() {
      return (
        <div>
          <EventForm adventure={this.props.adventure} />
          <EventsList events={this.props.adventure && this.props.adventure.events} />
        </div>
      );
    }
  };

export default Events;