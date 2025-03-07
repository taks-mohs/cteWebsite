import { View, StyleSheet, Pressable, Text } from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.secondary,
        borderRadius: 5,
    },
    text: {
        padding: 5,
        color: 'white',
        fontSize: 16,
    },
    buttonEnabled: {
      backgroundColor: Colors.secondary,
    },
    buttonDisabled: {
      backgroundColor: '#A9A9A9',
    },
});

function MainButton (props){
    
    return (
        <View>
            <Pressable disabled={props.disabled} style={[styles.button, props.disabled ? styles.buttonDisabled : styles.buttonEnabled]} onPress={props.onPress} >
                <Text style={styles.text}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default MainButton;