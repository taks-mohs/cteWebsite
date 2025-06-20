import { Text, View, StyleSheet, FlatList } from 'react-native'
import TopBar from '../components/topBar'
import Colors from '../components/colors'
import React, { useState } from 'react';
import search from '../modules/search'
import { useSearchParams } from 'expo-router/build/hooks';
import ResultObjectReturn from '../components/ResultObjectReturn';
import { ScrollView } from 'react-native-web';

export default function results() {
    const [list, setList] = useState(null)
    const queryData = useSearchParams().get('queryData')
    if (list === null) {
        setList(search(queryData));
    }

    return (
        <View>
            <TopBar />
            <ScrollView style={{ height: 500 }}>
                <View style={styles.container}>
                    <FlatList
                        data={list}
                        renderItem={({ item }) => {
                            console.log("I am rendering")
                            return (
                                <ResultObjectReturn title={item.title} content={item.content} url={item.url} />
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginHorizontal: 100,
        flex: 1,
        padding: 20,
        backgroundColor: Colors.primary,
    }
})