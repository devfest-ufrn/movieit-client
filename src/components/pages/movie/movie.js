import React, { Component } from 'react';

export default class Movie extends Component {
  render() {
    return (
      <h1>Movie #{ this.props.match.params.id }</h1>
    );
  }
}
