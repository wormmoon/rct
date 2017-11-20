import React from 'react';
import PlaceName from './PlaceName';
import CountryName from './CountryName';

export default class PlaceInfo extends React.Component {
  render () {
    return (
      <div className="place-info">
        {PlaceName}{CountryName}
      </div>
    );
  }
}
