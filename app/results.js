import { Text, View, StyleSheet, FlatList } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import React from 'react';


export default function results(props) {
    
    return (
        <View>
            <TopBar />
            <View style={styles.container}>
                <FlatList>
                </FlatList>
                <Text style={styles.title}>Received Data</Text>
                <Text>Title: {1}</Text>
                <Text>URL: {props.url}</Text>
                <Text>Clicked: {props.clicked}</Text>
                {/* <Text>Score: {myData.score && myData.score.join(', ')}</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 250,
        marginHorizontal: 100,
        flex: 1,
        padding: 20,
        backgroundColor: Colors.primary,
    }
})