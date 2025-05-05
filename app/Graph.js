import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function Graph() {
  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/Graphics/computerImage.jpg')}>
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
                    Upon completion of the course, a proficient student will be able to explain what comprises the creative media industry sector, explain
                    principles of digital design and its influences, demonstrate basic knowledge of digital camera and video equipment, and create a
                    digital photo collection using design and equipment knowledge.  </Text>
                </View>
                <View style={styles.c2chunk}>
                  <Text style={styles.c2cHeader}>Digital Design 1</Text>
                  <View style={styles.imageRow}>
                    <Image
                      source={require('../assets/Graphics/adobePhoto.png')}
                      style={styles.studentImg}
                    />
                    <Image
                      source={require('../assets/Graphics/adobeIllustrator.png')}
                      style={styles.studentImg}
                    />
                  </View>
                  <Text style={styles.c2cBody}>
                    Digital Design 1 is the second course in the Digital Design program of study designed to introduce students to the digital design
                    process and the creation of basic design work and page layouts reflective of the process. Upon completion of the course, a proficient
                    student will be able to explain artistic intent and influence, summarize ADA guidance, apply design software techniques,
                    conceptualize and create photographs and illustrations of increasing complexity, and produce basic single and multipage layouts.
                    As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence
                    of mastery of course standards and readiness to advance and complete the program of study.
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
                    equipment in varying degrees of complexity to create web and 3-dimensional works. Upon completion of the course, a proficient
                    student will be able to create a basic web page layout, conceive and create 3-dimensional models, develop an animation storyboard
                    and apply the principles of animation in the creation of 3-dimensional animation, and produce a digital artwork collection to
                    showcase. As part of a student’s program of study progression, the student will maintain a digital program of study portfolio,
                    providing evidence of mastery of course standards and readiness to advance and complete the program of study.
                    Recommended pre-requisite – Successful completion of Digital Design 1 (TCD2000) and instructor’s recommendation.

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
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 75,
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

  imageRow: {
    flexDirection: 'row',

  }
})