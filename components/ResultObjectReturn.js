import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


const ResultObjectReturn = ({ url, title, content }) => {
    const handlePress = () => {
        if (url) {
            router.push(url); // Navigate to the URL when pressed
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    content: {
        fontSize: 14,
        color: '#555',
    },
});

export default ResultObjectReturn;