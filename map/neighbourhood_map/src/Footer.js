import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import * as Helper from './Helper';

class Footer extends Component {

  static propTypes = {
    restos: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
    updateRestaurants: PropTypes.func.isRequired,
    selection: PropTypes.array.isRequired,
    markers: PropTypes.array.isRequired
  };

  handleChange = (event) => {
    this.props.updateRestaurants(this.props.restos, event.target.value)
  }

  handleClick = (event) => {
    let m = this.props.markers.find(marker => marker.id === event.target.id);
    new window.google.maps.event.trigger( m, 'click' );
  }

  render (){
      return (
      <div id="footer">
        <h2>Listings</h2>
        <select id="cuisines-select" name="cuisines" aria-label="selection of cuisines" onChange={this.handleChange}>
            <option key='empty' value='nothing'>Nothing selected</option>
            <option key='all' value='all'>All Restaurants</option>
            {this.props.results.map(cuisine => <option key={cuisine.id} value={cuisine.id}>{cuisine.name}</option>)}
        </select>
        <div id='restaurants'>
          {this.props.selection && this.props.selection.map(venue => <a href="#" value= {venue.id} key={venue.id} id={venue.id} onClick={this.handleClick}>{venue.name}</a>)}
        </div>
      </div>
  )}
}


export default Footer
