'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Beacons from 'react-native-ibeacon';
import { MKTextField, MKColor } from 'react-native-material-kit';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default function native(platform) {

  class Marathon extends Component {
    constructor () {
      super();
      this.state = {
        beacons: []
      };
    }

    componentWillMount () {
      let {DeviceEventEmitter} = React;
      let region = {
        identifier: 'Marathon',
        uuid: '5194a9b3-f1ef-4cd3-9aef-c2c0e227614d'
      };
      Beacons.requestWhenInUseAuthorization();
      Beacons.startMonitoringForRegion(region);
      Beacons.startRangingBeaconsInRegion(region);
      Beacons.startUpdatingLocation();
      DeviceEventEmitter.addListener('beaconsDidRange', this._beaconDidRange.bind(this));
    }

    _beaconDidRange (data) {
      this.setState({ beacons: data.beacons });
    }

    render() {
      if (this.state.beacons.length) {
        const proximity = this.state.beacons[0].proximity;
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              {proximity}
            </Text>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              No beacon in range!
            </Text>
          </View>
        );
      }
    }
  }

  AppRegistry.registerComponent('marathon', () => Marathon);
}
