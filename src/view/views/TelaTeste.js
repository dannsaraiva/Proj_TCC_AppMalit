import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, Modal } from 'react-native';

// Importação do firebase.
import { ref, update } from "firebase/database";
import { bd } from '../../services/config.firebase';

//Estilização.
import styles from '../styles/Style';

const TelaTeste = ({ navigation }) => {

    //Habilitando a maleta para entrar em teste.
    useEffect(() => {
        update(ref(bd, 'maleta/'),
            {

                funcaoalarme: false,
            }).then(() => {

                console.log("Entrou");
            }).catch((error) => {

                console.log(error);
            });
    }, []);

    //Desativando a maleta para testes.
    const desativaTeste = () => {
        update(ref(bd, 'maleta/'),
            {

                funcaoalarme: true,
            }).then(() => {

                console.log("Desativa")
            }).catch((error) => {

                console.log(error);
            });
    };

    const [numeroCompartimento, setNumeroCompartimento] = useState(null);

    //Teste dos compartimentos.
    //Compartimento 1.
    const testeCompartimentoUm = () => {

        update(ref(bd, "maleta/" + "C1"),
            {

                led_status: true,
            })
            .then(() => {

                setNumeroCompartimento("01")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("02")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("03")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("04")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("05")
                setModalVisibleCompartimento(true, numeroCompartimento) / setModalVisibleCompartimento(true)
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

                setNumeroCompartimento("06")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("07")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("08")
                setModalVisibleCompartimento(true, numeroCompartimento)
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

                setNumeroCompartimento("09")
                setModalVisibleCompartimento(true, numeroCompartimento)
            }).catch((error) => {

                console.log(error);
            });
    };

    //Buzzer.
    const testeBuzzer = () => {
        update(ref(bd, 'maleta/'), {

            buzzer_status: true,
        })
            .then(() => {

                setModalVisibleAltoFalante(true)
            }).catch((error) => {

                console.log(error);
            })
    };

    //Todas as leds.
    const testeLEDS = () => {
        update(ref(bd, 'maleta/'), {

            todososalarmes: true,
        })
            .then(() => {

                setModalVisibleTodasLeds(true)
            }).catch((error) => {

                console.log(error);
            })
    };

    //Habilitar o componete Modal.
    const [modalVisibleAltoFalante, setModalVisibleAltoFalante] = useState(false);
    const [modalVisibleCompartimento, setModalVisibleCompartimento] = useState(false);
    const [modalVisibleTodasLeds, setModalVisibleTodasLeds] = useState(false);

    //Codigo da tela.
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Teste maleta</Text>
            </View>

            {/* Espaço dos botões: */}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={styles.fundoTeste}>

                    {/* Botão um: */}
                    <View style={styles.espacoFundo}>
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={() => { testeCompartimentoUm() }}>

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
                            onPress={testeBuzzer}>
                            <Image style={styles.logoBotaoTeste}
                                source={require('../images/volume.png')} />
                        </TouchableOpacity>

                        {/* Botão de todas as leds */}
                        <TouchableOpacity style={styles.botaoTeste}
                            onPress={testeLEDS}>
                            <Image style={styles.logoBotaoTeste}
                                source={require('../images/conduziu.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Mini janela para validar o compartimento: */}
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleCompartimento}
                    onRequestClose={() => {
                        setModalVisibleCompartimento(!modalVisibleCompartimento, numeroCompartimento);
                    }}>
                    <View style={styles.espacoModal}>
                        <View style={styles.modalViewTeste}>

                            <Text style={styles.modalTitulo}>Teste do compartimento</Text>
                            <Image style={styles.logoAltofalanteTeste}
                                source={require('../images/conduziu.png')} />

                            <Text style={styles.textoModalTeste}>O compartimento {numeroCompartimento} acendeu?</Text>

                            <View style={styles.espacoBotaoModal}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}

                                    onPress={() => {
                                        setModalVisibleCompartimento(!modalVisibleCompartimento)
                                        Alert.alert("Tente novamente !")
                                    }}>

                                    <Text style={styles.textStyle}>Não</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoSalvarPerfil}
                                    onPress={() => setModalVisibleCompartimento(!modalVisibleCompartimento)}>
                                    <Text style={styles.textStyle}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleAltoFalante}
                    onRequestClose={() => {
                        setModalVisibleAltoFalante(!modalVisibleAltoFalante);
                    }}>
                    <View style={styles.espacoModal}>
                        <View style={styles.modalViewTeste}>

                            <Text style={styles.modalTitulo}>Teste de alto falante</Text>
                            <Image style={styles.logoAltofalanteTeste}
                                source={require('../images/volume.png')} />

                            <Text style={styles.textoModalTeste}>Emitiu algum som?</Text>

                            <View style={styles.espacoBotaoModal}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}

                                    onPress={() => {
                                        setModalVisibleAltoFalante(!modalVisibleAltoFalante)
                                        Alert.alert("Tente novamente !")
                                    }}>

                                    <Text style={styles.textStyle}>Não</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoSalvarPerfil}
                                    onPress={() => setModalVisibleAltoFalante(!modalVisibleAltoFalante)}>
                                    <Text style={styles.textStyle}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleTodasLeds}
                    onRequestClose={() => {
                        setModalVisibleTodasLeds(!modalVisibleTodasLeds);
                    }}>
                    <View style={styles.espacoModal}>
                        <View style={styles.modalViewTeste}>

                            <Text style={styles.modalTitulo}>Teste de todas as leds</Text>
                            <Image style={styles.logoAltofalanteTeste}
                                source={require('../images/conduziu.png')} />

                            <Text style={styles.textoModalTeste}>Acendeu todas as leds?</Text>

                            <View style={styles.espacoBotaoModal}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}

                                    onPress={() => {
                                        setModalVisibleTodasLeds(!modalVisibleTodasLeds)
                                        Alert.alert("Tente novamente !")
                                    }}>

                                    <Text style={styles.textStyle}>Não</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoSalvarPerfil}
                                    onPress={() => setModalVisibleTodasLeds(!modalVisibleTodasLeds)}>
                                    <Text style={styles.textStyle}>Sim</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Navegação inferior: */}
            <View style={styles.footerNavegacao}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => {
                        navigation.goBack();
                        desativaTeste();
                    }}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => {
                        navigation.navigate('Perfil');
                        desativaTeste();
                    }}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/user.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => {
                        navigation.navigate('Maleta');
                        desativaTeste()
                    }}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
};

export default TelaTeste;