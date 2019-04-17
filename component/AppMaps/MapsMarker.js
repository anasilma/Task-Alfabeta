import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps'
import * as datas from './DataMaps.json'


export default class MapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: datas.data
    };
  }

  render() {
    return (
      <View>
        {this.state.coords.map((loglat, index) =>
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: loglat.latitude,
              longitude: loglat.longitude,
            }}
            title={loglat.longitude.toString()}
            description={loglat.latitude.toString()}
          />
        )}
      </View>

    );
  }
}
