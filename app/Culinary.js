import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { LinearGradient } from "expo-linear-gradient"

export default function Culi() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Culinary</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <LinearGradient style={{ height: 500, width: 700, marginVertical: 100 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.break}>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Foundations of Culinary (lvl 1)</Text>
                                        <Image
                                            source={require('../assets/placeholder.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Foundations of Culinary Arts is an <Text style={{ fontWeight: "bold" }}>introductory course</Text> designed to inform students about careers in the food prep and service industries or related fields, basic
                                            nutritional and cooking concepts, and the history and influence of culture on food.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Culinary Arts: Food
                                            Preparation (lvl 2)</Text>
                                        <Image
                                            source={require('../assets/placeholder.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Culinary Arts: Food Preparation is the <Text style={{ fontWeight: "bold" }}>second course</Text> in the Culinary Arts program of study designed to inform and expose students to various basic food
                                            preparation methods and considerations found in commercial kitchens and restaurants.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Advanced Culinary Arts: Pastry/Savory (lvl 3)</Text>
                                        <Image
                                            source={require('../assets/placeholder.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Advanced Culinary Arts: Pastry and Savory is the <Text style={{ fontWeight: "bold" }}>third course</Text> in the Culinary Arts program of study designed to further students’ practice with food preparation in
                                            the culinary industry
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>Kitchen Restaurant Operations (lvl 4)</Text>
                                        <Image
                                            source={require('../assets/placeholder.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Kitchen Restaurant Operations is the <Text style={{ fontWeight: "bold" }}>fourth course</Text> in the Culinary Arts program of study and designed to prepare students for entry
                                            into the field of foodservice and culinary cuisine.
                                        </Text>
                                    </View>
                                    <View style={styles.c2chunk}>
                                        <Text style={styles.c2cHeader}>{"Culinary Arts Work-Based Learning \n(lvl 4)"}</Text>
                                        <Image
                                            source={require('../assets/placeholder.jpg')}
                                            style={styles.studentImg}
                                        />
                                        <Text style={styles.c2cBody}>
                                            Culinary Arts: WBL is the <Text style={{ fontWeight: "bold" }}>capstone course</Text> in the Culinary Arts program of study. It is intended to provide a work-based learning
                                            experience for students to develop further understanding of professional issues, utilize employability skills, and demonstrate mastery
                                            of academic and technical skills learned through the program of study.
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </LinearGradient>
                    </View>
                    <View style={styles.chunk2}>
                        <LinearGradient style={{ height: 500, width: 700 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
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
                            </ScrollView>
                        </LinearGradient>
                        <Text style={styles.c3title}>Suggested Classes</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Clubs</Text>
                        <LinearGradient style={{ height: 500, width: 700, marginVertical: 100 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
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
                        </LinearGradient>
                    </View>
                    <View style={styles.chunk2}>
                        
                        <LinearGradient style={{ height: 500, width: 700, marginVertical: 100 }} locations={[0, 0.6, 1]} colors={["#C7C7C7", "white", "#C7C7C7"]}>
                            <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                                <View style={styles.break}></View>
                                <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>Teacher 1</Text>
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
                        </LinearGradient>
                        <Text style={styles.c3title}>Teachers</Text>
                    </View>
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
    }
})