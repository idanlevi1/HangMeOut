import React from 'react';
import { Animated, Easing, Image, Text } from 'react-native';
import { createAnimation, createInterpolate } from '../../utils/Animation';
import GStyle from '../../utils/GlobalStyles';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { observer, inject } from 'mobx-react/native';
import Color from "color";

@inject('UserStore')
@observer
export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.1),
      yValueTitle: new Animated.Value(0),
      xValueSubtitle: new Animated.Value(0),
      spinAnim: new Animated.Value(0.65),
    };
    this.playAnimations();
  }

  playAnimations = () => {
    Animated.parallel([
      createAnimation(this.state.opacity, 1, 1500, Easing.ease),
      createAnimation(this.state.spinAnim, 1, 1000, Easing.ease, 500, false),
      createAnimation(this.state.yValueTitle, 1, 1200, Easing.cubic, 300, false),
      createAnimation(this.state.xValueSubtitle, 1, 1000, Easing.linear, 300, false),
    ]).start();
  };

  onHydrateDone = (isHydrateDone) => {
    const { UserStore, navigation } = this.props
    console.log('[user 🍟]:', { ...UserStore.getUser })
    if (isHydrateDone) {
      setTimeout(() => {
        navigation.navigate(UserStore.isUserConnected ? 'App' : 'Auth')
      }, 3000);
    }
  }

  render() {
    this.onHydrateDone(this.props.UserStore.isHydrateDone)

    const { spinAnim, yValueTitle, xValueSubtitle } = this.state;
    const spinSubtitle = createInterpolate(
      spinAnim,
      [0, 1],
      ['540deg', '360deg']
    );
    const spinTitle = createInterpolate(spinAnim, [0, 1], ['0deg', '352deg']);
    const yTitleFall = createInterpolate(yValueTitle, [0, 1], ['-65%', '0%']);
    const xSubtitleFall = createInterpolate(
      xValueSubtitle,
      [0, 1],
      ['65%', '0%']
    );
    return (
      <LinearGradient start={{ x: 0, y: .01 }} end={{ x: .35, y: .37 }} colors={[GStyle.WHITE, GStyle.TURQUOISE]} style={styles.linearGradient}>
        <Animated.View style={[styles.container, { opacity: this.state.opacity }]} >
          {/* <Animated.View style={[{ top: yTitleFall, transform: [{ rotate: spinTitle }] }, { zIndex: 2 }]} >
            <Text style={styles.title}>Just Hang</Text>
          </Animated.View>
          <Animated.View style={[{ left: xSubtitleFall, transform: [{ rotate: spinSubtitle }] }, {  zIndex: 2 }]} >
            <Text style={[styles.subtitle]}>idan</Text>
          </Animated.View> */}
          <LottieView source={require('../../../assets/animations/pink_ball.json')} autoPlay style={{zIndex: 2, width: 200, left:24, top: -30}} />
          <LottieView source={require('../../../assets/animations/splash_logo.json')} autoPlay={true} loop={false} style={{zIndex: 3}}/>
        </Animated.View>
      </LinearGradient>
    );
  }
}
