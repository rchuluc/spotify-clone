import React from 'react'
import {View, Text, StatusBar, Image} from 'react-native'
const Podcasts = () => {
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
        <Text>Podcasts</Text>
      </View>
    </>
  )
}

export default Podcasts
