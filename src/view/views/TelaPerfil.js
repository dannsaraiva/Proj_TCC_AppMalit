import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, Alert } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemCpfAll/";


const TelaPerfil = ({ navigation, route }) => {

    const user = route.params.user;

    const [retorno, setRetorno] = useState(null);

    const [nome, setNome] = useState("a");
    const [cpf, setCpf] = useState("b");
    const [dataNasc, setDataNasc] = useState("c");
    const [telefone, setTelefone] = useState("d");
    const [email, setEmail] = useState("e");
    const [senha, setSenha] = useState("f");

    useEffect(() => {

        if (retorno != null) {

            setNome(retorno.nome_Usuarios);
            setCpf(retorno.cpf_Usuarios);
            setDataNasc(retorno.dataNasc_Usuarios);
            setTelefone(retorno.telefone_Usuarios);
            setEmail(retorno.email_Usuarios);
            setSenha(retorno.senha_Usuarios);

        }

    }, [retorno]);

    //Construção da API.
    useEffect(() => {
        api.get(rota + user
            , {

            }).then((response) => {
                setRetorno(response.data.data);

            }).catch((error) => {
                console.log(error);

            })
    }, []);

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
                    <Text style={styles.textoInputPerfil}>{senha}</Text>


                    {/* <TextInput style={styles.textoInputPerfil} placeholder='E-mail:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputPerfil} placeholder='E-mail:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputPerfil} placeholder='Data de nascimento:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputPerfil} placeholder='Telefone:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputPerfil} placeholder='CPF:' placeholderTextColor={'#000'} /> */}
                </View>
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

        </View>
    )
}

export default TelaPerfil;