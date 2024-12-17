import { StyleSheet } from 'react-native'
import HomePage from './pages/HomePage'
import { useFonts, Oswald_600SemiBold,Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function App() {

  useFonts({
    'oswaldmedium':Oswald_500Medium,
    'oswaldsemibold':Oswald_600SemiBold
  })

  return (
    <HomePage></HomePage>
  )
}

const styles = StyleSheet.create({
  
})