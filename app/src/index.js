/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {Provider} from 'react-redux'
import store from '@store'
import {setNavigator} from '@services'

import Routes from './routes'

const App = () => {
  return (
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  )
}

export default App
