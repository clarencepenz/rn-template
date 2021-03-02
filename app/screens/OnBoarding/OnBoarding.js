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
          decelerationRate={0}
          scrollEventThrottle={16}
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
                  resizeMode='center'
                  style={{
                      width: "100%",
                      height: "100%"
                  }}
                />
              </View>
              <View style={{
                position: 'absolute',
                bottom: '10%',
                right: 40,
                left: 40
               }}
              >
                <Text style={{
                    ...FONTS.h1,
                    color: COLORS.grey,
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{
                    ...FONTS.body3,
                    color: COLORS.grey,
                    textAlign: 'center',
                  }}
                >
                  {item.description}
                </Text>
              </View>
              {/* <Text style={{color: COLORS.black, textAlign: 'center', padding: SIZES.padding}}>{item.title}</Text> */}
            </View>
          ))}
      </Animated.ScrollView>
    )
  }

  
  function dots(){
    return (
      <View style={styles.dotContainer}>
        {data.map((item, index) => (
            <View
            key={index}
            style={[styles.dots, { width: 10, height: 10 }]}
          ></View>
        ))}

      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{padding: SIZES.padding}} >OnBoarding 🙊</Text> */}
      <View>
        {renderContent()}
      </View>
      <View style={styles.dotRootContainer}>
        {dots()}
      </View>



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
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '30%' : '20%',
    left: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding + 8,
  },
  dots: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2
  }

})

export default  OnBoarding;
