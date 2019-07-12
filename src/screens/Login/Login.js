import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import GStyle from "../../utils/GlobalStyles";

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
        <Text>Login</Text>
        <TouchableOpacity onPress={this.onLogin}>
          <Text style={{ fontSize: 24, color: GStyle.BEIGE }}>Share</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
