import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemCpfAll/";

//Importação do AsyncStorage.
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaPerfil = ({ navigation, route }) => {

    //AsyncStorage armazena os dados.
    const [user, setUser] = useState(null);

    //Buscar os dados do usuário.
    const Buscar = async (chave) => {
        const valor = await AsyncStorage.getItem(chave)
        setUser(valor);
    };
    Buscar("01");

    //Variaveis.
    const [retorno, setRetorno] = useState(null);

    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [dataNasc, setDataNasc] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    useEffect(() => {

        if (retorno != null) {

            let dataTratada = retorno.dataNasc_Usuarios.split('-').reverse().join('/');

            setNome(retorno.nome_Usuarios);
            setCpf(retorno.cpf_Usuarios);
            setDataNasc(dataTratada);
            setTelefone(retorno.telefone_Usuarios);
            setEmail(retorno.email_Usuarios);
            setSenha(retorno.senha_Usuarios);
        }
    }, [retorno]);

    //Construção da API.
    useEffect(() => {

        if (user != null) {
            api.get(rota + user, {

            }).then((response) => {
                setRetorno(response.data.data);

            }).catch((error) => {
                console.log(error);

            })
        }
    }, [user]);

    //Habilitar o componete Modal.
    const [modalVisible, setModalVisible] = useState(false);

    //Codigo do front.
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Perfil</Text>
            </View>

            <View>

                <View style={styles.espacologoPerfil}>
                    <Image style={styles.logoPerfil}
                        source={require('../images/user.png')} />
                </View>

                <View style={styles.espacoTextoPerfil}>

                    <Text style={styles.textoInputPerfil}>{nome}</Text>
                    <Text style={styles.textoInputPerfil}>{email}</Text>
                    <Text style={styles.textoInputPerfil}>{dataNasc}</Text>
                    <Text style={styles.textoInputPerfil}>{telefone}</Text>
                    <Text style={styles.textoInputPerfil}>{cpf}</Text>

                    <View style={styles.textoInputPerfil}>
                        <TextInput editable={false} style={styles.textoSenhaPerfil}
                            secureTextEntry={true} >{senha}
                        </TextInput>

                        <TouchableOpacity style={{ position: 'absolute', right: 17, bottom: 7 }}
                            onPress={() => setModalVisible(true)}>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/show.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.espacoModal}>
                        <View style={styles.modalView}>

                            <Text style={styles.modalTitulo}>Alterar senha:</Text>

                            <Text style={styles.tituloSenha}>Senha antiga:</Text>
                            <Text style={styles.textoInputPerfil}>{senha}</Text>

                            <Text style={styles.tituloSenha}>Nova senha:</Text>
                            <TextInput style={styles.textoInputPerfil}></TextInput>

                            <View style={styles.espacoBotaoModal}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Voltar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoSalvarPerfil}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.footerNavegacaoMedicamentos}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/menu-aberto.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Menu</Text></TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Maleta')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text></TouchableOpacity>
            </View>
        </View >
    )
}

export default TelaPerfil;