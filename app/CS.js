// React-native Imports
import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, Pressable, useWindowDimensions } from "react-native-web"
import { Link } from 'expo-router'
// Other Component Imports
import Colors from "../components/colors"
import TopBar from "../components/topBar"
// Template Component Imports
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'

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
                                infoBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <Chunk1
                                header="Chunk 1"
                                link='https://studio.code.org/projects/gamelab/2oX9EMdEsQF3vts52xHug7fY03Lv-cpPy5CWxyGDa7R/embed?nosource'
                            />
                            <Chunk1
                                link='https://studio.code.org/projects/gamelab/kjZSLL7eHi-LWqZh4--K74fxlet4QjHh5wmMjPcKCow/embed?nosource'
                            />
                            <Chunk1
                                link='https://studio.code.org/projects/gamelab/g4xP-ldq_iOm6VtjaeZ3bqMVgP7psoCysakpxR2c9-w/embed?nosource'
                            />
                            <Chunk1
                                link='https://studio.code.org/projects/gamelab/M5ZmmjLWTLaBkXfrp3JXzvHmnGg88yp3SI05Ks4tDJR/embed?nosource'
                            />
                            <Chunk1
                                link='https://studio.code.org/projects/gamelab/g4xP-ldq_iOm6VtjaeZ3bqMVgP7psoCysakpxR2c9-w/embed?nosource'
                            />
                        </ScrollView>

                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false} >
                            {/* Highlighted Games Section */}
                            <View style={styles.c3chunk}>
                                {/* Highlighted Games 1 */}
                                <Link href={'https://studio.code.org/projects/gamelab/2oX9EMdEsQF3vts52xHug7fY03Lv-cpPy5CWxyGDa7R/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game1.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                {/* Highlighted Games 2 */}
                                <Link href={'https://studio.code.org/projects/gamelab/kjZSLL7eHi-LWqZh4--K74fxlet4QjHh5wmMjPcKCow/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game2.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                {/* Highlighted Games 3 */}
                                <Link href={'https://studio.code.org/projects/gamelab/g4xP-ldq_iOm6VtjaeZ3bqMVgP7psoCysakpxR2c9-w/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game3.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                {/* Highlighted Games 4 */}
                                <Link href={'https://studio.code.org/projects/gamelab/M5ZmmjLWTLaBkXfrp3JXzvHmnGg88yp3SI05Ks4tDJR/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game4.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                {/* Highlighted Games 5 */}
                                <Link href={'https://studio.code.org/projects/gamelab/dAcGneC5y2WhTM7gQdvJjOZwnb_TNA6jFVvaDmAO1E9/embed?nosource'}>
                                    <Pressable>
                                        <Image
                                            source={require('../assets/CS/ICTSGames/game5.png')}
                                            style={styles.studentImg}
                                        />
                                    </Pressable>
                                </Link>
                                {/* End of Highlighted Games Section */}
                                <Text style={styles.c2cBody}>
                                </Text>
                            </View>
                        </ScrollView>
                        {/* The Title of the Section */}
                        <Text style={styles.c3title}>Intro to CS Games</Text>
                    </View>
                    <View style={styles.chunk2}>
                        {/* Teachers Section */}
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#ededed' }}>
                                <View style={styles.break}></View>
                                {/* Teacher 1 */}
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
                                {/* Teacher 2 */}
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
                                {/* Teacher 3 */}
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
                    {/* End of Teachers Section */}
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={{ backgroundColor: '#ededed' }}>
                                {/* Start of Suggested Courses */}
                                <View style={styles.break}></View>
                                <View style={styles.c2chunk}>
                                    {/* Suggested Course 1 */}
                                    <Text style={styles.c2cHeader}>4 Years of Math</Text>
                                    <Text style={styles.c2cBody}>
                                        Depending on what core classes you receive, your fourth year of math might be
                                        Trigonometry/Precalculus, Calculus, AP Calculus A/B and AP Calculus B/C.
                                        It's recommmended to move onto Trigonometry/Precalculus and Calculus courses rather than Statistics or AP Statistics
                                    </Text>
                                    {/* Suggested Course 2 */}
                                    <Text style={styles.c2cHeader}>4 Years of Science</Text>
                                    <Text style={styles.c2cBody}>
                                        Your fourth year of science might be AP Physics.
                                        It's recommended to move onto AP Physics rather than AP Chemistry, AP Biology, or AP Environmental Science
                                    </Text>
                                    {/* Suggested Course 3 */}
                                    <Text style={styles.c2cHeader}>Engineering Technology</Text>
                                    <Text style={styles.c2cBody}>
                                        Refer to the Engineering page for more information on the classes.
                                    </Text>
                                    {/* Suggested Course 4 */}
                                    <Text style={styles.c2cHeader}>Creative Media</Text>
                                    <Text style={styles.c2cBody}>
                                        Refer to the Creative Media: Graphics Page
                                    </Text>
                                    {/* Suggested Course 5 */}
                                    <Text style={styles.c2cHeader}>For More Information</Text>
                                    <Text style={styles.c2cBody}>
                                        Refer to the Moanalua High School Course Catalog:
                                        Page 25 (The Icon Below is Pressable)
                                    </Text>
                                    {/* To the MoHS Course Catalog */}
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
                                    {/* End of MoHS Course Catalog */}
                                </View>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Suggested Courses</Text>
                    </View>
                    {/* End of Suggested Courses Section  */}
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