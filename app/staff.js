import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
import TopBar from '../components/topBar'
import TeacherDescription from '../components/TeacherDescription';

export default function staff() {
  return (
    <View style = {styles.container}>
      <ImageBackground
        style = {styles.backgroundImage}
        source = {require('../assets/placeholder.jpg')}
      />
      <TopBar/>
      <ScrollView style = {styles.scrollContainer}>
        <TeacherDescription
          name = "Mr. Hashizume"
          source = {require('../assets/TeacherHeadshots/Hashizume-E.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mrs. Hashizume"
          source = {require('../assets/TeacherHeadshots/Hashizume-L.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Ishikawa"
          source = {require('../assets/TeacherHeadshots/Ishikawa.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Komar"
          source = {require('../assets/TeacherHeadshots/Komar.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Ms. Kramer"
          source = {require('../assets/TeacherHeadshots/Kramer.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Makekau"
          source = {require('../assets/TeacherHeadshots/Makekau.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Mitsuda"
          source = {require('../assets/TeacherHeadshots/Mitsuda.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Murray"
          source = {require('../assets/TeacherHeadshots/Murray.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Nishimura"
          source = {require('../assets/TeacherHeadshots/Nishimura.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Park"
          source = {require('../assets/TeacherHeadshots/Park.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Ms. Perkins"
          source = {require('../assets/TeacherHeadshots/Perkins.jpg')}
          description = 'description'
        />
        <TeacherDescription
          name = "Mr. Takahashi"
          source = {require('../assets/TeacherHeadshots/Takahashi.jpg')}
          description = 'description'
        />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
   backgroundImage: {
          alignSelf: 'center',
          opacity: '78%',
          position: "absolute",
          
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
  },
  addScroll: {
      margin: 1000,
  },
  scrollContainer: {
      flex: 1,
  },
  
})