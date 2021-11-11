import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ChoicesButton = (props) => {
    return (
        <TouchableOpacity style={styles.choicesButton} onPress={props.onPress} >
            <Text style={styles.textButton}>{props.displayText} </Text>
        </TouchableOpacity>
    )
}

export default ChoicesButton

const styles = StyleSheet.create({
    choicesButton: {
        width: 140,
        height: 60,
        backgroundColor: '#82A8CC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginLeft: 8
    },
    textButton: {
        fontSize: '1rem',
        color: 'black'
    }
})
