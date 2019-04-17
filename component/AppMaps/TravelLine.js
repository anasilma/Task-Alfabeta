import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import * as datas from "./DataMaps.json";
import MapsMarker from "./MapsMarker.js";
import { Dimensions } from "react-native";
import AppHeader from "../AppHome/AppHeader.js";

export default class TravelLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [datas]
    };
  }

  render() {
    const { height, width } = Dimensions.get("window");
    const LATITUDE_DELTA = 0.0008;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
    return (
      <View>
        <AppHeader title={"Travel Line"} />
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: -77.1234,
              longitude: 38.8951,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA
            }}
          >
            <MapsMarker />
            {this.state.coords.map((loglat, index) => (
              <Polyline
                key={index}
                coordinates={loglat.data}
                strokeColor="#000"
                strokeWidth={3}
              />
            ))}
          </MapView>
        </View>
        <Text style={styles.text}>
          Tarik garis perjalanan (Google API) dari titik tersebut
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "70%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  text: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 15
  }
});
