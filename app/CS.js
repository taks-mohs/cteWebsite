// React-native Imports
import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
import { Link } from 'expo-router'
// Other Component Imports
import Colors from "../components/colors"
import TopBar from "../components/topBar"
// Template Component Imports
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk1Picture from '../components/Templates/Chunk1Picture'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'
import ImagelessInfoChunk from "../components/Templates/ImagelessInfoChunk"

export default function CS() {
    // Template Component
    const { width } = useWindowDimensions()
    const styles = StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: Colors.primary,
        },
        bgImg: {
            height: '100%',
            width: '100%',
            resizeMode: 'cover'
        }
    })

    // Page
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/CS/MiscImages/CSbackground.jpeg')}>
                <ScrollView>
                    {/* Header Section */}
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <HeaderChunk
                        header="Computer Science"
                    />
                    {/* Related Classes Section */}
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <Chunk2L
                        header="Related Classes"
                        info={[
                            <Chunk2Info
                                infoHeader="Foundations of Computer Systems & Technology"
                                image={require('../assets/CS/MiscImages/codeOrg.webp')}
                                infoBody="Foundations of Computer Systems & Technology ."
                            />,
                            <Chunk2Info
                                infoHeader="AP Computer Science"
                                image={require('../assets/CS/MiscImages/Java.jpg')}
                                infoBody="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            />,
                            <Chunk2Info
                                infoHeader="Programming 2: Mobile App Development"
                                image={require('../assets/CS/MiscImages/Javascript.png')}
                                infoBody="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            />
                        ]}
                    />
                    <View style={{ marginTop: width * 0.05 }}></View>
                    <View style={styles.chunk2}>
                        {/* Clubs Section */}
                        <Chunk2L
                            header="Clubs"
                            info={[
                                <Chunk2Info
                                    infoHeader="MeneDevs (Coding Club)"
                                    image={require('../assets/CS/MiscImages/GameDevelopment.png')}
                                    infoBody="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                />
                            ]}
                        />
                        {/* End of Clubs Section */}
                        <View style={{ marginTop: width * 0.05 }}></View>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false} horizontal={true}>
                            <Chunk1Picture
                                link='https://studio.code.org/projects/gamelab/2oX9EMdEsQF3vts52xHug7fY03Lv-cpPy5CWxyGDa7R/embed?nosource'
                                image={require('../assets/CS/ICTSGames/game1.png')}
                            />
                            <Chunk1Picture
                                link='https://studio.code.org/projects/gamelab/2oX9EMdEsQF3vts52xHug7fY03Lv-cpPy5CWxyGDa7R/embed?nosource'
                                image={require('../assets/CS/ICTSGames/game2.png')}
                            />
                            <Chunk1Picture
                                link='https://studio.code.org/projects/gamelab/g4xP-ldq_iOm6VtjaeZ3bqMVgP7psoCysakpxR2c9-w/embed?nosource'
                                image={require('../assets/CS/ICTSGames/game3.png')}
                            />
                            <Chunk1Picture
                                link='https://studio.code.org/projects/gamelab/M5ZmmjLWTLaBkXfrp3JXzvHmnGg88yp3SI05Ks4tDJR/embed?nosource'
                                image={require('../assets/CS/ICTSGames/game4.png')}
                            />
                            <Chunk1Picture
                                link='https://studio.code.org/projects/gamelab/dAcGneC5y2WhTM7gQdvJjOZwnb_TNA6jFVvaDmAO1E9/embed?nosource'
                                image={require('../assets/CS/ICTSGames/game5.png')}
                            />
                        </ScrollView>
                        {/* The Title of the Section */}
                        <Text style={styles.c3title}>Intro to CS Games</Text>
                    </View>
                    <View style={styles.chunk2}>
                        {/* Teachers Section */}
                        <View style={{ marginTop: width * 0.05 }}></View>
                        <Chunk2L
                            header="Teachers"
                            info={[
                                <Chunk2Info
                                    infoHeader="S. Takahashi"
                                    image={require('../assets/CS/TeacherIMGS/GOAT.jpg')}
                                    infoBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                />,
                                <Chunk2Info
                                    infoHeader="B. Park"
                                    image={require('../assets/CS/TeacherIMGS/Park.jpg')}
                                    infoBody="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                />,
                                <Chunk2Info
                                    infoHeader="H. Ishikawa"
                                    image={require('../assets/CS/TeacherIMGS/Ishikawa.jpg')}
                                    infoBody="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                />
                            ]}
                        />
                    </View>
                    {/* End of Teachers Section */}
                    <View style={styles.chunk2}>
                        {/* Related Classes Section */}
                        <View style={{ marginTop: width * 0.05 }}></View>
                        <Chunk2L
                            header="Suggested Courses"
                            info={[
                                <ImagelessInfoChunk
                                    infoHeader="Four Years of Math"
                                    infoBody=
                                    "Depending on what core classes you receive, your fourth year of math might be Trigonometry or Precalculus Calculus AP Calculus AB and AP Calculus B/C. It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics."
                                />,
                                <ImagelessInfoChunk
                                    infoHeader="Four Years of Science"
                                    image={require('../assets/CS/MiscImages/Java.jpg')}
                                    infoBody=
                                    "Your fourth year of science might be AP Physics. It's recommended to move onto AP Physics rather than AP Chemistry, AP Biology, or AP Environmental Science"
                                />,
                                <ImagelessInfoChunk
                                    infoHeader="Engineering Technology"
                                    image={require('../assets/CS/MiscImages/Javascript.png')}
                                    infoBody="Refer to the Engineering page for more information."
                                />,
                                <ImagelessInfoChunk
                                    infoHeader="Creative Media"
                                    image={require('../assets/CS/MiscImages/Javascript.png')}
                                    infoBody="Refer to the Creative Media page for more information."
                                />
                            ]}
                        />
                        {/* End of Suggested Courses Section  */}
                    </View>
                    <View style={{ marginTop: width * 0.05 }}>
                        <Chunk1Picture
                            link='https://www.moanaluahs.org/ourpages/auto/2022/3/15/40772712/2025-27%20Registration%20Course%20Catalog.pdf?rnd=1736024882726#page=25'
                            image={require('../assets/mohsLogov2.png')}
                        />
                    </View>
                    
                </ScrollView>
            </ImageBackground>
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