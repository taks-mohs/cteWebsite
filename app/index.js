import { StyleSheet, Image, Text, Pressable, View, ImageBackground, ScrollView, useWindowDimensions } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import { Link } from 'expo-router'
import Footer from '../components/footer'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'

export default function HomePage() {
  const { width, height } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    bgImg: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    },
    searchContainer: {
      borderWidth: 1,
      borderColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    chunk1: {
      marginTop: width * 0.25,
      marginHorizontal: width * 0.1,
      padding: width * 0.05,
      backgroundColor: Colors.primary,
      alignItems: 'center'
    },
    c1Title: {
      fontSize: width * 0.05,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium',
      marginBottom: width * 0.02
    },
    c1Button: {
      fontSize: width * 0.025,
      padding: width * 0.01,
      color: Colors.primary,
      backgroundColor: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    },
    chunk2: {
      marginTop: width * 0.05,
      padding: width * 0.075,
      marginBottom: width * 0.1,
      height: width * 0.35,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    c2title: {
      fontSize: width * 0.05,
      marginRight: width * 0.1,
      color: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    },
    c2chunk: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: width * 0.05
    },
    c2cHeader: {
      fontSize: width * 0.03,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium'
    },
    c2cBody: {
      fontSize: width * 0.015,
      fontFamily: 'oswaldlight',
      textAlign: 'center'
    },
    studentImg: {
      height: width * 0.175,
      width: width * 0.175,
    }
  })

  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/engineer.png')}>
        <ScrollView>
          <View style={styles.chunk1}>
            <Text style={styles.c1Title}>Find Your Pathway</Text>
            <Link href={'/searchingtool'}>
              <Pressable>
                <Text style={styles.c1Button}>Searching Tool</Text>
              </Pressable>
            </Link>
          </View>

          <View style={styles.chunk2}>
            <Text style={styles.c2title}>Testimonies</Text>
            <ScrollView style={{ height: width * 0.35 }} showsVerticalScrollIndicator={false}>
              <View style={{ margin: width * 0.02 }}></View>
              <View style={styles.c2chunk}>
                <Text style={styles.c2cHeader}>Student Name</Text>
                <Image
                  source={require('../assets/placeholder.jpg')}
                  style={styles.studentImg}
                />
                <Text style={styles.c2cBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                  Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
              </View>

              <View style={styles.c2chunk}>
                <Text style={styles.c2cHeader}>Student Name</Text>
                <Image
                  source={require('../assets/placeholder.jpg')}
                  style={styles.studentImg}
                />
                <Text style={styles.c2cBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                  Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
              </View>

              <View style={styles.c2chunk}>
                <Text style={styles.c2cHeader}>Student Name</Text>
                <Image
                  source={require('../assets/placeholder.jpg')}
                  style={styles.studentImg}
                />
                <Text style={styles.c2cBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                  Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
              </View>

              <View style={styles.c2chunk}>
                <Text style={styles.c2cHeader}>Student Name</Text>
                <Image
                  source={require('../assets/placeholder.jpg')}
                  style={styles.studentImg}
                />
                <Text style={styles.c2cBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                  Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
              </View>

              <View style={styles.c2chunk}>
                <Text style={styles.c2cHeader}>Student Name</Text>
                <Image
                  source={require('../assets/placeholder.jpg')}
                  style={styles.studentImg}
                />
                <Text style={styles.c2cBody}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                  Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}