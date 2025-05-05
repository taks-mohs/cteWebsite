import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable } from "react-native-web"
import { Link } from 'expo-router'
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function CS() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/CS/MiscImages/CSbackground.jpeg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Computer Science</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#ededed' }}>
                                <View style={styles.break}></View>
                                <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>Foundations of Computer Systems & Technology</Text>
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
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#ededed' }}>
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
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Clubs</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false} horizontal={true}>
                            <View style={{ backgroundColor: '#ededed' }}>
                                <View style={styles.break}></View>
                                <View style={styles.c3chunk}>
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
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Intro to CS Games</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#ededed' }}>
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
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#ededed' }}>
                                <View style={styles.break}></View>
                                <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>4 Years of Math</Text>
                                    <Text style={styles.c2cBody}>
                                        Depending on what core classes you receive, your fourth year of math might be
                                        Trigonometry/Precalculus, Calculus, AP Calculus A/B and AP Calculus B/C.
                                        It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics
                                    </Text>
                                    <Text style={styles.c2cHeader}>4 Years of Science</Text>
                                    <Text style={styles.c2cBody}>
                                        Your fourth year of science might be AP Physics.
                                        It's recommended to move onto AP Physics rather than AP Chemistry, AP Biology, or AP Environmental Science
                                    </Text>
                                    <Text style={styles.c2cHeader}>Engineering Technology</Text>
                                    <Text style={styles.c2cBody}>
                                        Refer to the Engineering page for more information on the classes.
                                    </Text>
                                    <Text style={styles.c2cHeader}>Creative Media</Text>
                                    <Text style={styles.c2cBody}>
                                        Refer to the Creative Media: Graphics Page
                                    </Text>
                                    <Text style={styles.c2cHeader}>For More Information</Text>
                                    <Text style={styles.c2cBody}>
                                        Refer to the Moanalua High School Course Catalog:
                                        Page 25 (The Icon Below is Pressable)
                                    </Text>
                                    <Text>
                                        <Link href={'https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=25'}>
                                            <Pressable>
                                                <Image
                                                    source={require('../assets/mohslogo.png')}
                                                    style={styles.studentImg}
                                                />
                                            </Pressable>
                                        </Link>
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Suggested Courses</Text>
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
        textAlign: 'center',
        color: Colors.secondary
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
    c3chunk: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 75
    }
})