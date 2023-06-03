import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, VirtualizedList, Modal } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação biblioteca para exibir o alerta.
import Toast from "react-native-toast-message";

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemMed";
const rotaExclusao = "/DeletarMed/";
const rotaAlteracao = "/AtualizarMed/";

const TelaMeusMedicamentos = ({ navigation }) => {

    //Mensagens para exibir para o usuário.
    const mensagemSucesso = () => {
        Toast.show({
            type: 'error',
            text1: 'Medicamento excluído',
        });
    };

    const mensagemErro = () => {
        Toast.show({
            type: 'error',
            text1: 'Tente novamente',
        });
    };

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

    //Construção da API, para excluir os medicamentos.
    const excluirMedicamento = (valor) => {
        api.delete(rotaExclusao + valor, {

        }).then((response) => {

            mensagemSucesso();
            setModalVisible(!modalVisible)

        }).catch((error) => {

            mensagemErro()
        })
    };

    // Construção da API para atualizar os dados dos medicamentos.
    const atualizarMedicamento = (valor) => {
        api.put(rotaAlteracao + valor, {

            nome_med: "Alterado",
            descricao: "Aletardo1",
            quantidade: "7",

        }).then((response) => {

            console.log("Atualizado");
        }).catch((error) => {

            console.log("Erro:" + error)
        })
    };

    // Parâmetros do VirtualizedList.
    const getItemCount = () => medicamentos.length;

    const getItem = (medicamentos, index) => medicamentos[index];

    const renderItem = ({ item }) => (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.NavegacaoMenuMedicamentos} >
                <Image style={styles.logoMeusMedicamentos} source={require('../images/medicine.png')} />

                <View style={styles.espacoTextosMeusMedicamentos}>
                    <Text style={styles.nomeMeusMedicamentos}>{item.nome_med}</Text>
                    <Text style={styles.descricaoMeusMedicamentos}>{item.descricao}</Text>
                </View>

                <TouchableOpacity onPress={() => setModalVisible(true)}
                    style={{
                        position: 'absolute', right: 10,
                        bottom: 5
                    }}>
                    <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                </TouchableOpacity>

                {/* Mini janela para edição do medicamento: */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            // Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.espacoModal}>
                            <View style={styles.modalViewMeusMedicamentos}>

                                <Text style={styles.modalTitulo}>Alterar o medicamento:</Text>

                                <Text style={styles.tituloSenha}>Nome:</Text>
                                <TextInput style={styles.textoInputPerfil}>{item.nome_med}</TextInput>

                                <Text style={styles.tituloSenha}>Descrição:</Text>
                                <TextInput style={styles.textoInputPerfil}>{item.descricao}</TextInput>

                                <Text style={styles.tituloSenha}>Quantidade:</Text>
                                <TextInput style={styles.textoInputPerfil}>{item.quantidade}</TextInput>

                                <Text style={styles.tituloSenha}>Data do primeiro consumo:</Text>
                                <TextInput style={styles.textoInputPerfil}>{item.data}</TextInput>

                                <Text style={styles.tituloSenha}>Horario do primeiro consumo:</Text>
                                <TextInput style={styles.textoInputPerfil}>{item.hora}</TextInput>

                                <View style={styles.espacoBotaoModal}>
                                    <TouchableOpacity
                                        style={styles.botaoVoltar}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={styles.textStyle}>Voltar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.botaoSalvarPerfil}
                                        onPress={() =>
                                            excluirMedicamento(item.id_med)
                                        }>
                                        <Text style={styles.textStyle}>Excluir</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.botaoSalvarPerfil}
                                        onPress={() =>
                                            atualizarMedicamento(item.id_med)
                                        }>
                                        <Text style={styles.textStyle}>Salvar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View >
        </View >
    );

    //Habilitar o componete Modal.
    const [modalVisible, setModalVisible] = useState(false);

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

            {/* Função para carregar todos os medicamentos. */}
            <VirtualizedList
                style={styles.espacoMeusMedicamentos}
                data={medicamentos}
                getItemCount={getItemCount}
                getItem={getItem}
                renderItem={renderItem}
                keyExtractor={item => item.id_med}
            />

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
                    <Text style={styles.textoBotaoNavegacao}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Maleta')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text>
                </TouchableOpacity>
            </View>

            {/* Pop-up na tela. */}
            <Toast
                position='top'
                bottomOffset={40}
                visibilityTime={3500}
            />
        </View >
    )
};

export default TelaMeusMedicamentos;