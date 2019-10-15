import React from 'react'
import {View, Text, StatusBar, Image} from 'react-native'
const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Image
          source={require('@assets/pudim.jpg')}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
        <Text>Saudoso pudim</Text>
      </View>
    </>
  )
}

export default Home
