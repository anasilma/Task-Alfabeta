import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import * as datas from './DataMaps.json'
import MapMarker from './MapsMarker.js';
import AppHeader from '../AppHome/AppHeader.js';

export default class MapLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [datas]
    };
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const LATITUDE_DELTA = 0.0004;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
    return (
      <View >
        <AppHeader title={'Map Locations'} />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: -77.1234,
              longitude: 38.8951,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}>

            <MapMarker />

          </MapView>
        </View>
        <Text style={styles.text}>Read JSON, dan tampilkan halaman Maps dengan lokasi-lokasi yang
sudah terinput</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '70%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15
  }
});