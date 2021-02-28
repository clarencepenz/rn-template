import React from 'react'
import {
 SafeAreaView,
 Button,
 StyleSheet,
 TouchableOpacity,
 Text,
 Animated
} from 'react-native'

import { theme } from '../../constants'

const { COLORS, FONTS, SIZES } = theme;

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text >OnBoarding 🙊</Text>
        <Button
        title="😵"
        onPress={() => navigation.navigate('NewPage')}
      />
      <TouchableOpacity
         onPress={() => navigation.navigate('NewPage')}
      >
        <Text>take an 🍎</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    color: COLORS.white,
    backgroundColor: COLORS.black
  }
})

export default  OnBoarding;
