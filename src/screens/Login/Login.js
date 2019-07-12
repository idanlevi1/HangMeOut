import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import GStyle from "../../utils/GlobalStyles";
import AwesomeButton from "react-native-really-awesome-button";
import LinearGradient from 'react-native-linear-gradient';

@inject('UserStore')
@observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogin = () => {
    this.props.UserStore.setUser('0545560542', 'idan@gmail.com', 'UJN13NI124369dsaADS')
    this.props.navigation.navigate('App')
  }

  render() {
    console.log('Login Screen 🍔');
    return (
      <View style={{ flex: 1, backgroundColor: '#273', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login screen</Text>
        <TouchableOpacity onPress={this.onLogin}>
          <Text  style={{ fontSize: 24, color: GStyle.BEIGE }}>sign in example</Text>
        </TouchableOpacity>
        <AwesomeButton onPress={this.onLogin}>
          <LinearGradient start={{ x: 0, y: .1 }} end={{ x: 1, y: .9 }} colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]} style={{ height: "100%", width: 120, justifyContent:'center', alignItems:'center' }} >
            <Text style={{color: GStyle.WHITE, fontSize: GStyle.L}}>Instagram</Text>
          </LinearGradient>
        </AwesomeButton>
      </View>
    );
  }
}
