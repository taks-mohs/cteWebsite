import { ImageBackground, Text, View, StyleSheet, ScrollView, Image } from "react-native-web";
import TopBar from "../../components/topBar";
import Colors from "../../components/colors";
import Footer from "../../components/footer";

export default function Entre() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../../assets/Business/entrepreneurship.webp')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Entrepreneurship</Text>
                    </View>
                    <View style={styles.chunk3}>
                        <Text style={styles.c2cHeader}>About Entrepreneurship</Text>
                        <View style={styles.break}></View>
                        <Text style={styles.c2cBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>Foundations of Business &
                                    Marketing</Text>
                                <Image
                                    source={require('../../assets/Business/founds.png')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Moanalua’s DECA Club has been the dominant program in the state for several years. Moanalua
                                    students have won top places in state competitions and have been the majority representatives to
                                    the national competitions in such cities as Atlanta, Anaheim and Orlando
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>Entrepreneurship 1</Text>
                                <Image
                                    source={require('../../assets/Business/ent1.webp')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Moanalua’s DECA Club has been the dominant program in the state for several years. Moanalua
                                    students have won top places in state competitions and have been the majority representatives to
                                    the national competitions in such cities as Atlanta, Anaheim and Orlando
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>Entrepreneurship 2</Text>
                                <Image
                                    source={require('../../assets/Business/ent2.jpeg')}
                                    style={styles.studentImg}
                                />
                            
                                <Text style={styles.c2cBody}>
                                    Moanalua’s DECA Club has been the dominant program in the state for several years. Moanalua
                                    students have won top places in state competitions and have been the majority representatives to
                                    the national competitions in such cities as Atlanta, Anaheim and Orlando
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                    <Text style={styles.c2cHeader}>Entrepreneurship WBL</Text>
                                <Image
                                    source={require('../../assets/Business/ent3.jpeg')}
                                    style={styles.studentImg}
                                />
                            
                                <Text style={styles.c2cBody}>
                                    Moanalua’s DECA Club has been the dominant program in the state for several years. Moanalua
                                    students have won top places in state competitions and have been the majority representatives to
                                    the national competitions in such cities as Atlanta, Anaheim and Orlando
                                </Text>
                            </View>
                        </ScrollView>
                        <Text style={styles.c3title}>Related Classes</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Projects</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Project 1</Text>
                                <Image
                                    source={require('../../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Project 2</Text>
                                <Image
                                    source={require('../../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Project 3</Text>
                                <Image
                                    source={require('../../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                                    Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
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
        resizeMode: 'cover',
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
    c2cBody: {
        fontSize: 18,
        fontFamily: 'oswaldlight',
        textAlign: 'center',
        marginBottom: 20
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium'
    },
    break: {
        margin: 40
    },
    chunk3: {
        marginTop: 100,
        padding: 100,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        flexDirection: 'column'
    },
    c2title: {
        fontSize: 75,
        marginRight: 250,
        color: Colors.secondary,
        fontFamily: 'oswaldsemibold'
    },
    studentImg: {
        height: 250,
        width: 250,
        margin: 20
    },
    c2chunk: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 75
    },
    c3title: {
        fontSize: 75,
        marginLeft: 250,
        color: Colors.secondary,
        fontFamily: 'oswaldsemibold'
    },
})