import React from 'react'
import {
 SafeAreaView,
 Button,
 StyleSheet,
 TouchableOpacity,
 Text,
 Animated,
 Image,
 View
} from 'react-native'

import { theme, data } from '../../constants'

const { COLORS, FONTS, SIZES } = theme;

const OnBoarding = ({navigation}) => {
  function renderContent() {
    return(
      <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
      >
          {data.map((item, index) => (
            <View
              key={index}
              style={{width: SIZES.width}}
            >
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={item.img}
                  resizeMode='contain'
                  style={{
                      width: "100%",
                      height: "100%"
                  }}
                />
              </View>
              <Text style={{color: COLORS.black, textAlign: 'center', padding: SIZES.padding}}>{item.title}</Text>
            </View>
          ))}
      </Animated.ScrollView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{padding: SIZES.padding}} >OnBoarding 🙊</Text>
      {renderContent()}
        {/* 
        <Button
        title="😵"
        onPress={() => navigation.navigate('NewPage')}
      />
      <TouchableOpacity
         onPress={() => navigation.navigate('NewPage')}
      >
        <Text>take an 🍎</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    color: COLORS.black,
    backgroundColor: COLORS.white
  }
})

export default  OnBoarding;
