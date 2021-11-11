import React, {BackHandler} from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import { RockSalt_400Regular } from '@expo-google-fonts/rock-salt'
import { BalooTamma2_400Regular, BalooTamma2_500Medium, BalooTamma2_600SemiBold, BalooTamma2_700Bold, BalooTamma2_800ExtraBold } from '@expo-google-fonts/baloo-tamma-2'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import helpIcon from '../assets/home/help.svg'
import playIcon from '../assets/home/play.svg'
import quitIcon from '../assets/home/quit.svg'
import logoIcon from '../assets/home/logo.svg'

const home = ({props,navigation}) => {
    let [fontsLoaded, error] = useFonts({
        RockSalt_400Regular,
        BalooTamma2_400Regular,
        BalooTamma2_500Medium,
        BalooTamma2_600SemiBold,
        BalooTamma2_700Bold,
        BalooTamma2_800ExtraBold
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }


const quitApp = () =>{
    BackHandler.exitApp();
} 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                {/* APP NAME & LOGO */}
                <Text style={styles.appName}>Spot On</Text>
                <Image style={styles.logo} source={logoIcon} />
            </View>

            <View style={styles.iconsContainer}>
                {/* BUTTON HELP */}
                <TouchableOpacity onPress={() => navigation.navigate("help")} style={styles.btn}>
                    <Image style={styles.icons} source={helpIcon} />
                    <Text style={styles.btnLabel}>Help</Text>
                </TouchableOpacity>

                {/* BUTTON PLAY */}
                <TouchableOpacity onPress={() => navigation.navigate("quiz")} style={styles.btn}>
                    <Image style={styles.icons} source={playIcon} />
                    <Text style={styles.btnLabel}>Play</Text>
                </TouchableOpacity>

                {/* BUTTON QUIT */}
                <TouchableOpacity style={styles.btn}>
                    <Image style={styles.icons} source={quitIcon} />
                    <Text style={styles.btnLabel}>Quit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2A292E',
    },
    logoContainer: {
        width: '100%',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconsContainer: {
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icons: {
        width: '100px',
        height: '100px'
    },
    logo: {
        marginVertical: -85,
        width: '270px',
        height: '270px'
    },
    btn: {
        textAlign: 'center'
    },
    appName: {
        fontFamily: 'RockSalt_400Regular',
        marginTop: '80px',
        color: '#FEE5D8', //WHITE
        fontSize: '2.5rem',
    },
    btnLabel: {
        fontFamily: 'BalooTamma2_400Regular',
        color: '#FEE5D8' //WHITE
    }

})