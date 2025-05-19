import { Text, View, StyleSheet, ImageBackground, Pressable, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { Link } from 'expo-router'

export default function Graph() {
  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/Graphics/Graphics background.png')}>
        <ScrollView>
          <View style={styles.chunk1}>
            <Text style={styles.c1Title}>Graphics</Text>
          </View>
          <View style={styles.chunk2}>
            <Text style={styles.c2title}>Related Classes</Text>
            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: '#ededed' }}>
                <View style={styles.break}></View>
                <View style={styles.c2chunk}>
                  <Text style={styles.c2cHeader}>Foundations of Creative Media</Text>
                  <Image
                    source={require('../assets/Graphics/creativeMedia.jpg')}
                    style={styles.studentImg}
                  />
                  <Text style={styles.c2cBody}>
                    Foundations of Creative Media is an introductory course designed to inform students about careers in creative media, including
                    digital design and digital film production. This Level 1 course serves as the foundation course for Digital Design program of study.
                  </Text>
                </View>
                <View style={styles.c2chunk}>
                  <Text style={styles.c2cHeader}>Digital Design 1</Text>
                  <View style={styles.imageRow}>
                    <Image
                      source={require('../assets/Graphics/adobePhoto.png')}
                      style={{ height: 200, width: 200, }}
                    />
                    <Image
                      source={require('../assets/Graphics/adobeIllustrator.png')}
                      style={{ height: 200, width: 200, }}
                    />
                  </View>
                  <Text style={styles.c2cBody}>
                    Digital Design 1 is the second course in the Digital Design program of study designed to introduce students to the digital design
                    process and the creation of basic design work and page layouts reflective of the process.
                    Recommended pre-requisite – Successful completion of Foundations of Creative Media.
                  </Text>
                </View>
                <View style={styles.c2chunk}>
                  <Text style={styles.c2cHeader}>Digital Design 2</Text>
                  <Image
                    source={require('../assets/placeholder.jpg')}
                    style={styles.studentImg}
                  />
                  <Text style={styles.c2cBody}>
                    Digital Design 2 is the third course in the Digital Design program of study designed to prepare students for advanced design work
                    in the field of digital design. Students will utilize various design software (development and editing) programs and camera/lighting
                    equipment in varying degrees of complexity to create web and 3-dimensional works.
                    Recommended pre-requisite – Successful completion of Digital Design 1 and instructor’s recommendation.
                  </Text>
                </View>
                <View>
                  <Text style={styles.c2cBody}>
                    Refer to the Moanalua High School Course Catalog:
                    Page 28 (The Icon Below is Pressable)
                  </Text>
                  <Text>
                    
                      <Link href={'https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=28'}>
                        <View style={{paddingLeft: 200}}>
                        <Pressable>
                          <Image
                            source={require('../assets/blueLogo.png')}
                            style={styles.studentImg}
                          />
                        </Pressable>
                        </View>
                      </Link>
                  
                  </Text>
                </View>
              </View>

            </ScrollView>
          </View>
          <View style={styles.chunk2}>
            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: '#ededed' }}>
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
              </View>
            </ScrollView>
            <Text style={styles.c3title}>Assessments</Text>
          </View>

          <View style={styles.chunk2}>
            <Text style={styles.c2title}>Teachers</Text>
            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
              <View style={{ backgroundColor: '#ededed' }}>
                <View style={styles.break}></View>
                <View style={styles.c2chunk}>
                  <Text style={styles.c2cHeader}>Sean Nishimura</Text>
                  <Image
                    source={require('../assets/Graphics/nishimuraIMG.jpg')}
                    style={styles.studentImg}
                  />
                  <Text style={styles.c2cBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  </Text>
                </View>
                <View style={styles.c2chunk}>
                  <Text style={styles.c2cHeader}>Na'a LeRoy Makekau</Text>
                  <Image
                    source={require('../assets/Fashion/makekau_pic.jpg')}
                    style={styles.studentImg}
                  />
                  <Text style={styles.c2cBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                  </Text>
                </View>
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
    alignItems: 'center',
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
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 75,
  },
  c2cBody: {
    fontSize: 18,
    fontFamily: 'oswaldlight',
    textAlign: 'center',
    paddingTop: 25,
  },
  studentImg: {
    height: 250,
    width: 250,
  },
  c2cHeader: {
    fontSize: 40,
    color: Colors.secondary,
    fontFamily: 'oswaldmedium'
  },

  imageRow: {
    flexDirection: 'row',
  }
})