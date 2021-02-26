import React from 'react'
import {
 SafeAreaView,
 Button,
 Text,
} from 'react-native'

const NewPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', color: '#000'}}>
        <Text >Next Page 🍞</Text>
        <Button title="😘" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  )
}

export default  NewPage;
