import React, { useState } from 'react';
import {
  useFonts,
  Neuton_200ExtraLight,
  Neuton_300Light,
  Neuton_400Regular,
  Neuton_400Regular_Italic,
  Neuton_700Bold,
  Neuton_800ExtraBold,
} from '@expo-google-fonts/neuton';
import { View, ScrollView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import MainButton from './MainButton';

const styles = StyleSheet.create({
  surveyContainer: {
    backgroundColor: 'black',
  },
  questionText: {
    fontFamily: 'neutonRegular',
    fontSize: 30,
    marginBottom: 10,
  },
  questionsFont: {
    fontFamily: 'oswaldsemibold',
    fontSize: 30,
    marginBottom: 10,
  },
  answerContainer: {
    fontSize: 15,
    padding: 3,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

const Survey = () => {
  useFonts({
    'neutonExtraLight': Neuton_200ExtraLight,
    'neutonRegular': Neuton_400Regular,
  })

  const questions = [
    {
      id: '1',
      question: 'What do you enjoy?',
      options:
        [
          'Hands-on learning',
          'Owning a business',
          'Technology',
          'Health',
          'Design'
        ]
    },
    {
      id: '2',
      question: 'What do you already find enjoyable?',
      options:
        [
          'Learning and Working on Engines',
          'Planning, Designing, Constructing',
          'Working with and Understanding Code',
          'Cooking',
          'Styling',
        ],
    },
    {
      id: '3',
      question: 'How many years of experience do you have in',
      options:
        [
          'NONE',
          'Around 6 Months',
          '1 Years',
          '2+ Years',
        ],
    }
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);

    }
    console.log('hi')
  };

  return (
    <View>
      {currentQuestion < questions.length ? (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <View>
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedOption(option)}
              >
                <View>
                  <Text style={[styles.answerContainer, { backgroundColor: selectedOption === option ? 'lightgray' : 'transparent' }]}>
                    {option}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.buttonContainer}>
            <MainButton onPress={handleBack} disabled={currentQuestion === 0 ? true : false}> BACK </MainButton>
            <MainButton onPress={handleNext} disabled={!selectedOption}> NEXT </MainButton>
          </View>
        </View>
      ) : (
        <Text style={styles.questionText}>Your Pathway Would Be..</Text>
      )
      }
    </View >
  );
};

export default Survey;