import { StyleSheet, Image, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import Colors from '../colors'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import { LinearGradient } from 'expo-linear-gradient'

export default function testimonyChunk(props) {
  const { width } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    mainChunk: {
      padding: width * 0.075,
      height: width * 0.35,
      backgroundColor: props.backgroundColor || Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    title: {
      fontSize: width * 0.05,
      marginRight: width * 0.1,
      marginLeft: width * 0.04,
      color: props.textColor || Colors.secondary,
      fontFamily: 'oswaldsemibold',
      textAlign: "center"
    }
  })

  return (
    <View style={styles.mainChunk}>
      <Text style={styles.title}>{props.header}</Text>
      <LinearGradient style={{ width: width * 0.5, height: width * 0.35 }} locations={[0, 0.6, 1]} colors={[props.secondColor, props.primeColor, props.secondColor]}>
        <ScrollView style={{ height: width * 0.35 }} showsVerticalScrollIndicator={false}>
          <View style={{ margin: width * 0.02 }}></View>
          {props.info}
        </ScrollView>
      </LinearGradient>
    </View>
  )
}