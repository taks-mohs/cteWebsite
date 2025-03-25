import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function CS() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Computer Science</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Found. Comp. Sys & Tech</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Computer science concepts covered will include an exploration
                                    of computer programming in different applications such as web development, game development and robotics. This course is a recommended pre-cursor to the AP Computer Science A course.
                                    Recommended for students who are considering a major in computer science or who will want to be informed citizens in today’s technological
                                    society.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>AP Computer Science</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Students are introduced to computer science with
                                    fundamental topics that include problem solving, design strategies and methodologies, organization of data (data structures), approaches to
                                    processing data (algorithms), analysis of potential solutions, and the ethical and social implications of computing. The course emphasizes
                                    both object-oriented and imperative problem solving and design using Java language. These techniques represent proven approaches for
                                    developing solutions that can scale up from small, simple problems to large, complex problems.
                                    In May, students will be required to take the AP Computer Science A examination given by the College Board. On the basis of this
                                    examination, the student’s college will determine how much advanced placement and/or credit the student will receive. There is a required
                                    fee for the AP exam
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Programming 2: Mobile App Development</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Programming 2: Mobile Applications Development is the third course in the Programming program of study designed to inform students on
                                    the role of mobile applications technologies in society, what comprises a mobile application and the process used for designing one, as well
                                    as to prepare students for mobile applications development through the use of a programming language
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Menedevs</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Menedevs juggles between Website Development, Game Development, and Machine Learning. This year saw the club focus on Game Development, working within Game Engine, Unity.
                                    However, next year, Menedevs might switch over to Website Development.
                                    Website Development next year.
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
                                <Text style={styles.c2cHeader}>S. Takahashi</Text>
                                <Image
                                    source={require('../assets/CS/GOAT.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Both a math teacher and computer science teacher. Mr.Takashi teaches Introduction to Computer Science, AP Computer Science A, and Programming 2: Mobile Apps Development
                                    He might also teach other computer science classes.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>B. Park</Text>
                                <Image
                                    source={require('../assets/CS/Park.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Both a math teacher and computer science teacher. One of the other Introduction to Computer Science teachers
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>H. Ishikawa</Text>
                                <Image
                                    source={require('../assets/CS/Ishikawa.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Both a math teacher and computer science teacher. One of the other Introduction to Computer Science teachers.
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