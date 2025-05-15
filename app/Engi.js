import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
import { Link } from 'expo-router'
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import HeaderChunk from "../components/Templates/HeaderChunk"
import InfoChunk from "../components/Templates/Chunk2Info"
import Chunk2L from "../components/Templates/Chunk2L"
import Chunk2R from "../components/Templates/Chunk2R"
import footer from "../components/footer"
import Chunk1 from "../components/Templates/Chunk1"
import ImagelessInfoChunk from "../components/Templates/ImagelessInfoChunk"

export default function Engi() {
    const { width } = useWindowDimensions()
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/ENGRG/MiscImages/engineeringbackground.jpg')}>
                <ScrollView>
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <HeaderChunk header={"Engineering"} />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L header={"Related Classes"} info={
                        <>
                            <InfoChunk
                                infoHeader={"Foundations of Engineering Technology"}
                                infoBody={"Foundations of Engineering Technology is an introductory course designed to inform students about careers in engineering. This" +
                                    " course serves as the foundation course for the Engineering program of study. Upon completion of this course, a proficient student" +
                                    " will have foundational knowledge of the engineering design process, sketching and technical drawing techniques, and foundational" +
                                    " elements to engineering and the role of math."}
                                image={require('../assets/ENGRG/MiscImages/Catapults.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Engineering Tech 1"}
                                infoBody={"Engineering Technology I" +
                                    " course the second course in the Engineering program of study and is designed to provide students an in-depth study of a variety" +
                                    " of engineering fields via real world engineering design challenges. Students will apply their understanding of physics, chemistry," +
                                    " biology, along with computer-integrated manufacturing technology to develop/design, test, and improve their design solutions." +
                                    " Technical reading/writing/presentation and related mathematics and science knowledge and skills will be integrated and applied" +
                                    " throughout the course. Many of these skills will be carried out through the use of CAD programs to bring creations alive with 3D" +
                                    " printers."}
                                image={require('../assets/ENGRG/MiscImages/FloorSketech.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Engineering Tech 2"}
                                infoBody={
                                    "Engineering 2 is the third course in the Engineering program of study designed to provide students with the opportunity to apply" +
                                    " skills learned in previous courses and continue to grow and strengthen their individual engineering design process. Upon" +
                                    " completion of the course, a proficient student will have additional concepts of engineering, such as kinematics and kinetics," +
                                    " electrical, advanced drawings, and the opportunity to apply learned knowledge and skills across design projects."
                                }
                                image={require('../assets/ENGRG/MiscImages/InverseKinematics.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Engineering Tech 3"}
                                infoBody={
                                    "Engineering 3 is the fourth course in the Engineering program of study that provides students the opportunity to apply academic" +
                                    " and technical skills learned in previous courses through individual and team projects. Upon completion of the course, a proficient" +
                                    " student will be able to apply advanced technical drawing and engineering design techniques to civil and mechanical engineering" +
                                    " challenges. As part of the student’s program of study progression, the student will maintain a digital program of study portfolio" +
                                    " providing evidence of mastery of the course standards and readiness to advance and complete the program of study."
                                }
                                image={require('../assets/ENGRG/MiscImages/MechENGRG.png')}
                            />
                        </>
                    } />
                    <Chunk2L header={"Clubs"} info={
                        <InfoChunk
                            infoHeader={"Robotics Club"}
                            infoBody={
                                "The robotics club teaches it's club memebers how to use assemble and program to robots. The robotics club participates in the" +
                                " VEX Robotics Tournament and FIRST Robotics Competition within a year."
                            }
                            image={require('../assets/ENGRG//MiscImages/Mechahunes.png')}
                        />
                    } />
                    <Chunk2L header={"Teacher"} info={
                        <>
                            <InfoChunk
                                infoHeader={"Mr. Hashizume"}
                                infoBody={
                                    "Teaches Engineering Tech II as well as Engineering Tech III."
                                }
                                image={require('../assets/ENGRG/TeacherIMGS/Hashizume.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Mr. Komar"}
                                infoBody={
                                    "Teaches Engineering Tech I. He is also your teacher for AP Seminar and AP Research."
                                }
                                image={require('../assets/ENGRG/TeacherIMGS/Komar.jpg')}
                            />
                            <InfoChunk
                                infoHeader={"Mr. Murray"}
                                infoBody={
                                    "Teaches Foundations of Engineering Technology."
                                }
                                image={require('../assets/ENGRG/TeacherIMGS/Murray.jpg')}
                            />
                        </>
                    } />
                    <Chunk2L header={"Suggested Courses"} info={
                        <>
                            <ImagelessInfoChunk
                                infoHeader={"4 Years of Math"}
                                infoBody={
                                    "Depending on what core classes you receive, your fourth year of math might be Trigonometry/Precalculus, Calculus, AP Calculus A/B and AP Calculus B/C." +
                                    " It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics"
                                }
                            />
                            <ImagelessInfoChunk
                                infoHeader={"4 Years of Science"}
                                infoBody={
                                    "Your fourth year of science might be AP Physics." +
                                    " It's recommended to move onto AP Physics rather than AP Chemistry, AP Biology, or AP Environmental Science"
                                }
                            />
                            <ImagelessInfoChunk
                                infoHeader={"Foundations of Business"}
                                infoBody={
                                    "Depending on what core classes you receive, your fourth year of math might be Trigonometry/Precalculus, Calculus, AP Calculus A/B and AP Calculus B/C." +
                                    " It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics"
                                }
                            />
                            <ImagelessInfoChunk
                                infoHeader={"Weight Training or Team Sports"}
                                infoBody={
                                    "Depending on what core classes you receive, your fourth year of math might be Trigonometry/Precalculus, Calculus, AP Calculus A/B and AP Calculus B/C." +
                                    " It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics"
                                }
                            />
                            <Chunk1
                                header={"For More Information"}
                                buttonlabel={"Moanalua High School Course Catalog"}
                                link={"https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=34"}
                                image={require('../assets/mohslogo.png')}
                            />
                        </>
                    } />
                    <View style={{ marginTop: width * 0.1 }}></View>
                </ScrollView >
                <footer />
            </ImageBackground >
        </View >
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