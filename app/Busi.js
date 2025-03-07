import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, FlatList } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"

export default function Busi() {
    return (
        <View style={styles.background}>
            <TopBar />
            <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
                <ScrollView>
                    <View style={styles.chunk1}>
                        <Text style={styles.c1Title}>Business</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Related Classes</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Foundations of Business & Marketing</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Foundations of Business & Marketing is an <Text style={{ fontWeight: "bold" }}> introductory course</Text> designed to inform students about careers in various sectors of
                                    business, as well as basic business concepts. This Level 1 course serves as the foundation course for the Business Management,
                                    Entrepreneurship, Financial Management, Marketing Management, and Supply Chain and Logistics Technology programs of study.
                                    Upon completion of the course, a proficient student will have foundational knowledge of business and business-related occupations
                                    and concepts, including management, finance, marketing, and entrepreneurship and how each intertwines. Recommended for
                                    students who seek a general background and overview of business.
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Entrepreneurship 1 & 2</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Entrepreneurship 1 & Entrepreneurship 2 are the <Text style={{ fontWeight: "bold" }}>second and thrid courses</Text> in the Entrepreneurship program of study designed to inform students about careers related
                                    to starting and running a business. Students prepare for the business world by examining basic principles in management, finance,
                                    and marketing as they apply to entrepreneurship. Upon completion of the course, a proficient student will be able to describe the
                                    foundations of small business operations and how entrepreneurship intertwines to create the fabric of the labor market.
                                    Recommended for students who are interested in establishing their own business.
                                </Text>
                                <Text style={styles.c2cBody}>
                                    Recommended Pre-requisite: Successful completion of Foundations of Business & Marketing
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Principles of Finance & Economics</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Principles of Finance & Economics is the <Text style={{ fontWeight: "bold" }}>second course</Text> for Financial Management program of study designed to inform students
                                    about the basics of economics, finance, and accounting. Upon completion of the course, a proficient student will have a basic
                                    knowledge of finance and economics, accounting principles and taxation issues, and consumer credit and protection. Recommended
                                    for students who are interested in pursuing a career in banking, finance, or accounting.
                                </Text>
                                <Text style={styles.c2cBody}>
                                    Recommended Pre-requisite: Successful completion of Foundations of Business & Marketing
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Accounting</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Accounting is the <Text style={{ fontWeight: "bold" }}>third course</Text> for Financial Management program of study designed to inform students about basic procedures of
                                    accounting. Upon completion of the course, a proficient student will demonstrate various accounting and basic business transactions,
                                    and apply the full accounting cycle, analyze financial data, and explain ethical behavior in the accounting field. Recommended for
                                    students who are interested in pursuing a career in banking, finance, or accounting.
                                </Text>
                                <Text style={styles.c2cBody}>
                                Recommended pre-requisite: Successful completion of Principles of Finance and Economics
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Advertising and
                                    Public Relations</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Advertising & Public Relations is the <Text style={{ fontWeight: "bold" }}>second course </Text>in the Marketing Management program of study designed to prepare students
                                    for the marketing world by examining basic principles in advertising, such as market segmentation, research, and building
                                    promotional campaigns. Upon completion of this course, a proficient student will be able to describe and apply multiple aspects of
                                    advertising and public relations concepts that keep a business in the consumer’s mind through channels such as print, social media,
                                    and public relations. Recommended for students who are interested in pursuing a career in marketing.
                                </Text>
                                <Text style={styles.c2cBody}>
                                    Recommended Pre-requisite: Successful completion of Foundations of Business & Marketing
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Digital Marketing &
                                    Marketing Analytics</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Digital Marketing & Market Analytics is the <Text style={{ fontWeight: "bold" }}>third course</Text> in the Marketing Management program of study designed to in social media
                                    marketing. Upon completion of the course, a proficient student will be able to describe and apply the process of building a
                                    promotional campaign through digital means and the applied use of data contained in these methods to drive market research.
                                    Recommended for students who are interested in pursuing a career in marketing.
                                </Text>
                                <Text style={styles.c2cBody}>
                                Recommended pre-requisite: Successful completion of Advertising and Public Relations
                                </Text>
                            </View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Recommended courses</Text>
                                <FlatList
                                    data={[
                                        { key: 'Economics or AP Macro/Microeconomics' },
                                        { key: 'Foundations of Creative Media' },
                                        { key: 'Exploring Technology' },
                                        { key: 'Newswriting 1, 2, 3' },
                                        { key: 'Stats/Probs or AP Statistics' },
                                        { key: 'Calculus or AP Calculus (AB or BC)' },
                                        { key: 'Leadership/Transition Program' },
                                        { key: 'Yearbook 1, 2, 3' }
                                    ]}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={{ marginBottom: 10 }}>
                                                <Text style={[{ fontSize: 20 }, styles.c2cBody]}>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        );
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.chunk2}>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>About the Club</Text>
                                <Image
                                    source={require('../assets/placeholder.jpg')}
                                    style={styles.studentImg}
                                />
                                <Text style={styles.c2cBody}>
                                    Moanalua’s DECA Club has been the dominant program in the state for several years. Moanalua
                                    students have won top places in state competitions and have been the majority representatives to
                                    the national competitions in such cities as Atlanta, Anaheim and Orlando
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
                        <Text style={styles.c3title}>DECA Business Club</Text>
                    </View>
                    <View style={styles.chunk2}>
                        <Text style={styles.c2title}>Teachers</Text>
                        <ScrollView style={{ height: 500 }} showsVerticalScrollIndicator={false}>
                            <View style={styles.break}></View>
                            <View style={styles.c2chunk}>
                                <Text style={styles.c2cHeader}>Mrs. Kramer</Text>
                                <Image
                                    source={require('../assets/Business/MOANAHS1734488895639.jpg')}
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
        marginBottom: 20
    },
    studentImg: {
        height: 250,
        width: 250,
        margin: 20
    },
    c2cHeader: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'oswaldmedium'
    }
})