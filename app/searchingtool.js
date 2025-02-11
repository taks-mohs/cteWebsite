import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import Survey from '../components/survey'

export default function deptpage() {
  return (
    <View>
      <TopBar />
      <Link href={'/'}>
        <Pressable>
          <Text style={styles.c1Button}>Go Home</Text>
        </Pressable>
      </Link>
      <View style={styles.container}>
        
        <Text style={styles.kFonts}>Find Your Pathways</Text>
        
        <Survey />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    marginTop: 0,
    marginHorizontal: 100,
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
  },
  kFonts: {
    fontFamily: 'oswaldsemibold',
    fontSize: 10,
    alignSelf: 'center',
  },
  c1Button: {
    color: 'blue',
  }
})