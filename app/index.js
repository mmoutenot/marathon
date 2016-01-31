'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  StatusBarIOS,
  Text,
  TextInput,
  View
} from 'react-native';
import Beacons from 'react-native-ibeacon';

StatusBarIOS.setHidden(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#69D2E7',
  },
  welcome: {
    fontSize: 70,
    textAlign: 'center'
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    paddingHorizontal: 40
  },
  label: {
    fontFamily:'Roboto',
    color: 'white'
  },
  textInput: {
    fontFamily:'Roboto-Light',
    color: 'white',
    height: 40,
    fontSize: 28
  },
  nextText: {
    fontFamily:'Roboto',
    position: 'absolute',
    top: 20,
    right: 10,
    fontSize: 20,
    color: 'white'
  }
});

export default function native(platform) {

  class Marathon extends Component {
    constructor (props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.nextText}>Next</Text>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder='John Doe'
              placeholderTextColor={'#C8E8E3'}
              style={styles.textInput}
              autoFocus={true}
              autoCorrect={false}
              returnKeyType='done'
            />
            <Text style={[styles.label, { marginTop: 20 }]}>Email</Text>
            <TextInput
              placeholder='example@email.com'
              placeholderTextColor={'#C8E8E3'}
              style={styles.textInput}
              autoFocus={true}
              autoCorrect={false}
              keyboardType='email-address'
              autoCapitalize='none'
              returnKeyType='done'
            />
          </View>
          <View/>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('marathon', () => Marathon);
}
