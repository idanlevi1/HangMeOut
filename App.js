/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import I18n from 'react-native-i18n';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const systemVersion = DeviceInfo.getSystemVersion();
    const appName = DeviceInfo.getApplicationName()
    const deviceCountry = DeviceInfo.getDeviceCountry(); 
    const deviceName = DeviceInfo.getDeviceName();
    const carrier = DeviceInfo.getCarrier() || '-';
    I18n.translations = {
      en: {
        greeting: 'Hi!',
      },
      fr: {
        greeting: 'Bonjour!',
      },
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to {appName}!</Text>
        <Text style={styles.instructions}>systemVersion: {systemVersion}</Text>
        <Text style={styles.instructions}>deviceCountry: {deviceCountry}</Text>
        <Text style={styles.instructions}>deviceName: {deviceName}</Text>
        <Text style={styles.instructions}>carrier: {carrier}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{I18n.t('greeting')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#528340',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
