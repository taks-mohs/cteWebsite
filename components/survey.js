import React, { useState } from 'react';
import { useFonts, Oswald_300Light, Oswald_600SemiBold, Oswald_500Medium } from '@expo-google-fonts/oswald'
import { View, ScrollView, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Survey = () => {
  const questions = [
    {
      question: 'What Can You See Yourself Doing?',
      options: 
      ['Reading, Writing,Understanding Code', 
        'Complete and Interpreting Construction Blueprints', 
        'Graphic Design', 
        'Creating and Making Video Films',
        'Working with Marketing'
      ],
    },
    {
      question: 'Which do you find enjoyable?',
      options: ['Hands-on Activity', 'Computer Usage', 'Editing', 'Running a Business'],
    },
    {
      question: 'Do you have any '
    }
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <ScrollView>
      <View>
        {currentQuestion < questions.length ? (
          <View>
            <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
            {questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedOption(option)}
              >
                <Text style={{  backgroundColor: selectedOption === option ? 'gray' : 'white' }}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
            <Button title="Next" onPress={handleNext} disabled={!selectedOption} />
          </View>
        ) : (
          <Text>Thank you for completing the survey!</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Survey;

const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    marginBottom: 10,
  },
  
});