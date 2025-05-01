import { StyleSheet, View, ImageBackground, ScrollView, useWindowDimensions } from 'react-native'
import Colors from '../components/colors'
import TopBar from '../components/topBar'
import HeaderChunk from '../components/Templates/HeaderChunk.js'
import Chunk1 from '../components/Templates/Chunk1'
import Chunk2L from '../components/Templates/Chunk2L'
import Chunk2R from '../components/Templates/Chunk2R'
import Chunk2Info from '../components/Templates/Chunk2Info'
import Footer from '../components/footer'

export default function template() {
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
  
  return (
    <View style={styles.background}>
      <TopBar />
      <ImageBackground style={styles.bgImg} source={require('../assets/placeholder.jpg')}>
        <ScrollView>
          <View style={{marginTop: width * 0.05}}></View>
          <HeaderChunk
          header="HeaderChunk"
          />
          <View style ={{marginTop: width * 0.05}}></View>
          <Chunk1
            header="Chunk 1"
            buttonlabel="Button"
            link="/"
          />
          <View style={{marginTop: width* 0.05}}></View>
          <Chunk2L 
            header="Chunk 2L"
            info={[
                <Chunk2Info
                  infoHeader="Info 1"
                  image={require('../assets/placeholder.jpg')}
                  infoBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />,
                <Chunk2Info
                  infoHeader="Info 2"
                  image={require('../assets/placeholder.jpg')}
                  infoBody="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />,
                <Chunk2Info
                  infoHeader="Info 3"
                  image={require('../assets/placeholder.jpg')}
                  infoBody="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                />
              ]}
          />
          <View style={{marginTop: width* 0.05}}></View>
          <Chunk2R
            header="Chunk 2R"
            info={[
                <Chunk2Info
                  infoHeader="Info 1"
                  image={require('../assets/placeholder.jpg')}
                  infoBody="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />,
                <Chunk2Info
                  infoHeader="Info 2"
                  image={require('../assets/placeholder.jpg')}
                  infoBody="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                />,
                <Chunk2Info
                  infoHeader="Info 3"
                  image={require('../assets/placeholder.jpg')}
                  infoBody="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                />
              ]}
          />
          <View style={{marginTop: width * 0.1}}></View>
          <Footer/>
        </ScrollView>
      </ImageBackground>
    </View>
  )  
}