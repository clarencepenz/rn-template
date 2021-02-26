import React from 'react'
import {
 SafeAreaView,
 Button,
 Text,
} from 'react-native'

const OnBoarding = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', color: '#000'}}>
        <Text >OnBoarding 🙊</Text>
        <Button
        title="😵"
        onPress={() => navigation.navigate('NewPage')}
      />
    </SafeAreaView>
  )
}

export default  OnBoarding;
