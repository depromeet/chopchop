import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 37.56, lng: 126.97},
    zoom: 13
  };

  render() {
    return (
        <div style={{height: '30em'}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyBAcyQkKzmHz7nujUwrTSdk5XSd6ME_B2M"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={37.5}
              lng={126.9}
              text={'테스트위치'}
            />
          </GoogleMapReact>
        </div>
    );
  }
}

export default GoogleMap;
