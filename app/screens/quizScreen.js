import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Modal } from 'react-native'
import arrowIcon from '../assets/home/arrow.svg'
import data from '../util/questionsList'
import ChoicesButton from '../components/ChoicesButton'
import HomeScreen from './homeScreen'

const quizScreen = ({props, navigation}) => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentSelected, setCurrentSelected] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNext, setShowNext] = useState(false)
    const [showResult, setShowResult] = useState(true)
    const [result, setResult] = useState(false)

    
    const validateAnswer = (selectedOption) => {
        let answer = allQuestions[currentQuestionIndex]['answer'];
        setCurrentSelected(selectedOption);
        setCorrectAnswer(answer);
        setIsOptionDisabled(true);
        if (selectedOption == answer) {
            setScore(score + 1)
        }
        setShowNext(true)
    }

    const nextQuestion = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            //MODAL TO ADD
            setShowResult(false)
            setResult(true)
        }
        else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentSelected(null);
            setCorrectAnswer(null);
            setIsOptionDisabled(false);
            setShowNext(false)
        }
    }
    const restartQuiz = () => {
        setShowResult(true)
        setResult(false)
        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentSelected(null);
        setCorrectAnswer(null);
        setIsOptionDisabled(false);
        setShowNext(false)
    }


    {/* TO RENDERS*/ }
    const renderNumberQuestion = () => {
        return (
            <View style={styles.headerStyle}>
                <Text style={styles.questionTitle}> Question </Text>
                <Text style={styles.questionNowStyle}> {currentQuestionIndex + 1} </Text>
                <Text style={styles.questionTotalStyle}>/ {allQuestions.length} </Text>
            </View>
        )
    }


    const renderHeader = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '90%' }}>
                    <Text style={styles.currentQuestionStyle}> {allQuestions[currentQuestionIndex]?.samplequestion}</Text>
                </View>
            </View >
        )
    }

    const renderFooter = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity key={option}
                            onPress={() => validateAnswer(option)}
                            disable={isOptionDisabled}
                            style={{
                                backgroundColor: option == correctAnswer ? '#458B00' : option == currentSelected ? '#FF0000' : '#82A8CC',
                                width: 330,
                                height: 50,
                                textAlign: 'center',
                                justifyContent: 'center',
                                marginBottom: 10,
                                borderRadius: 5
                            }}>
                            <Text style={styles.optionTextStyle}> {option} </Text>

                        </TouchableOpacity>

                    ))
                }
            </View >
        )
    }

    const renderNext = () => {
        if (showNext) {
            return (
                <TouchableOpacity onPress={nextQuestion} style={styles.btn}>
                    <Image style={styles.nextBtn} source={arrowIcon} />
                    <Text style={styles.nextLabel}>Next</Text>
                </TouchableOpacity>
            )
        }
        else {
            return null
        }

    }

    return (
        <SafeAreaView style={styles.mainContainer}>

            {
                showResult ? (
                    <View style={styles.quizContainer}>

                        {/*TITLE*/}
                        <View style={{ flex: .5, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                            {renderNumberQuestion()}
                        </View>

                        <View style={{ flex: 1.6, backgroundColor: 'white', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5, width: '95%', }} >
                            {renderHeader()}
                        </View>


                        <View style={{ flex: 2, width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                            {renderFooter()}
                        </View >

                        <View style={{ flex: .9, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            {renderNext()}
                        </View>
                    </View >
                ) : null
            }

            {
                result ? (
                    <View style={styles.resultStyle}>
                        <View style={styles.resultDisplayStyle}>

                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{score > (allQuestions.length / 2) ? 'Well Done ⭐' : 'Sorry 😞'}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 30, color: score > (allQuestions.length / 2) ? 'green' : 'red'
                                }}>{score}</Text>
                                <Text style={{
                                    fontSize: 30, color: 'black'
                                }}> / {allQuestions.length}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginleft: 5, padding: 10 }}>
                                <ChoicesButton  onPress={() => navigation.navigate("home")} displayText={"Menu"} />
                                <ChoicesButton onPress={restartQuiz} displayText={"Restart Quiz"} />
                            </View>

                        </View>
                    </View>
                ) : null
            }

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2A292E',
    },
    quizContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'relative'
    },
    questionNowStyle: {
        color: "white",
        fontSize: '2rem'
    },
    questionTotalStyle: {
        color: "white",
        fontSize: '1rem'
    },
    hello: {
        color: 'white',
        fontSize: '4rem'
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    questionTitle: {
        color: 'white',
        fontSize: '2rem'
    },
    currentQuestionStyle: {
        color: 'black',
        fontSize: '2rem'
    },
    optionTextStyle: {
        color: 'black'
    },
    nextLabel: {
        marginTop: -16,
        fontFamily: 'BalooTamma2_400Regular',
        color: '#FEE5D8' //WHITE
    },
    btn: {
        textAlign: 'center',
    },
    nextBtn: {
        width: '100px',
        height: '100px',
    },

    //RESULT COMPONENT
    resultStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    resultDisplayStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 300,
        backgroundColor: 'white',
        marginBottom: 100,
        borderRadius: 8
    }

})

export default quizScreen