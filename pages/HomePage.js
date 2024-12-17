import { StyleSheet, Text, Button, View } from 'react-native'
import Colors from '../components/colors'

function HomePage() {
  return (
    <View style={styles.background}>
      <View style={styles.topBar}>
        <Text style={styles.titleStyle}>Career & Technical Education</Text>
        <Button
        title='button'
        />
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
    alignItems: 'baseline',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    //flexDirection: 'row'
  },
  titleStyle: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 25
  },
  buttonStyle: {

  }
})