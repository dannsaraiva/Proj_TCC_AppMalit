import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, Alert } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Mascara do Input.
import { TextInputMask } from "react-native-masked-text";

//Importação da API.
import api from "../../services/api";
const rota = "/Listagem";

const TelaPerfil = ({ navigation, route }) => {


    useState(() => {

        //Construção da API.
        api.get(rota, {




        }).then((response) => {
            console.log(response.data.data);
            var a = response.data.data;
            console.log(a.data);



        }).catch((error) => {
            console.log(error)

        })
    }, [])



    const nome = "Daniel";



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

                <View>
                    <Text style={styles.textoInputCadastro} >{nome}</Text>
                    <TextInput style={styles.textoInputCadastro} placeholder='E-mail:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputCadastro} placeholder='Data de nascimento:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputCadastro} placeholder='Telefone:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInputCadastro} placeholder='CPF:' placeholderTextColor={'#000'} />
                </View>
            </View>


            <View style={styles.footerNavegacaoPerfil}>
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