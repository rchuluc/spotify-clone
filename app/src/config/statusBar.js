import {Platform, StatusBar} from 'react-native'

StatusBar.setBarStyle('light-content')
if (Platform.OS === 'android') StatusBar.setBackgroundColor('#111')
