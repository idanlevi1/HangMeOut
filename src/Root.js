import React from 'react';
import { AppState, I18nManager, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { AppStore, UserStore, RoutingStore } from './stores';
import { Alert, Loader } from './components';
import { observer, Provider, inject } from 'mobx-react/native';
import { create } from 'mobx-persist'
import RNRestart from 'react-native-restart';
import AppNavigator from './routes/AppNavigator';

const stores = { AppStore, UserStore, RoutingStore };
const hydrate = create({ storage: AsyncStorage });

hydrate('language', AppStore).then(async () => {
  await AppStore.getDictionary()
  // hydrate('deviceInfo', UserStore).then(() => {
  hydrate('user', UserStore).then(() => {
    hydrate('rtl', AppStore).then(() => {
      if (!AppStore.isRtl && AppStore.language == 'he') {
        console.log('RTL FORCE')
        AppStore.switchToRTL()
        RNRestart.Restart();
      }
      console.log('[Hydrate]', UserStore.getDeviceInfo)
      UserStore.hydrateDone();
      // AsyncStorage.clear();
    })
  })
  // })
})

@observer
export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // AppState.addEventListener('change', this._handleAppStateChange);
    UserStore.saveUserInfoData()
    UserStore.incEntriesNumber()
  }

  componentWillUnmount() {
    // AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = async (nextAppState) => {
    // console.log('_handleAppStateChange', nextAppState) //options: active || background || inactive 
  };

  render() {
    return (
      <Provider {...stores} >
        <React.Fragment>
          <AppNavigator ref={ref => { RoutingStore.setNavigation(ref) }} />
          <Alert onRef={(ref) => { stores.AppStore.setAlertRef(ref) }} />
          <Loader onRef={(ref) => { stores.AppStore.setLoaderRef(ref) }} />
        </React.Fragment>
      </Provider>
    )
  }
}
