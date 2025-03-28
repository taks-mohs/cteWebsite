import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { VideoView, useVideoPlayer } from "expo-video";

export default function B_C()
{
    const player = useVideoPlayer(require('../assets/videoplayback.mp4'), player => { player.play() });

    return(
        <View style={styles.background}>
                    <TopBar />
                    <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
                        <ScrollView>
                            <View style={styles.chunk1}>
                                <Text style={styles.c1Title}>Building & Construction</Text>
                            </View>
                            <View style={styles.chunk2}>
                                <Text style={styles.c2title}>Related Classes</Text>
                                <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                    <View style={styles.break}></View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Architecture and Engineering</Text>
                                        <Image
                                            source={require('../assets/architect and engineering logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Architecture and Engineering focuses on the design and planning of buildings, integrating both artistic and technical aspects. 
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Business Management</Text>
                                        <Image
                                            source={require('../assets/business logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Business Management covers the principles of managing a business, including finance, marketing, and operations.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Cultural Arts</Text>
                                        <Image
                                            source={require('../assets/cultural arts logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Cultural Arts explores the intersection of culture and art, focusing on various artistic expressions and their cultural significance. 
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Health Services Pathway</Text>
                                        <Image
                                            source={require('../assets/health services logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Health Services Pathway provides students with knowledge and skills in healthcare, preparing them for careers in the medical field.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Hospitality</Text>
                                        <Image
                                            source={require('../assets/hospitality logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Hospitality focuses on the service industry, including hotel management, event planning, and customer service.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Transportation Services</Text>
                                        <Image
                                            source={require('../assets/transportation logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Transportation Services covers the logistics and management of transportation systems, including vehicles and infrastructure.
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
                                        <Text style={styles.c2cHeader}>J. Murray</Text>
                                        <Image
                                            source={require('../assets/murray.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches Building & Construction. 
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
                            <View style={styles.videoChunk}>
                                        <Text style={styles.c1Title}>Informational Video</Text>
                                        <VideoView player={player} nativeControls />
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
      fontSize: 60,
      color: Colors.secondary,
      fontFamily: 'oswaldmedium',
      marginBottom: 25
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
    },
    videoChunk: {
        marginTop: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
      },
  })