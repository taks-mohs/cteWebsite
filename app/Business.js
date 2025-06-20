import { Text, View, StyleSheet, ImageBackground, ScrollView, Image, FlatList, useWindowDimensions } from "react-native-web"
import Colors from "../components/colors"
import TopBar from "../components/topBar"
import { Link } from "expo-router"
import { VideoView, useVideoPlayer } from "expo-video"
import Footer from "../components/footer"
import Chunk1 from "../components/Templates/Chunk1"
import Chunk2Info from "../components/Templates/Chunk2Info"
import Chunk2L from "../components/Templates/Chunk2L"
import Chunk2R from "../components/Templates/Chunk2R"
import HeaderChunk from "../components/Templates/HeaderChunk"
import { YouTubePlayer } from "../components/Youtube"

export default function Busi() {
   const player = useVideoPlayer(require('../assets/Business/BusinessCTE.mp4'), player => { player.play(); player.loop = true; player.muted = true; });
   const { width } = useWindowDimensions();
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
   });
   

   return (
      <View style={styles.background}>
         <TopBar />
         <ImageBackground style={styles.bgImg} source={require('../assets/business-background.jpg')}>
            <ScrollView>
               <View style={{ marginTop: width * 0.05 }}></View>
               <HeaderChunk
                  header="Business"
               />

                      <View style={{marginTop: width * 0.05}}></View>
                      <Chunk2R
                        header="Business Teachers"
                        info={[
                            <Chunk2Info
                              infoHeader="Mrs. Kramer"
                              image={require('../assets/TeacherHeadshots/Kramer.jpg')}
                              infoBody=""
                            />,
                            <Chunk2Info
                              infoHeader="Mrs. Yonamine"
                              image={require('../assets/placeholder.jpg')}
                              infoBody=""
                            />,
                            <Chunk2Info
                              infoHeader="Mrs. Pate"
                              image={require('../assets/placeholder.jpg')}
                              infoBody=""
                            />
                          ]}
                        />
                      
                      <View style={{marginTop: width* 0.05}}></View>
                      <Chunk2L 
                        header="Entrepre
                        neurship Courses "
                        info={[
                            <Chunk2Info
                              infoHeader="Foundations of Business & Marketing"
                              image={require('../assets/business-1.jpg')}
                              infoBody="Foundations of Business & Marketing is an introductory course designed to inform students about careers in various sectors of business, as well as basic business concepts."
                            />,
                            <Chunk2Info
                              infoHeader="Entrepreneurship 1"
                              image={require('../assets/business-1.jpg')}
                              infoBody="Entrepreneurship 1 is the second course in the Entrepreneurship program of study designed to inform students about careers related 
to starting and running a business. Students prepare for the business world by examining basic principles in management, finance, 
and marketing as they apply to entrepreneurship."
                            />,
                            <Chunk2Info
                              infoHeader="Entrepreneurship 2"
                              image={require('../assets/business-1.jpg')}
                              infoBody="Entrepreneurship 2 is the third course in the Entrepreneurship program of study designed to prepare students for the world of small 
business by combining principles in operations, finance and accounting, marketing, and ethical practices. "
                            />

                            
                          ]}
                      />
                      <View style={{marginTop: width* 0.05}}></View>
                      <Chunk2R
                        header="Financial Management Courses"
                        info={[
                            <Chunk2Info
                              infoHeader="Foundations of Business & Marketing"
                              image={require('../assets/business-stock.jpg')}
                              infoBody="Foundations of Business & Marketing is an introductory course designed to inform students about careers in various sectors of business, as well as basic business concepts."
                            />,
                            <Chunk2Info
                              infoHeader="Principles of Finance & Economics"
                              image={require('../assets/business-stock.jpg')}
                              infoBody="Principles of Finance & Economics is the second course for Financial Management program of study designed to inform students 
about the basics of economics, finance, and accounting."
                            />,
                            <Chunk2Info
                              infoHeader="Accounting"
                              image={require('../assets/business-stock.jpg')}
                              infoBody="Accounting is the third course for Financial Management program of study designed to inform students about basic procedures of 
accounting. Upon completion of the course, a proficient student will demonstrate various accounting and basic business transactions, 
and apply the full accounting cycle, analyze financial data, and explain ethical behavior in the accounting field."
                            />
                          ]}
                      />

                      <View style={{marginTop: width* 0.05}}></View>
                      <Chunk2L
                        header="Marketing Course"
                        info={[
                            <Chunk2Info
                              infoHeader="Foundations of Business & Marketing"
                              image={require('../assets/business-2.jpg')}
                              infoBody="Foundations of Business & Marketing is an introductory course designed to inform students about careers in various sectors of business, as well as basic business concepts."
                            />,
                            <Chunk2Info
                              infoHeader="Advertising & Public Relations"
                              image={require('../assets/business-2.jpg')}
                              infoBody="Advertising & Public Relations is the second course in the Marketing Management program of study designed to prepare students 
for the marketing world by examining basic principles in advertising, such as market segmentation, research, and building 
promotional campaigns."
                            />,
                            <Chunk2Info
                              infoHeader="Digital Marketing & Market Analytics"
                              image={require('../assets/business-2.jpg')}
                              infoBody="Digital Marketing & Market Analytics is the third course in the Marketing Management program of study designed to in social media 
marketing. Upon completion of the course, a proficient student will be able to describe and apply the process of building a 
promotional campaign through digital means and the applied use of data contained in these methods to drive market research."
                            />
                          ]}
                      />

                      <View style={{marginTop: width* 0.05}}></View>
              

               <View style={{ marginTop: width * 0.05 }}></View>
               <Chunk2R
                  header="Related Club"
                  info={[
                     <Chunk2Info
                        infoHeader="DECA"
                        image={require('../assets/DECA.jpg')}
                        infoBody="DECA, or Distributive Education Clubs of America, is an international organization that prepares high school and college students for careers in business. Founded in 1946, DECA focuses on developing emerging leaders and entrepreneurs in fields such as marketing, finance, hospitality, and management. The organization provides educational programs and resources to enhance classroom instruction and enrich the learning experience for over 230,000 high school members and 15,000 collegiate members worldwide. "
                     />
                  ]}
               />

               <View style={{ marginTop: width * 0.05 }}></View>
               <YouTubePlayer
               videoId ='Fj7Azxn9Xkk'
               style = {{height: 500, width: 500}}
               />

               <Footer />
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
   },
   videoChunk: {
      marginTop: 100,
      marginBottom: 150,
      height: 600,
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
   },
   video: {
      marginBottom: 50,
      width: 640
   }
})
