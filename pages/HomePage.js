import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native'
import Colors from '../components/colors'

function HomePage() {
  return (
    <View style={styles.background}>
      <View style={styles.topBar}>
        <Text style={styles.titleStyle}>Career & Technical Education</Text>
        <Pressable>
          <Text style={styles.buttonStyle}>Home</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttonStyle}>Departments</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttonStyle}>Staff</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttonStyle}>Contact Us</Text>
        </Pressable>
        <View style={styles.searchContainer}>
          <Text style={styles.placeholder}>⌕</Text>
          <TextInput
            style={styles.searchStyle}
            placeholder='Search'
          />
        </View>
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  topBar: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    flexDirection: 'row'
  },
  titleStyle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 25,
    marginRight: 250,
    fontFamily: 'oswaldsemibold'
  },
  buttonStyle: {
    color: Colors.primary,
    fontSize: 25,
    marginRight: 25,
    fontFamily: 'oswaldmedium'
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchStyle: {
    color: Colors.primary,
    fontSize: 25,
    fontFamily: 'oswaldmedium',
    opacity: 0.5,
    marginLeft: 10
  },
  placeholder: {
    color: Colors.primary,
    fontSize: 25,
    marginLeft: 10
  }
})