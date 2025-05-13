import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import { VideoView, useVideoPlayer } from "expo-video";
import { Link } from "expo-router";
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import TopBar from '../components/topBar'
import HeaderChunk from '../components/Templates/HeaderChunk'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'

export default function B_C() {
    const player = useVideoPlayer(require('../assets/B_CVideo.mp4'), player => { player.play() });
    const { width } = useWindowDimensions()
      useFonts({
        'oswaldlight': Oswald_300Light,
        'oswaldmedium': Oswald_500Medium,
        'oswaldsemibold': Oswald_600SemiBold
      })

    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/B_Cbg.png')}>
                <ScrollView>
                    <View style={{ marginTop: width * 0.2 }}></View>
                    <HeaderChunk
                        header="Building & Construction"
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                              header="Information"
                              info={[
                                <Chunk2Info
                                  infoHeader="Description"
                                  infoBody="Building and Construction introduces students to the fundamentals of the construction industry, including blueprint reading, site preparation, and tool usage. Students gain hands-on experience in the workforce while also learning safety protocols and industry standards, preparing them for careers in construction and related fields."
                                />,
                                <Chunk2Info
                                  infoHeader="Possible Careers"
                                  infoBody="• Architect • Carpenter • Civil Engineer • Drafter • Electrical Engineer • Electrician • Fuel Cell Technician • Materials Engineer • Mechanical Engineer • Mechatronic Technician • Painter• Plumber • Roofer • Surveyor• Welder"
                                />,
                                <Chunk2Info
                                  infoHeader="Inventory"
                                  infoBody="Building and Construction introduces students to the fundamentals of the construction industry, including blueprint reading, site preparation, and tool usage. Students gain hands-on experience in the workforce while also learning safety protocols and industry standards, preparing them for careers in construction and related fields."
                                />
                              ]}
                              />
                    
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Information</Text>
                        {/* <LinearGradient style={{ height: 500, width: 700, marginVertical: 100 }} locations={[0, 0.6, 1]} colors={[Colors.secondary, Colors.secondary, Colors.secondary]}> */}
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Description</Text>
                                <Text style={styles.c2cBody}>
                                    Building and Construction introduces students to the fundamentals of the construction industry, including blueprint reading, site preparation, and tool usage. Students gain hands-on experience in the workforce while also learning safety protocols and industry standards, preparing them for careers in construction and related fields.</Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Possible Careers</Text>
                                <Text style={styles.c2cBody}>
                                    • Architect • Carpenter • Civil Engineer • Drafter • Electrical Engineer<br />• Electrician •
                                    Fuel Cell Technician • Materials Engineer • Mechanical Engineer<br />• Mechatronic Technician
                                    • Painter• Plumber • Roofer • Surveyor• Welder</Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Inventory</Text>

                                <Text style={styles.c2cBody}>
                                    In this class you will learn how to use hammers, screwdrivers, measuring tapes, and various other power tools. Students will also work with materials such as wood and metals.</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Foundations of Construction</Text>
                                <Image
                                    source={require('../assets/construction.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Open to grades: 9, 10, 11, 12. Foundations of Construction is an introductory course designed to inform students about careers in building and construction.
                                    This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Construction 1</Text>
                                <Image
                                    source={require('../assets/bc1.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Open to grades: 10, 11, 12. Residential & Commercial Construction 1 is the second course in the Residential & Commercial Construction program of study
                                    intended to have students develop an understanding of the different phases of a construction project from start to finish. Upon
                                    completion of this course, a proficient student will be able to demonstrate knowledge and skills in the early phases of building
                                    construction, including site layout, concrete and floor to ceiling systems.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Construction 2</Text>
                                <Image
                                    source={require('../assets/bc2.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Open to grades: 11, 12. Residential & Commercial Construction 2 is the third course in the Residential & Commercial Construction program of study
                                    designed to allow students to develop an understanding of the different phases of a construction project from start to finish. Upon
                                    completion of this course, a proficient student will be able to demonstrate knowledge and skill in the later phases of building
                                    construction including roofing systems, exterior finishing, stair framing systems, masonry systems, and MEP systems.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Construction: WBL</Text>
                                <Image
                                    source={require('../assets/bc3.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Open to grade 12. Residential & Commercial Construction: WBL is the capstone course in the program, offering a work-based learning experience to enhance professional and technical skills. Students explore career pathways, prepare for postsecondary programs or jobs, and gain hands-on experience through internships or apprenticeships.
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Electives</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={true}>
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
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>4th Year of Math</Text>
                                <Image
                                    source={require('../assets/calculus.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Math helps in building and construction by enabling accurate measurements, structural calculations, and material estimations, ensuring safe and efficient designs.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>4th Year of Science</Text>
                                <Image
                                    source={require('../assets/physics.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Science helps in building and construction by providing knowledge of forces, motion, and energy, which are essential for designing and analyzing structures. It ensures safe and efficient construction by applying principles like torque, equilibrium, and material strength.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Business CORE</Text>
                                <Image
                                    source={require('../assets/business logo.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Business CORE is valuable for construction as it teaches essential skills like project management, budgeting, and effective communication, which are critical for overseeing construction projects. It also provides knowledge of financial planning and resource allocation, ensuring projects are completed efficiently and within budget.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Weight Training/Team Sports</Text>
                                <Image
                                    source={require('../assets/wt.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Weight training/Team Sports is beneficial for construction as it helps build physical strength and endurance, which are essential for handling the demanding physical tasks involved in construction work. It also improves overall fitness and reduces the risk of injuries, enabling workers to perform their duties more effectively and safely.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>For More Information</Text>
                                <Text style={styles.c2cBody}>
                                    Refer to the Moanalua High School Course Catalog:
                                    Page 20 (The Icon Below is Pressable)
                                </Text>
                                <Text>
                                    <Link href={'https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=20'}>
                                        <Pressable>
                                            <Image
                                                source={require('../assets/download.jpg')}
                                                style={styles.studentImg}
                                            />
                                        </Pressable>
                                    </Link>
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Suggested Courses</Text>
                    </View>
                    <View style={styles.videoChunk}>
                        <Text style={styles.c1Title}>Related video</Text>
                        <VideoView style={styles.video} player={player} nativeControls />
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
        backgroundColor: Colors.secondary,
        alignItems: 'center'
    },
    c1Title: {
        fontSize: 60,
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
        fontFamily: 'oswaldsemibold',
        alignItems: 'center',
        justifyContent: 'center',
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
        color: Colors.primary,
        textAlign: 'center',
    },
    studentImg: {
        height: 250,
        width: 250
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.primary,
        fontFamily: 'oswaldmedium'
    },
    videoChunk: {
        marginTop: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        marginBottom: 50,
        width: 640
    }
})