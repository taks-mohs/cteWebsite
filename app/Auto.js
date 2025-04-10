import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function Auto() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/autoshop.png')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Automotive</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Foundations of Auto Maintenance and Light Repair (9, 10, 11, 12)</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    For all grades 9-12, this course is designed to provide students with the knowledge and skills necessary to perform basic automotive maintenance and light repair tasks. Students will learn about the various systems of a vehicle, including the engine, transmission, brakes, and electrical systems. The course will also cover safety procedures, tools and equipment used in the automotive industry, and basic troubleshooting techniques.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Auto Maintenance and Light Repair 1 (10, 11, 12)</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    For grades 10-12, this course builds on the knowledge and skills learned in Foundations of Auto Maintenance and Light Repair. Students will gain hands-on experience in performing more advanced automotive maintenance and repair tasks, including engine diagnostics, brake systems, and electrical systems. The course will also cover industry standards and practices, as well as customer service skills.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Auto Maintenance and Light Repair 2 (11, 12)</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    For grades 11-12, this course is a continuation of Auto Maintenance and Light Repair 1. Students will further develop their skills in automotive maintenance and repair, with a focus on advanced diagnostics and troubleshooting techniques. The course will also cover industry certifications and career opportunities in the automotive field.
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
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Mr. Andersson</Text>
                                <Image
                                    source={require('../assets/andersson.jpg')}
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