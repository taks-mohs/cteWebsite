import { ImageBackground, Text, View, StyleSheet, ScrollView, Image } from "react-native-web";
import { useRef, useEffect } from "react";
import TopBar from "../../components/topBar";
import Colors from "../../components/colors";
import Footer from "../../components/footer";

export default function Entre() {
        const scrollViewRef = useRef();
    
        useEffect(() => {
            setTimeout(() => {
                scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 100);
        }, []);

    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../../assets/Business/IMG_7028.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>DECA</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2cHeader}>About DECA</Text>
                        <View style={styles.break}></View>
                        <Text style={styles.c2cBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate enim, in dictum neque.
                            Aliquam iaculis pharetra maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
                    <ScrollView style={{width: "100%"}}horizontal showsHorizontalScrollIndicator = {false}>
                        <Image style={styles.studentImg} source={require("../../assets/Business/IMG_7012.png")}/>
                        <Image style={styles.studentImg} source={require("../../assets/Business/IMG_7071.png")}/>
                        <Image style={styles.studentImg} source={require("../../assets/Business/IMG_9213.png")}/>
                        <Image style={styles.studentImg} source={require("../../assets/Business/IMG_9219.png")}/>
                        <Image style={styles.studentImg} source={require("../../assets/Business/IMG_9235.png")}/>
                    </ScrollView>
                    </View>
                    <Footer/>
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
        padding: 50,
        marginBottom: 150,
        height: 500,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        flexDirection: 'column'
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
    studentImg: {
        height: 250,
        width: 250,
        margin: 20
    },
})