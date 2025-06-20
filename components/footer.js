import { Text, View, StyleSheet, useWindowDimensions } from 'react-native'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'

export default function footer(props) {
  const { width, height } = useWindowDimensions();
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    bottom: {
      height: width * 0.01,
      backgroundColor: props.backgroundColor || Colors.primary,
      padding: width * 0.05,
    },
  })

  return (
    <View>
      <View style={styles.bottom}>
      </View>
    </View>
  )
}