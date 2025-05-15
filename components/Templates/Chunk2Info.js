import { StyleSheet, Image, Text, View, useWindowDimensions } from 'react-native'
import Colors from '../colors'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function infoChunk(props) {
  const { width } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    infoChunk: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: width * 0.05
    },
    infoHeader: {
      textAlign: 'center',
      fontSize: width * 0.03,
      fontFamily: 'oswaldmedium',
      color: props.textColor || Colors.secondary
    },
    infoBody: {
      fontSize: width * 0.015,
      fontFamily: 'oswaldlight',
      textAlign: 'center',
      color: props.textColor || Colors.secondary
    },
    infoImage: {
      height: width * 0.175,
      width: width * 0.175,
    }
  })

  return (
    <View style={styles.infoChunk}>
      <Text style={styles.infoHeader}>{props.infoHeader}</Text>
      <Image
        source={props.image}
        style={styles.infoImage}
      />
      <Text style={styles.infoBody}>
        {props.infoBody}
      </Text>
    </View>
  )
}