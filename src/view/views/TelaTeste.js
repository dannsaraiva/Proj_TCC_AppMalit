import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, BackHandler } from 'react-native';

// Importação do firebase.
import { ref, set, update } from "firebase/database";
import { bd } from '../componentes/config.firebase';

//Estilização.
import styles from '../styles/Style';

const TelaTeste = ({ navigation }) => {

    //Teste dos compartimentos.
    //Compartimento 1.
    const testeCompartimentoUm = () => {
        update(ref(bd, 'maleta/' + "C1"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 1 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 1 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 1 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 2.
    const testeCompartimentoDois = () => {
        update(ref(bd, 'maleta/' + "C2"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 2 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 2 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 2 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 3.
    const testeCompartimentoTres = () => {
        update(ref(bd, 'maleta/' + "C3"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 3 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 3 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 3 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 4.
    const testeCompartimentoQuatro = () => {
        update(ref(bd, 'maleta/' + "C4"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 4 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 4 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 4 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 5.
    const testeCompartimentoCinco = () => {
        update(ref(bd, 'maleta/' + "C5"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 5 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 5 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 5 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 6.
    const testeCompartimentoSeis = () => {
        update(ref(bd, 'maleta/' + "C6"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 6 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 6 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 6 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 7.
    const testeCompartimentoSete = () => {
        update(ref(bd, 'maleta/' + "C7"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 7 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 7 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 7 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 8.
    const testeCompartimentoOito = () => {
        update(ref(bd, 'maleta/' + "C8"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 8 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 8 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 8 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };

    //Compartimento 9.
    const testeCompartimentoNove = () => {
        update(ref(bd, 'maleta/' + "C9"), {
            led_status: true,
        })
            .then(() => {
                Alert.alert("Maleta", "O compartimento 9 acendeu ?", [
                    { text: "Sim", onPress: () => console.log("Compartimento 9 funcionando !") },
                    { text: "Não", onPress: () => console.log("Compartimento 9 não esta funcionando !!") }
                ])
            }).catch((error) => {
                console.log(error);
            });
    };


    //DESCOMENTAR QUANDO A CONEXÃO COM O BUSER A TODAS AS LEDS ESTIVEREM OK !
    // //Buzzer.
    // const testeBuzzer = () => {
    //     update(ref(bd, 'maleta/' + "C10"), {
    //         led_status: true,
    //     })
    //         .then(() => {
    //             Alert.alert("Maleta", "O alto-falante tocou ?", [
    //                 { text: "Sim", onPress: () => console.log("Buser tocou !") },
    //                 { text: "Não", onPress: () => console.log("Buser não tocou !!") }
    //             ])
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    // };

    // //Todas as leds.
    // const testeLEDS = () => {
    //     update(ref(bd, 'maleta/' + "C11"), {
    //         led_status: true,
    //     })
    //         .then(() => {
    //             Alert.alert("Maleta", "Todas as leds acenderam ?", [
    //                 { text: "Sim", onPress: () => console.log("Todas as LEDS acenderam") },
    //                 { text: "Não", onPress: () => console.log("As leds não acenderam !!") }
    //             ])
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    // };

    
    useEffect(() => {
        console.log("ENtrar em teste")
    }, [])

    //Codigo da tela.
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Teste da maleta</Text>
            </View>

            {/* Espaço dos botões: */}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={styles.fundoTeste}>

                    {/* Botão um: */}
                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={testeCompartimentoUm}>

                            <Text style={styles.textoBotaoTeste}>1</Text>
                        </TouchableOpacity>

                        {/* Botão dois: */}
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoDois}>

                            <Text style={styles.textoBotaoTeste}>2</Text>
                        </TouchableOpacity>

                        {/* Botão três: */}
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoTres}>

                            <Text style={styles.textoBotaoTeste}>3</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Botão quatro: */}
                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoQuatro}>

                            <Text style={styles.textoBotaoTeste}>4</Text>
                        </TouchableOpacity>

                        {/* Botão cinco: */}
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoCinco}>

                            <Text style={styles.textoBotaoTeste}>5</Text>
                        </TouchableOpacity>

                        {/* Botão seis: */}
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoSeis}>

                            <Text style={styles.textoBotaoTeste}>6</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Botão sete: */}
                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoSete}>

                            <Text style={styles.textoBotaoTeste}>7</Text>
                        </TouchableOpacity>

                        {/* Botão oito: */}
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoOito}>

                            <Text style={styles.textoBotaoTeste}>8</Text>
                        </TouchableOpacity>

                        {/* Botão nove: */}
                        <TouchableOpacity style={styles.botaoTeste}

                            onPress={testeCompartimentoNove}>

                            <Text style={styles.textoBotaoTeste}>9</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Botão do buser: */}
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

                        {/* Botão de todas as leds */}
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

            {/* Navegação inferior: */}
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