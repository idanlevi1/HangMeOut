import { createSwitchNavigator } from 'react-navigation';
import MainDrawerNavigator from '../routes/MainDrawerNavigator';
import LoginStack from '../routes/stacks/LoginStack';
import { Splash } from '../screens';

export default AppNavigator = createSwitchNavigator(
  {
    AuthLoading: Splash,
    App: MainDrawerNavigator,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
