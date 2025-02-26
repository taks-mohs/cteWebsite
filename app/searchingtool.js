import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import Survey from '../components/survey'

export default function deptpage() {
  return (
    <View>
      <TopBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.kFonts}>Find Your Pathways</Text>
          <Survey />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginHorizontal: 300,
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primary,
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
  }
})