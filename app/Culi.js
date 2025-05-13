import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { LinearGradient } from "expo-linear-gradient"
import Footer from "../components/footer"
import { VideoView, useVideoPlayer } from "expo-video"
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'

export default function Culi() {
    const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });
    const { width } = useWindowDimensions()
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/Culinary/elle-cosgrave-bEwJDtPGuKU-unsplash.jpg')}>
                <ScrollView>
                    <View style={{ marginTop: width * 0.05 }} />
                    <HeaderChunk header={"Culinary"} />
                    <View style={{ marginTop: width * 0.05 }} />
                    <Chunk2L header={"Related Classes"}
                        primeColor="white"
                        secondColor="#C7C7C7"
                        info={[
                            <Chunk2Info
                                infoHeader={"Foundations of Culinary (Lvl 1)"}
                                image={require('../assets/Culinary/easy-dinner-recipes-for-beginners_cat-1.webp')}
                                infoBody={"Open to grades: 9-12\n Foundations of Culinary Arts is an introductory course designed to inform students about careers in the food prep and service industries or related fields, basic nutritional and cooking concepts, and the history and influence of culture on food."}
                            />,
                            <Chunk2Info
                                infoHeader={"Culinary Arts: Food Preparation (lvl 2)"}
                                image={require('../assets/Culinary/2606852-84d547ec32d142f782e7d9ec104c9635.jpg')}
                                infoBody={[<Text style={{fontWeight: "bold"}}>Open to grades: 10-12</Text>, <br/>, <Text>Culinary Arts: Food Preparation is the <Text style={{fontWeight: "bold"}}>second course</Text> in the Culinary Arts program of study designed to inform and expose students to various basic food preparation methods and considerations found in commercial kitchens and restaurants.</Text>]}
                            />,
                            <Chunk2Info
                                infoHeader={"Advanced Culinary Arts: Pastry/Savory\n(lvl 3)"}
                                image={require('../assets/Culinary/Pastry-Chefs-Favorite-Pastries-and-Advice.webp')}
                                infoBody={[<Text style={{fontWeight: "bold"}}>Open to grades: 11-12</Text>, <br/>, <Text>Advanced Culinary Arts: Pastry and Savory is the <Text style={{fontWeight: "bold"}}>third course</Text> in the Culinary Arts program of study designed to further students’ practice with food preparation in the culinary industry.</Text>]}
                            />,
                            <Chunk2Info
                                infoHeader={"Kitchen Restaurant Operations (lvl 4)"}
                                image={require('../assets/Culinary/culinary_skills.jpg')}
                                infoBody={[<Text style={{fontWeight: "bold"}}>Open to grades: 11-12</Text>, <br/>, <Text>Kitchen Restaurant Operations is the <Text style={{fontWeight: "bold"}}>fourth course</Text> in the Culinary Arts program of study and designed to prepare students for entry into the field of food service and culinary cuisine.</Text>]}
                            />,
                            <Chunk2Info
                                infoHeader={"Culinary Arts Work-Based Learning\n(lvl 4)"}
                                image={require('../assets/Culinary/dine-with-us-at-cia.jpg')}
                                infoBody={[<Text style={{fontWeight: "bold"}}>Open to grades: 12</Text>, <br/>, <Text>Culinary Arts: WBL is the <Text style={{fontWeight: "bold"}}>capstone course</Text> in the Culinary Arts program of study. It is intended to provide a work-based learning experience for students to develop further understanding of professional issues, utilize employability skills, and demonstrate mastery of academic and technical skills learned through the program of study.</Text>]}
                            />]
                        } />
                    <View style={{ marginTop: width * 0.05 }} />
                    <Chunk2R header="Suggested Classes"
                        primeColor="#FFFFFF"
                        secondColor="#C7C7C7"
                        info={<Chunk2Info infoHeader={"\u2022 Health Services\n\u2022 Foundations of Business\n\u2022Any World Language\n\u2022Peer Education\n\u2022Psychology/AP Psychology\n\u2022 Sociology"} />} />
                    <View style={{ marginTop: width * 0.05 }} />
                    <Chunk2L
                        primeColor="#FFFFFF"
                        secondColor="#C7C7C7"
                        info={<Chunk2Info/>}
                    />
                    <View style={styles.chunk2}>
                        <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.break}>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Mr. Mitsuda</Text>
                                        <Image
                                            source={require('../assets/Culinary/Mitsuda.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches X, Y, & Z. Can be found @________. Loves This n' dat.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Mrs. Perkins</Text>
                                        <Image
                                            source={require('../assets/Culinary/Perkins.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches X, Y, & Z. Can be found @________. Loves This n' dat.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Mrs. Harada</Text>
                                        <Image
                                            source={require('../assets/Stock_Portrait.png')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Teaches X, Y, & Z. Can be found @________. Loves This n' dat.
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </LinearGradient>
                        <Text style={styles.c3title}>Teachers</Text>
                    </View>
                    <View style={styles.videoChunk}>
                        <LinearGradient style={{ paddingHorizontal: 50, height: 600, width: 900, alignContent: "center" }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <Text style={[styles.c1Title, { textAlign: "center" }]}>CTE Video</Text>
                            <VideoView style={styles.video} player={player} nativeControls />
                        </LinearGradient>
                    </View>
                    <Footer />
                </ScrollView >
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
        backgroundColor: "#C7C7C7",
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
        backgroundColor: "#C7C7C7",
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
        marginLeft: 180,
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
        fontFamily: 'oswaldmedium',
        textAlign: 'center'
    },
    videoChunk: {
        marginTop: 100,
        marginBottom: 150,
        height: 600,
        backgroundColor: "#C7C7C7",
        alignItems: 'center',
        justifyContent: 'center'
    },
    video: {
        marginHorizontal: 100
    }
})