import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/homeScreen'
import QuizScreen from './app/screens/quizScreen'
import HelpScreen from './app/screens/helpScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'home', headerShown: false }}/>
        <Stack.Screen name="quiz" component={QuizScreen} options={{ title: 'quiz', headerShown: false }} />
        <Stack.Screen name="help" component={HelpScreen} options={{ title: 'help', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App