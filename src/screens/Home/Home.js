import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style';
import { Button, HeaderParallax } from '../../components';
import GStyle from '../../utils/GlobalStyles';
import Share from 'react-native-share'
import Api from '../../server/Api'
import LottieView from 'lottie-react-native';

export default class HOME extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Home Screen 🥂');
  }

  onShare = () => {
    try {
      const options = {
        title: 'Share via',
        message: 'some message',
        url: 'some share url',
        social: Share.Social.WHATSAPP
      }
      setTimeout(() => {
        Share.open(options)
          .then((res) => { console.log(res) })
          .catch((err) => { err && console.log(err); });
      }, 100);
    } catch (e) {
      console.log('on share error', e)
      //this.props.AppStore.showAlert({ type: AlertType.REGULAR, title: i18n.t('moment'), content: e, buttonText: i18n.t('close') })
    }
  }

  render() {
    return (
      <HeaderParallax
        backgroundImage={require('../../../assets/images/Header/dashboard.jpg')}
        backgroundColor={GStyle.BLACK}
        title='Home'>
        <View style={{ backgroundColor: GStyle.BEIGE_LIGHTEN }}>
          <TouchableOpacity onPress={this.onShare}>
            <Text style={{ fontSize: 24, color: GStyle.BEIGE }}>Share</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <LottieView style={{ height: 45, margin: 5 }} source={require('../../../assets/animations/instagram_icon.json')} autoPlay loop={false} />
            <LottieView style={{ height: 45, margin: 5 }} source={require('../../../assets/animations/facebook_icon.json')} autoPlay loop={false} />
            <LottieView style={{ height: 45, margin: 5 }} source={require('../../../assets/animations/whatsapp_icon.json')} autoPlay loop={false} />
          </View>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => <Text key={e} style={{ color: GStyle.BLACK, fontSize: 24, padding: 5, margin: 10, borderBottomWidth: 1 }}>{e}</Text>)}
        </View>
      </HeaderParallax>
    );
  }
}
