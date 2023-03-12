import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, BackHandler } from 'react-native';

//Estilização.
import styles from '../../../Style';

const TelaTeste = ({ navigation }) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        }, [])
    })
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Teste da maleta</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={styles.fundoTeste}>
                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "O compartimento 1 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 1 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 1 não esta funcionando !!") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "O compartimento 2 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 2 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 2 não esta funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>2</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "O compartimento 3 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 3 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 3 não esta funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Compartimento 4 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 4 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 4 não está funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>4</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Compartimento 5 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 5 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 5 não está funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>5</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Compartimento 6 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 6 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 6 não está funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>6</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Compartimento 7 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 7 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 7 não esta funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>7</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Compartimento 8 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 8 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 8 não esta funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>8</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Compartimento 9 acendeu ?", [
                                    { text: "Sim", onPress: () => console.log("Compartimento 9 funcionando !") },
                                    { text: "Não", onPress: () => console.log("Compartimento 9 não está funcionando !") }
                                ])
                            }}>
                            <Text style={styles.textoBotaoTeste}>9</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Emitiu um som ?", [
                                    { text: "Sim", onPress: () => console.log("Emitiu som !") },
                                    { text: "Não", onPress: () => console.log("Não emitiu som !") }
                                ])
                            }}>
                            <Image style={styles.logoBotaoTeste}
                                source={require('../images/volume.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => {
                                Alert.alert("Maleta", "Todas as LEDS acenderam?", [
                                    { text: "Sim", onPress: () => console.log("Todas as LEDS acenderam !!") },
                                    { text: "Não", onPress: () => console.log("Não acenderam as LEDS") }
                                ])
                            }}>
                            <Image style={styles.logoBotaoTeste}
                                source={require('../images/conduziu.png')} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={styles.footerNavegacao}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/user.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Maleta')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default TelaTeste;