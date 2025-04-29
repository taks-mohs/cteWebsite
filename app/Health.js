import { ImageBackground, Text, View, StyleSheet, ScrollView, Image } from "react-native-web"
import TopBar from "../components/topBar"
import Colors from "../components/colors"
import { VideoView, useVideoPlayer } from "expo-video"
import Footer from "../components/footer"
import { LinearGradient } from "expo-linear-gradient"


export default function Health() {
  const player = useVideoPlayer(require('../assets/videoplayback.mp4'), player => { player.play(); player.loop = true; player.muted = true; });


  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/Health.jpeg')}>
        <ScrollView>
          <View style={styles.chunk1}>
            <Text style={styles.c1Title}>Health Services</Text>
          </View>
          <View style={styles.chunk2}>
            <Text style={styles.c2title}>Related Classes</Text>
            <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
              <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                <View style={styles.break}>
                  <View style={styles.c2chunk}>
                    <Text style={styles.c2cHeader}>Foundations of Health Services</Text>
                    <Image
                      source={require('../assets/placeholder.jpg')}
                      style={styles.studentImg}
                    />
                    <Text style={styles.c2cBody}>
                      Foundations of Health Services is an <Text style={{ fontWeight: "bold" }}>introductory course</Text> designed to inform students about careers in the Health Services field, as
                      well as basic medical skills and terminology.
                    </Text>
                  </View>
                  <View style={styles.c2chunk}>
                    <Text style={styles.c2cHeader}>Class 2</Text>
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
                </View>
              </ScrollView>
            </LinearGradient>
          </View>
          <View style={styles.chunk2}>
            <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
              <View style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                <View style={styles.break}></View>
                <View style={styles.c2chunk}>
                  <Text style={styles.classesList}>{"\u2022 Human Physiology (12th gr. science)"}</Text>
                  <Text style={styles.classesList}>{"\u2022 4th year of Math (e.g. AP Calculus)"}</Text>
                  <Text style={styles.classesList}>{"\u2022 AP Biology (12th gr. science)"}</Text>
                  <Text style={styles.classesList}>{"\u2022 AP Chemistry (12th gr. science)"}</Text>
                  <Text style={styles.classesList}>{"\u2022 Psychology/Sociology (12th gr. SS)"}</Text>
                  <Text style={styles.classesList}>{"\u2022 AP Psychology (12th gr. SS)"}</Text>
                  <Text style={styles.classesList}>{"\u2022 Leadership/Transition Program"}</Text>
                </View>
              </View>
            </LinearGradient>
            <Text style={[styles.c3title, {marginLeft: 150}]}>Suggested Classes</Text>
          </View>
          <View style={styles.chunk2}>
            <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
              <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                <View style={styles.break}>
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
                </View>
              </ScrollView>
            </LinearGradient>
            <Text style={styles.c3title}>Clubs</Text>
          </View>
          <View style={styles.chunk2}>
            <Text style={styles.c2title}>Teachers</Text>
            <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.break}>
                  <View style={styles.c2chunk}>
                    <Text style={styles.c2cHeader}>L. Hashizume</Text>
                    <Image
                      source={require('../assets/l_hashizume.jpg')}
                      style={styles.studentImg}
                    />
                    <Text style={styles.c2cBody}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                      Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </LinearGradient>
          </View>
          <View style={styles.videoChunk}>
            <Text style={styles.c1Title}>Informational Video</Text>
            <VideoView style={styles.video} player={player} nativeControls />
          </View>
          <Footer />
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
  },
  videoChunk: {
    marginTop: 100,
    marginBottom: 150,
    height: 600,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    marginBottom: 50
  },
  classesList: {
    fontSize: 30,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium'
  }
})