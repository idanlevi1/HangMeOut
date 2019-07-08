import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import I18n from 'react-native-i18n';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeButton from "react-native-really-awesome-button";
import Share from 'react-native-share'
import Root from './src/Root';

export default class App extends Component {

  onShare = () => {
    const options = {
      title: 'Share via',
      message: 'some message',
      url: 'some share url',
      social: Share.Social.WHATSAPP
    }
    Share.open(options)
      .then((res) => { console.log(res) })
      .catch((err) => { err && console.log(err); });
  }

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
    return <Root/>
    return (
      <LinearGradient colors={['#0c669f', '#0c8f6a', '#0c6a']} style={styles.linearGradient}>
        <Text style={styles.welcome}>Welcome to {appName}!</Text>
        <Text style={styles.instructions}>systemVersion: {systemVersion}</Text>
        <Text style={styles.instructions}>deviceCountry: {deviceCountry}</Text>
        <Text style={styles.instructions}>deviceName: {deviceName}</Text>
        <Text style={styles.instructions}>carrier: {carrier}</Text>
        <Text style={styles.instructions}>{I18n.t('greeting')}</Text>
        <AwesomeButton onPress={this.onShare}>AwesomeButton - share</AwesomeButton>
      </LinearGradient>
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
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
