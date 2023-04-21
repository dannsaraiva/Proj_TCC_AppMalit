import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemMed";

const TelaMeusMedicamentos = ({ navigation }) => {

    const [medicamentos, setMedicamentos] = useState([]);

    //Construção da API, para pegar os medicamentos.
    useEffect(() => {

        api.get(rota, {

        }).then((response) => {
            setMedicamentos(response.data.data);

        }).catch((error) => {
            console.log(error);
        });
    }, []);

    //Construção da tela.
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Meus medicamentos</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.espacopesquisarMedicamentos}>
                    <Image style={styles.logoPesquisarMedicamentos} source={require('../images/search.png')} />
                    <TextInput disableFullscreenUI style={styles.inputPesquisarMedicamentos} placeholder='Pesquisar ...' placeholderTextColor={"#000"} />
                </View>
            </View>

            <ScrollView style={{ marginBottom: 125 }}>
                <View style={styles.espacoMeusMedicamentos}>
                    {/* Função para carregar todos os medicamentos. */}
                    {medicamentos.map(item => (

                        <View style={styles.NavegacaoMenuMedicamentos} >
                            <Image style={styles.logoMeusMedicamentos} source={require('../images/medicine.png')} />

                            <View style={styles.espacoTextosMeusMedicamentos}>
                                <Text style={styles.nomeMeusMedicamentos}>{item.nome_Medicamentos}</Text>
                                <Text style={styles.descricaoMeusMedicamentos}>{item.descricao_Medicamentos}</Text>
                            </View>

                            <TouchableOpacity style={{
                                position: 'absolute', right: 10,
                                bottom: 5
                            }}>
                                <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                            </TouchableOpacity>

                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Navegação inferior: */}
            <View style={styles.footerNavegacaoMedicamentos}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/user.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Perfil</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Maleta')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text></TouchableOpacity>
            </View>
        </View >
    )
};

export default TelaMeusMedicamentos;