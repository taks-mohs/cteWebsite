import { Text, View, StyleSheet, FlatList } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import React from 'react';
import search from '../modules/search'
import { useSearchParams } from 'expo-router/build/hooks';

export default function results({route}) {
    const myData = useSearchParams()
    console.log(myData)
    return (
        <View>
            <TopBar />
            <View style={styles.container}>
                
                <FlatList>
                </FlatList>
                <Text>Query: {myData.queryData}</Text>
                <Text>URL: {myData.urlData}</Text>
                <Text>Clicked: {myData.clickedData}</Text>

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