import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function Fash() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/Fashion/IMG_8419_2.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Fashion</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Class 1</Text>
                                <Image
                                    source={require('../assets/Fashion/IMG_5437.jpeg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Class 2</Text>
                                <Image
                                    source={require('../assets/Fashion/IMG_5440.jpeg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Class 3</Text>
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
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Club Activity 1</Text>
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
                                <Text style={styles.c2cHeader}>Club Activity 2</Text>
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
                                <Text style={styles.c2cHeader}>Club Activity 3</Text>
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
                        <Text style={styles.c3title}>Clubs</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Teacher 1</Text>
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
                                <Text style={styles.c2cHeader}>Teacher 2</Text>
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
      marginTop: 200,
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
    },
    chunk2: {
      marginTop: 100,
      padding: 100,
      marginBottom: 150,
      height: 500,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    c2title: {
      fontSize: 75,
      marginRight: 250,
      color: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    },
    c3title: {
      fontSize: 75,
      marginLeft: 250,
      color: Colors.secondary,
      fontFamily: 'oswaldsemibold'
    },
    break: {
      margin: 40
    },
    c2chunk: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 75
    },
    c2cBody: {
      fontSize: 18,
      fontFamily: 'oswaldlight',
      textAlign: 'center'
    },
    studentImg: {
      height: 250,
      width: 250
    },
    c2cHeader: {
      fontSize: 40,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium'
    }
  })