import { ImageBackground, Text, View, StyleSheet, ScrollView, Pressable} from "react-native-web"
import TopBar from "../components/topBar"
import { Link } from "expo-router"
import Colors from "../components/colors"


export default function Health() {
    return (
        <View style={styles.background}>
             <TopBar />
             <ImageBackground style={styles.bgImg} source={require('../assets/engineer.png')}>
                 <ScrollView>
                     <View style={styles.chunk1}>
                         <Text style={styles.c1Title}>Health Services</Text>
                     </View>
                 </ScrollView>
             </ImageBackground>
        </View>
    )
}

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    bgImg: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    },
    chunk1: {
      marginTop: 500,
      marginHorizontal: 150,
      padding: 75,
      backgroundColor: Colors.primary,
      alignItems: 'center'
    },
    c1Title: {
      fontSize: 75,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium',
      marginBottom: 25
    },
    c1Button: {
      fontSize: 25,
      padding: 10,
      color: Colors.primary,
      backgroundColor: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    }})