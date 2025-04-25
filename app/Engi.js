import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function Engi() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/ENGRG/MiscImages/engineeringbackground.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Engineering</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Foundations of Engineering Tech</Text>
                                <Image
                                    source={require('../assets/ENGRG/MiscImages/Catapults.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Foundations of Engineering Technology is an introductory course designed to inform students about careers in engineering. This
                                    course serves as the foundation course for the Engineering program of study. Upon completion of this course, a proficient student
                                    will have foundational knowledge of the engineering design process, sketching and technical drawing techniques, and foundational
                                    elements to engineering and the role of math.                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Engineering Tech 1</Text>
                                <Image
                                    source={require('../assets/ENGRG/MiscImages/FloorSketech.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Engineering Technology I
                                    course the second course in the Engineering program of study and is designed to provide students an in-depth study of a variety
                                    of engineering fields via real world engineering design challenges. Students will apply their understanding of physics, chemistry,
                                    biology, along with computer-integrated manufacturing technology to develop/design, test, and improve their design solutions.
                                    Technical reading/writing/presentation and related mathematics and science knowledge and skills will be integrated and applied
                                    throughout the course. Many of these skills will be carried out through the use of CAD programs to bring creations alive with 3D
                                    printers.                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Engineering Tech 2</Text>
                                <Image
                                    source={require('../assets/ENGRG/MiscImages/InverseKinematics.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Engineering 2 is the third course in the Engineering program of study designed to provide students with the opportunity to apply
                                    skills learned in previous courses and continue to grow and strengthen their individual engineering design process. Upon
                                    completion of the course, a proficient student will have additional concepts of engineering, such as kinematics and kinetics,
                                    electrical, advanced drawings, and the opportunity to apply learned knowledge and skills across design projects.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Engineering Tech 3</Text>
                                <Image
                                    source={require('../assets/ENGRG/MiscImages/MechENGRG.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Engineering 3 is the fourth course in the Engineering program of study that provides students the opportunity to apply academic
                                    and technical skills learned in previous courses through individual and team projects. Upon completion of the course, a proficient
                                    student will be able to apply advanced technical drawing and engineering design techniques to civil and mechanical engineering
                                    challenges. As part of the student’s program of study progression, the student will maintain a digital program of study portfolio
                                    providing evidence of mastery of the course standards and readiness to advance and complete the program of study.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Mechahunes (Robotics Club)</Text>
                                <Image
                                    source={require('../assets/ENGRG//MiscImages/Mechahunes.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    The robotics club teaches it's club memebers how to use assemble and program to robots. The robotics club participates in the
                                    VEX Robotics Tournament and FIRST Robotics Competition within a year.
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
                                <Text style={styles.c2cHeader}>E. Hashizume</Text>
                                <Image
                                    source={require('../assets/ENGRG/TeacherIMGS/Hashizume.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Mr.Hashizume teaches Engineering Tech II as well as Engineering Tech III.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>V. Komar</Text>
                                <Image
                                    source={require('../assets/ENGRG/TeacherIMGS/Komar.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Mr.Komar teaches Engineering Tech I. He is also your teacher for AP Seminar and AP Research.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>J. Murray</Text>
                                <Image
                                    source={require('../assets/ENGRG/TeacherIMGS/Murray.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Mr.Murray teaches Foundations of Engineering Technology.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
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
    }
})