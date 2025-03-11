import { View, Text, Pressable, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Link } from 'expo-router'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import Survey from '../components/survey'

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 300,
    flex: 1,
    padding: 40,
    backgroundColor: Colors.primary,
    opacity: '95%'
  },
  kFonts: {
    fontFamily: 'oswaldsemibold',
    fontSize: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  c1Button: {
    backgroundColor: 'white',
    color: 'gray',
  },
  bgImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  chunk1: {
    marginTop: 2,
    marginHorizontal: 150,
    padding: 75,
    alignItems: 'center'
  }
})

export default function deptpage() {
  return (
    <ImageBackground style={styles.bgImg} source={require('../assets/engineer.png')}>
      <ScrollView>
        <View>
          <TopBar />
          <View style={styles.chunk1} />
          <View style={styles.container}>
            <Text style={styles.kFonts}>Class Feedback</Text>
            <Survey />
          </View>
          <View style={styles.chunk1} />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}