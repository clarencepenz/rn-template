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

  const [ completed, setCompleted ] = React.useState(false)

  const scrollX = new Animated.Value(0)

  React.useEffect(() => {
      scrollX.addListener(({ value }) => {
        if(Math.floor(value / SIZES.width) === data.length - 1) {
          setCompleted(true)
        }
      })

      return () => scrollX.removeListener();
  }, [])

  function renderContent() {
    return(
      <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          decelerationRate={0}
          scrollEventThrottle={13}
          snapToAlignment='center'
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: { x: scrollX } } },

          ], { useNativeDriver: false })}
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
                    ...FONTS.h2,
                    color: COLORS.grey,
                    textAlign: 'center',
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.grey,
                    textAlign: 'center',
                  }}
                >
                  {item.description}
                </Text>
              </View>

              <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.blue,
                    color: COLORS.white,
                    position: 'absolute',
                    bottom: 10,
                    left: 0,
                    width: 100,
                    justifyContent: 'center',
                    height: 50,
                    paddingLeft: 15,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30
                  }}
                  onPress={() => navigation.navigate('NewPage')}
              >
                <Text style={{ ...FONTS.h3, color: COLORS.white}}>{ completed ? "Lets's go" : "Skip"}</Text>
              </TouchableOpacity>
              {/* <Text style={{color: COLORS.black, textAlign: 'center', padding: SIZES.padding}}>{item.title}</Text> */}
            </View>
          ))}
      </Animated.ScrollView>
    )
  }

  
  function dots(){

    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View style={styles.dotContainer}>
        {data.map((item, index) => {

          const opacity  = dotPosition.interpolate({
             inputRange: [index - 1, index, index + 1],
             outputRange: [0.3, 1, 0.3],
             extrapolate: "clamp"
          })

          const dotSize  = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 10, 0],
            extrapolate: "clamp"
         })

         return (
           <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dots, { width: dotSize, height: dotSize }]}
           >

            </Animated.View>
          )
         })}

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
    height: SIZES.padding,
  },
  dots: {
    borderRadius: SIZES.radius,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius - 8
  }

})

export default  OnBoarding;
