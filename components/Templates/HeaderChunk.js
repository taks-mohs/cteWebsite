import { StyleSheet, Text, Pressable, View, useWindowDimensions } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from '../colors'

export default function searchingToolChunk(props) {
  const { width } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: width * 0.15,
      padding: width * 0.075,
      backgroundColor: props.backgroundColor || Colors.primary,
      alignItems: 'center'
    },
    header: {
      fontSize: width * 0.05,
      color: props.textColor || Colors.secondary,
      fontFamily: 'oswaldmedium',
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.header}</Text>
    </View>
  )
}