import React from 'react';
import Icon from './Icon';
import PlaceInfo from './PlaceInfo';

export default class Layout extends React.Component {
  render () {
    return (
      <div className="container">
        {PlaceInfo}
      </div>
    );
  }
}
