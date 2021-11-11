import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import ChoicesButton from '../components/ChoicesButton'

const helpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.backgroundHelp}> 

            <View style={styles.container}> 
            
            <Text style={styles.titleHelp}> How to play? </Text>

            <Text style={styles.instrucHelp}> Choose the correct word that completes the sentences.  </Text>

            <View>
                 <ChoicesButton  onPress={() => navigation.navigate("home")} displayText={"Menu"} />
          
            </View>
            </View>

        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    backgroundHelp:{
        flex: 1,
        backgroundColor: '#2A292E',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        
        },
    container:{
        backgroundColor: 'white',
        width: 300,
        height: 300,
        marginBottom: 150,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        },
    titleHelp:{
        fontSize: '2rem',
        margin: 5
        },
    instrucHelp:{
        fontSize: '1.2rem',
        margin: 30
        },

})

export default helpScreen
