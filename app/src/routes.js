import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Main from '@screens/main'
import Podcasts from '@screens/podcasts'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Podcasts,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
)

export default Routes
