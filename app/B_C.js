import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { VideoView, useVideoPlayer } from "expo-video";

export default function B_C() {
    const player = useVideoPlayer(require('../assets/videoplayback.mp4'), player => { player.play() });

    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Building & Construction</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Information</Text>
                        <ScrollView style={{ height: 550 }} showsVerticalScrollIndicator={true}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Possible Careers</Text>
                                <Image
                                    source={require('../assets/architect and engineering logo.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    • Architect • Carpenter • Civil Engineer • Drafter • Electrical Engineer<br />• Electrician • 
                                    Fuel Cell Technician • Materials Engineer • Mechanical Engineer<br />• Mechatronic Technician
                                    • Painter• Plumber • Roofer • Surveyor• Welder</Text>
                            </View>
                            <View style={styles.chunk2}>
                                <Text style={styles.c2title}>Related Classes</Text>
                                <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                    <View style={styles.break}></View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Architecture and Engineering</Text>
                                        <Image
                                            source={require('../assets/architect and engineering logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Architecture and Engineering focuses on the design and planning of buildings, integrating both artistic and technical aspects. 
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Business Management</Text>
                                        <Image
                                            source={require('../assets/business logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Business Management covers the principles of managing a business, including finance, marketing, and operations.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Cultural Arts</Text>
                                        <Image
                                            source={require('../assets/cultural arts logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Cultural Arts explores the intersection of culture and art, focusing on various artistic expressions and their cultural significance. 
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Health Services Pathway</Text>
                                        <Image
                                            source={require('../assets/health services logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Health Services Pathway provides students with knowledge and skills in healthcare, preparing them for careers in the medical field.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Hospitality</Text>
                                        <Image
                                            source={require('../assets/hospitality logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Hospitality focuses on the service industry, including hotel management, event planning, and customer service.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Transportation Services</Text>
                                        <Image
                                            source={require('../assets/transportation logo.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Transportation Services covers the logistics and management of transportation systems, including vehicles and infrastructure.
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
                                <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
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
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Teacher 2</Text>
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
                            </View>
                            <View style={styles.videoChunk}>
                                        <Text style={styles.c1Title}>Informational Video</Text>
                                        <VideoView player={player} nativeControls />
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
                                    Open to grade: 12. Residential & Commercial Construction: WBL is the capstone course in the program, offering a work-based learning experience to enhance professional and technical skills. Students explore career pathways, prepare for postsecondary programs or jobs, and gain hands-on experience through internships or apprenticeships.
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Classes</Text>
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
                                <Text style={styles.c2cHeader}>Calculus/AP Calculus</Text>
                                <Image
                                    source={require('../assets/calculus.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Calculus is essential for construction as it helps in understanding structural integrity, load distribution, and material optimization, ensuring safe and efficient designs. It also aids in solving complex problems related to measurements, curves, and rates of change in construction projects.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>AP Physics</Text>
                                <Image
                                    source={require('../assets/physics.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    AP Physics is beneficial for construction as it provides a strong understanding of forces, motion, and energy, which are critical for designing and analyzing structures. It also helps students apply principles like torque, equilibrium, and material strength to ensure safe and efficient construction projects.
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
                        </ScrollView>
                        <Text style={styles.c3title}>Suggested Classes</Text>
                    </View>
                    <View style={styles.videoChunk}>
                        <Text style={styles.c1Title}>Informational Video</Text>
                        <VideoView player={player} nativeControls />
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
        fontSize: 60,
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
        height: 500,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
})