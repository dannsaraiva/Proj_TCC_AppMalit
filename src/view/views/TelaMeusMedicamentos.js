import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, VirtualizedList, Modal, KeyboardAvoidingView } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação biblioteca para exibir o alerta.
import Toast from "react-native-toast-message";

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemMed";
const rotaExclusao = "/DeletarMed/";
const rotaAlteracao = "/AtualizarMed/";

//Código da tela.
const TelaMeusMedicamentos = ({ navigation }) => {

    //Variável para chamar a API após a exclusão.
    const [apiListagem, setApiListagem] = useState(false);

    //Pop-up para mostrat ao usuário.
    const mensagemSucesso = () => {
        Toast.show({
            type: 'error',
            text1: 'Medicamento excluído'
        });
    };

    const mensagemErro = () => {
        Toast.show({
            type: 'error',
            text1: 'Tente novamente'
        });
    };

    //Variáveis para os medicamentos listado ao carregar a tela.
    const [medicamentos, setMedicamentos] = useState([]);
    const [medicamentosPes, setMedicamentosPes] = useState([]);

    //Habilitar o componete Modal.
    const [modalEditar, setModalEditar] = useState(false);

    //Api para listar os medicamentos cadastrados.
    useEffect(() => {

        api.get(rota, {

        }).then((response) => {

            setMedicamentos(response.data.data);
            setMedicamentosPes(response.data.data);
            setApiListagem(true);

        }).catch((error) => {

            console.log(error);
        });
    }, [apiListagem]);

    //Construção da API, para excluir os medicamentos.
    const excluirMedicamento = (valor) => {
        api.delete(rotaExclusao + valor, {

        }).then((response) => {

            mensagemSucesso();
            setModalEditar(false);
            setApiListagem(false);

        }).catch((error) => {

            mensagemErro();
        })
    };

    //Construção da API para atualizar os dados dos medicamentos.
    // const atualizarMedicamento = (valor) => {
    //     api.put(rotaAlteracao + valor, {

    //         nome_med: "Alterado",
    //         descricao: "Aletardo1",
    //         quantidade: "7",

    //     }).then((response) => {

    //         console.log("Atualizado");
    //     }).catch((error) => {

    //         console.log("Erro:" + error)
    //     })
    // };

    //Função para pesquisar os medicamentos listados.
    const pesquisaMedicamento = (nome) => {

        let pesq = JSON.parse(JSON.stringify(medicamentosPes));
        setMedicamentos(pesq.filter((n) => n.nome_med.includes(nome)))
    };

    //Parâmetros do VirtualizedList.
    const getItemCount = () => medicamentos.length;

    const getItem = (medicamentos, index) => medicamentos[index];

    const [editarMedicamento, setEditarMedicamento] = useState(false);

    //Renderiza a tela do VirtualizedList.
    const renderItem = ({ item }) => (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.NavegacaoMenuMedicamentos} >
                <Image style={styles.logoMeusMedicamentos} source={require('../images/medicine.png')} />

                <View style={styles.espacoTextosMeusMedicamentos}>
                    <Text style={styles.nomeMeusMedicamentos}>{item.nome_med}</Text>
                    <Text style={styles.descricaoMeusMedicamentos}>{item.descricao}</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    setModalEditar(true)
                    setEditarMedicamento(item)
                }}

                    style={{
                        position: 'absolute', right: 10,
                        bottom: 5
                    }}>
                    <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/trash.png')} />
                </TouchableOpacity>
            </View >
        </View >
    );

    //Código do front.
    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.container}
            keyboardVerticalOffset={-100}>

            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <Text style={styles.textoCabecalho}>Meus medicamentos</Text>
                </View>

                {/* Input de pesquisa. */}
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.espacopesquisarMedicamentos}>
                        <Image style={styles.logoPesquisarMedicamentos} source={require('../images/search.png')} />
                        <TextInput style={styles.inputPesquisarMedicamentos} placeholder='Pesquisar ...'
                            placeholderTextColor={"#000"}
                            // autoCapitalize='none'

                            onChangeText={(nome) => pesquisaMedicamento(nome)}
                        />
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

                {/* Mini janela para edição do medicamento: */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalEditar}
                        onRequestClose={() => {
                            setModalEditar(modalEditar);
                        }}>
                        <View style={styles.espacoModal}>
                            <View style={styles.modalViewMeusMedicamentos}>

                                <Text style={styles.modalTitulo}>Excluir o medicamento:</Text>

                                <Text style={styles.tituloSenha}>Nome:</Text>
                                <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.nome_med} </TextInput>

                                <Text style={styles.tituloSenha}>Descrição:</Text>
                                <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.descricao}</TextInput>

                                <Text style={styles.tituloSenha}>Quantidade:</Text>
                                <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.quantidade}</TextInput>

                                <Text style={styles.tituloSenha}>Data do primeiro consumo:</Text>
                                <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.data}</TextInput>

                                <Text style={styles.tituloSenha}>Horario do primeiro consumo:</Text>
                                <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.hora}</TextInput>

                                <View style={styles.espacoBotaoModal}>
                                    <TouchableOpacity
                                        style={styles.botaoVoltar}
                                        onPress={() => setModalEditar(false)}>
                                        <Text style={styles.textStyle}>Voltar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.botaoSalvarPerfil}
                                        onPress={() =>
                                            excluirMedicamento(editarMedicamento.id_med)
                                        }>
                                        <Text style={styles.textStyle}>Excluir</Text>
                                    </TouchableOpacity>

                                    {/* <TouchableOpacity
                                        style={styles.botaoSalvarPerfil}
                                        onPress={() =>
                                            atualizarMedicamento(item.id_med)
                                        }>
                                        <Text style={styles.textStyle}>Salvar</Text>
                                    </TouchableOpacity> */}
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>

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
        </KeyboardAvoidingView>
    )
};

export default TelaMeusMedicamentos;