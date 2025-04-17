import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable } from "react-native-web"
import { Link } from 'expo-router'
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function CS() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/CS/MiscImages/CSbackground.jpg')}>
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
                                    source={require('../assets/CS/MiscImages/codeOrg.webp')}
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
                                    source={require('../assets/CS/MiscImages/Java.jpg')}
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
                                    source={require('../assets/CS/MiscImages/Javascript.png')}
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
                                <Text style={styles.c2cHeader}>Menedevs (Computer Science Club)</Text>
                                <Image
                                    source={require('../assets/CS/MiscImages/GameDevelopment.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Menedevs juggles between Website Development, Game Development, and Machine Learning. This year saw the club focus on Game Development, working within Game Engine, Unity.
                                    However, next year, Menedevs might switch over to Website Development.
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Clubs</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Intro. to CS games</Text>
                                <Link href={'https://studio.code.org/projects/gamelab/2oX9EMdEsQF3vts52xHug7fY03Lv-cpPy5CWxyGDa7R/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game1.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                <Link href={'https://studio.code.org/projects/gamelab/kjZSLL7eHi-LWqZh4--K74fxlet4QjHh5wmMjPcKCow/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game2.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                <Link href={'https://studio.code.org/projects/gamelab/g4xP-ldq_iOm6VtjaeZ3bqMVgP7psoCysakpxR2c9-w/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game3.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                <Link href={'https://studio.code.org/projects/gamelab/M5ZmmjLWTLaBkXfrp3JXzvHmnGg88yp3SI05Ks4tDJR/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game4.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                <Link href={'https://studio.code.org/projects/gamelab/dAcGneC5y2WhTM7gQdvJjOZwnb_TNA6jFVvaDmAO1E9/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game5.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                <Text style={styles.c2cBody}>
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Highlighted Games</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Sean Takahashi</Text>
                                <Image
                                    source={require('../assets/CS/TeacherIMGS/GOAT.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Both a math teacher and computer science teacher. Mr.Takashi teaches Introduction to Computer Science, AP Computer Science A, and Programming 2: Mobile Apps Development
                                    He might also teach other computer science classes in the future, like Game development.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Brian Park</Text>
                                <Image
                                    source={require('../assets/CS/TeacherIMGS/Park.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Both a math teacher and computer science teacher. One of the other Introduction to Computer Science teachers
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>H. Ishikawa</Text>
                                <Image
                                    source={require('../assets/CS/TeacherIMGS/Ishikawa.jpg')}
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
        backgroundColor: Colors.secondary,
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
        backgroundColor: Colors.secondary,
        alignItems: 'center'
    },
    c1Title: {
        fontSize: 75,
        color: Colors.primary,
        fontFamily: 'oswaldmedium',
        marginBottom: 25
    },
    chunk2: {
        marginTop: 100,
        padding: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        flexDirection: 'row'
    },
    c2title: {
        fontSize: 75,
        marginRight: 250,
        color: Colors.primary,
        fontFamily: 'oswaldsemibold'
    },
    c3title: {
        fontSize: 75,
        marginLeft: 250,
        color: Colors.primary,
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
        textAlign: 'center',
        color: Colors.primary
    },
    studentImg: {
        height: 250,
        width: 250
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'oswaldmedium'
    }
})