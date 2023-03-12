import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";

//Estilização da página.
import styles from '../../../Style';

const TelaCadastroMedicamento = ({ navigation }) => {
    //Variáveis para armazenamento dos dados.
    let [nome, setNome] = useState('');
    let [descricao, setDescricao] = useState('');
    let [horario, setHorario] = useState('');
    let [validade, setValidade] = useState('');
    let [quantidade, setQuantidade] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Cadastre um medicamento</Text>
            </View>

            <View style={styles.dadosUsuario}>
                <TextInput style={styles.textoInput} placeholder='Nome:' placeholderTextColor={"#000"}
                    onChangeText={(nome) => setNome(nome)}
                    value={nome} />

                <TextInput style={styles.textoInput} placeholder='Descrição:' placeholderTextColor={"#000"}
                    onChangeText={(descricao) => setDescricao(descricao)}
                    value={descricao} />

                <TextInput style={styles.textoInput} placeholder='Horário:' placeholderTextColor={"#000"} keyboardType="numeric"
                    onChangeText={(horario) => setHorario(horario)}
                    value={horario} />

                <TextInput style={styles.textoInput} placeholder='Validade:' placeholderTextColor={"#000"} keyboardType="numeric"
                    onChangeText={(validade) => setValidade(validade)}
                    value={validade} />

                <TextInput style={styles.textoInput} placeholder='Quantidade:' placeholderTextColor={"#000"} keyboardType="numeric"
                    onChangeText={(quantidade) => setQuantidade(quantidade)}
                    value={quantidade} />

                <View style={styles.espacoBotaoSalvar}>
                    <TouchableOpacity style={styles.botaoSalvar} onPress={() => {
                        Alert.alert('Seu medicamento foi salvo !' + nome + " " + descricao + " " + horario + " " + validade + " " + quantidade);
                    }}>
                        <Text style={styles.textoBotaoNavegacao}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footerNavegacaoMedicamentos}>
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

                <TouchableOpacity style={styles.botaoNavegacao}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default TelaCadastroMedicamento;