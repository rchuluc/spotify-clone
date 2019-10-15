import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Home from '@screens/home'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
  }),
)

export default Routes
