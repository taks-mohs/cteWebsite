import { View, Text, Image, Pressable, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import Colors from './colors'
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown'
import { router } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function topBar() {
  const { width } = useWindowDimensions()
  useFonts({
    'oswaldlight': Oswald_300Light,
    'oswaldmedium': Oswald_500Medium,
    'oswaldsemibold': Oswald_600SemiBold
  })
  const [query, setQuery] = useState('');


  const HoverableText = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
      <TouchableOpacity
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Text style={[styles.topButtonStyle, { color: isHovering ? 'gray' : Colors.primary }]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  };

  function searchHandle() {
    if (query.trim() !== '') {
      router.replace({ "pathname": "./results", params: { queryData: query } }); // Pass myData as a parameter
    }
  }

  const styles = StyleSheet.create({
    topBar: {
      padding: width * 0.010,
      alignItems: 'center',
      backgroundColor: Colors.secondary,
      flexDirection: 'row'
    },
    topImageStyle: {
      marginLeft: width * 0.005,
      height: width * 0.05,
      width: width * 0.05
    },
    titleStyle: {
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: width * 0.025,
      marginLeft: width * 0.01,
      marginRight: width * 0.1,
      fontFamily: 'oswaldsemibold'
    },
    topButtonStyle: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      marginRight: width * 0.02,
      fontFamily: 'oswaldmedium'
    },
    dropdownButtonStyle: {
      color: Colors.secondary,
      fontSize: width * 0.015,
      fontFamily: 'oswaldmedium'
    },
    dropdownContainer: {
      backgroundColor: Colors.primary,
      height: width * 0.25,
      width: width * 0.1,
    },
    searchContainer: {
      borderWidth: 2,
      borderColor: Colors.primary,
      alignItems: 'center',
      flexDirection: 'row'
    },
    searchStyle: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      fontFamily: 'oswaldmedium',
      opacity: 0.5,
      marginLeft: width * 0.01
    },
    placeholder: {
      color: Colors.primary,
      fontSize: width * 0.0175,
      marginLeft: width * 0.01
    }
  })



  return (
    <View style={styles.topBar}>
      <Link href={'/'}>
        <Pressable>
          <Image
            style={styles.topImageStyle}
            source={require('../assets/download.jpg')}
          />
        </Pressable>
      </Link>


      <Link href={'/'}>
        <Pressable>
          <Text style={styles.titleStyle}>Career & Technical Education</Text>
        </Pressable>
      </Link>

      <Pressable>
        <Dropdown
          confirmSelectItem showsVerticalScrollIndicator={false}
          placeholder= <HoverableText> Departments </HoverableText>
          placeholderStyle={{ color: Colors.primary, fontSize: width * 0.0175, fontFamily: 'oswaldmedium' }}
          itemTextStyle={styles.dropdownButtonStyle} 
          containerStyle={styles.dropdownContainer}
          iconStyle={{ height: width * 0.015, width: width * 0.015, marginRight: width * 0.01 }} 
          onChange={(item) => { setValue(item.value); }} 
          onConfirmSelectItem={(item) => (router.navigate(item.href))}
          labelField="label" 
          valueField="value"
          data={
            [
              { label: "Automotive", value: "Automotive", href: "/Automotive" },
              { label: "Building & Construction", value: "B&C", href: "/Building&Construction" },
              { label: 'Business', value: "Bus", href: "/Business" },
              { label: "Computer Science", value: "CS", href: "/ComputerScience" },
              { label: "Culinary", value: "Culi", href: "/Culinary" },
              { label: "Engineering", value: "Engi", href: "/Engineering" },
              { label: "Fashion", value: "Fash", href: "/Fashion" },
              { label: "Film", value: "Film", href: "/Film" },
              { label: "Graphics", value: "Graph", href: "/Graphics" },
              { label: "Health Services", value: "Health", href: "/Health" }
            ]
          } />
      </Pressable>

      <Link href={'/Staff'}>
        <Pressable>
          <HoverableText>Staff</HoverableText>
        </Pressable>
      </Link>

      <Link href={'/ContactUs'}>
        <Pressable>
          <HoverableText>Contact Us</HoverableText>
        </Pressable>
      </Link>

      <Link href={'/About'}>
        <Pressable>
          <HoverableText>About</HoverableText>
        </Pressable>
      </Link>

      <View style={styles.searchContainer}>
        <Pressable onPress={searchHandle}>
          <FontAwesome style={styles.placeholder} name="search" size={20} color="white" />
        </Pressable>

        <TextInput
          style={styles.searchStyle}
          placeholder='Search'
          onSubmitEditing={searchHandle}
          onChangeText={text => setQuery(text)}
          value={query}
        />
      </View>
    </View>
  )
}
