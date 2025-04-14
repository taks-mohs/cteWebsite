import { Text, View, StyleSheet, ImageBackground, ScrollView, Image } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"






export default function Fash() {



    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/Fashion/IMG_8419_2.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Fashion</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Projects</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Bucket Hat</Text>
                                <Image
                                    source={require('../assets/Fashion/IMG_5437.jpeg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Recycled Handbags</Text>
                                <View style={styles.imageRow}>
                                    <Image
                                        source={require('../assets/Fashion/IMG_5674.jpeg')}
                                        style={styles.studentImg}
                                    />
                                    <Image
                                        source={require('../assets/Fashion/IMG_7866.jpg')}
                                        style={styles.studentImg}
                                    />
                                </View>
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Sneaker Construction</Text>
                                <Image
                                    source={require('../assets/Fashion/IMG_7800.jpeg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                    <Text style={styles.c2title}>Active</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Sewing</Text>
                                <Image
                                    source={require('../assets/Fashion/vid_03 (1).gif')}
                                    style={{ width: 400, height: 250 }}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>

                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Window Displays</Text>
                                <Image
                                    source={require('../assets/Fashion/vid04.gif')}
                                    style={{ width: 400, height: 250 }}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Fashion Illustrations</Text>
                                <Image
                                    source={require('../assets/Fashion/vid05.gif')}
                                    style={{ width: 400, height: 250 }}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                        </ScrollView>

                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Na'a Leroy Makekau</Text>
                                <Image
                                    source={require('../assets/Fashion/makekau_pic.jpg')}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
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
        marginBottom: 60,
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
        width: 250,
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium',
        marginBottom: 15,
        flexDirection: 'row-reverse',
    },
    imageRow: {
        flexDirection: 'row',
        
    }
})