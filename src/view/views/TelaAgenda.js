import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Modal, VirtualizedList } from 'react-native';

//Estilização.
import styles from '../styles/Style';

//Importação do calendario.
import Calendario from '../componentes/Calendario';

//Importação da biblioteca de dropList.
import { SelectList } from 'react-native-dropdown-select-list';

//Importação do hookform.
import { useForm, Controller } from "react-hook-form";

//Importação biblioteca para exibir o alerta.
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemMedNullCompartimento";
const rotaID = "/ListagemMedId/";
const rotaComp = "/AtualizarMedCompartimento/";
const rotaListComp = "/ListagemMedCompartimento";
const rotaExclusao = "/DeletarCompartimento/";

// Importação do firebase.
import { ref, update } from "firebase/database";
import { bd } from '../../services/config.firebase';

const TelaAgenda = ({ navigation }) => {

    //Pop-up para mostrat ao usuário.
    const mensagemSucesso = () => {
        Toast.show({
            type: 'info',
            text1: 'Medicamento atribuido'
        });
    };
    const mensagemSucessoExcluir = () => {
        Toast.show({
            type: 'info',
            text1: 'Medicamento alterado',
            onHide: setApiListComp(true)
        });
    };

    //Variável para identificar os dados para ir ao Firebase.
    const [idMedicamento, setIdMedicamento] = useState(null);
    const [idCompartimento, setIdCompartimento] = useState(null);

    //Variáveis para chamar as API.
    const [apiFire, setApiFire] = useState(false);
    const [apiComp, setApiCom] = useState(false);
    const [apiListComp, setApiListComp] = useState(false);

    //Habilitar o componete Modal.
    const [modalAtribuir, setModalAtribuir] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);

    //Configuração do DropList.
    const [resetDropdown, setResetDropdown] = useState(false);

    //Variáveis para prencher os DropList.
    const [dropList, setDropList] = useState("");

    //Compartimento da API.
    const compartimentos = [
        { key: '1', value: '1º Compartimento' },
        { key: '2', value: '2º Compartimento' },
        { key: '3', value: '3º Compartimento' },
        { key: '4', value: '4º Compartimento' },
        { key: '5', value: '5º Compartimento' },
        { key: '6', value: '6º Compartimento' },
        { key: '7', value: '7º Compartimento' },
        { key: '8', value: '8º Compartimento' },
        { key: '9', value: '9º Compartimento' }
    ];

    //API para abastecer a base no DropList.
    useEffect(() => {

        api.get(rota, {
        }).then((response) => {

            //Receber e atribui os valores ao DropList.
            let dadosDropList = response.data.data.map((item) => {
                return {
                    key: item.id_med,
                    value: item.nome_med
                }
            });
            setDropList(dadosDropList);

            console.log("Listagem do DropList");

        }).catch((error) => {

            console.log("Erro API DropList: " + error)
        })
    }, []);

    const [medicamentoListadoCompartimentos, setMedicamentoListadoCompartimentos] = useState([]);

    useEffect(() => {

        api.get(rotaListComp, {
        }).then((response) => {

            setMedicamentoListadoCompartimentos(response.data.data);
            console.log("Listou por compartimento");
        }).catch((erro) => {

            console.log("Erro listagem por compartimento " + erro);
        })
    }, [apiListComp]);

    //Parâmetros do VirtualizedList.
    const getItemCount = () => medicamentoListadoCompartimentos.length;

    const getItem = (medicamentoListadoCompartimentos, index) => medicamentoListadoCompartimentos[index];

    const [editarMedicamento, setEditarMedicamento] = useState(false);

    //Renderiza a tela do VirtualizedList.
    const renderItem = ({ item }) => (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.NavegacaoAgendaMedicamentos} >
                <Image style={styles.logoMeusMedicamentos} source={require('../images/medicine.png')} />

                <View style={styles.espacoTextosAgendaMedicamentos}>
                    <View style={styles.espacoDoisTextosAgendaMedicamentos}>
                        <Text style={styles.nomeMedicamentoAgendaMedicamentos}>{item.nome_med} - {item.hora} </Text>
                    </View>

                    <Text style={styles.descricaoAgendaMedicamentos}>Compartimento: {item.CompartimentosFirebase}</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    setModalEditar(true)
                    setEditarMedicamento(item)
                }}

                    style={{
                        position: 'absolute', right: 10,
                        bottom: 5
                    }}>
                    <Image style={styles.logoAgendaEditMedicamentos} source={require('../images/trash.png')} />
                </TouchableOpacity>
            </View >
        </View >
    );

    //Variável para armazenar os medicamentos listado por ID.
    const [medicamentoListado, setMedicamentoListado] = useState(null);

    //API para listar os medicamentos por ID.
    useEffect(() => {

        if (idMedicamento != null) {
            api.get(rotaID + idMedicamento, {
            }).then((response) => {

                setMedicamentoListado(response.data.data);
                console.log("Listagem por ID")

            }).catch((error) => {

                console.log("Erro API listagem por ID: " + error)
            })
        }
    }, [idMedicamento]);

    //Função para chamar a API Firebase.
    useEffect(() => {

        if (medicamentoListado != null) {

            console.log("Chama API Firebase");
            setApiFire(true);
        }
    }, [medicamentoListado]);

    //Parâmetros do hook-form.
    const [formulario, setFormulario] = useState(null);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });

    //Captura os dados e atribui ao data.
    const onSubmit = data => {

        setFormulario(data);
        setIdMedicamento(data.medicamento);
        setIdCompartimento(data.compartimento);
    };

    //API para mandar os dados para a Maleta.
    useEffect(() => {

        if (apiFire === true) {
            //Manda o valor para o firebase e atribui ao compartimento.
            update(ref(bd, "maleta/" + "C" + idCompartimento),
                {

                    horarioInicial: medicamentoListado.horarioInicialFirebase,
                    minutoInicial: medicamentoListado.minutoInicialFirebase,
                    diaInicial: medicamentoListado.diaInicialFirebase,
                    mesInicial: medicamentoListado.mesInicialFirebase,
                    intervaloHoras: medicamentoListado.intervaloHorasFirebase,
                    diasConsumo: medicamentoListado.diasConsumoFirebase,

                })
                .then((response) => {

                    setModalAtribuir(false);
                    setResetDropdown(true);
                    mensagemSucesso();
                    setApiFire(false);
                    setApiCom(true);
                    setApiListComp(true);
                    console.log("API Firebase" + response);

                }).catch((error) => {

                    console.log("Erro API Firebase:" + error);
                });
        }
    }, [apiFire]);

    //Api para enviar o compartimento selecionado pelo usuário.
    useEffect(() => {

        if (apiComp === true) {

            api.put(rotaComp + idMedicamento, {

                CompartimentosFirebase: idCompartimento
            }).then((response) => {

                console.log("API salvar o compartimento")
                setApiCom(false);

            }).catch((error) => {

                console.log("Erro ao salvar o compartimento: " + error)
            })
        };
    }, [apiComp]);

    //Construção da API, para excluir os medicamentos.
    const excluirMedicamento = (valor) => {
        api.delete(rotaExclusao + valor, {

        }).then((response) => {

            console.log("Medicamento sem compartimento");
            mensagemSucessoExcluir();
            setModalEditar(false);
            setApiListComp(true);

        }).catch((error) => {

            mensagemErro();
            console.log("Erro medicamento sem compartimento");

        })
    };

    //Codigo da tela.
    return (
        <View style={styles.container}>

            {/* Navegação superior: */}
            <View style={styles.cabecalhoChat}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoCabecalhoChat}
                        source={require('../images/botao-voltar.png')} />
                </TouchableOpacity>
                <Text style={styles.textoCabecalhoChat}>Agenda</Text>
            </View>

            {/* Calendario */}
            <Calendario />


            {/* Função para carregar todos os medicamentos. */}
            <VirtualizedList
                style={styles.espacoAgendaMedicamentos}
                data={medicamentoListadoCompartimentos}
                getItemCount={getItemCount}
                getItem={getItem}
                renderItem={renderItem}
                keyExtractor={item => item.id_med}
            />

            {/* Mini janela para edição do medicamento: */}
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalEditar}
                    onRequestClose={() => {
                        setModalEditar(modalEditar);
                    }}>
                    <View style={styles.espacoModal}>
                        <View style={styles.modalViewAgendaMedicamentos}>

                            <Text style={styles.modalTitulo}>Desatribuir o medicamento:</Text>

                            <Text style={styles.tituloSenha}>Nome:</Text>
                            <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.nome_med} </TextInput>

                            <Text style={styles.tituloSenha}>Compartimento:</Text>
                            <TextInput editable={false} style={styles.textoInputPerfil}>{editarMedicamento.CompartimentosFirebase}</TextInput>

                            <View style={styles.espacoBotaoModal}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}
                                    onPress={() => setModalEditar(false)}>
                                    <Text style={styles.textStyle}>Não</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoSalvarPerfil}
                                    onPress={() =>
                                        excluirMedicamento(editarMedicamento.id_med)
                                    }>
                                    <Text style={styles.textStyle}>Sim</Text>
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

            {/* Botão para atribui medicamento */}
            <TouchableOpacity style={styles.espacoLogoAdicionaRemedio}

                onPress={() => setModalAtribuir(true)}>

                <Image style={styles.logoAdicionaRemedio} source={require('../images/plus.png')} />
            </TouchableOpacity>

            {/* Mini janela para atribui medicamento: */}
            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalAtribuir}
                    onRequestClose={() => {
                        setModalAtribuir(true);
                    }}>

                    <View style={styles.espacoModalAgenda}>
                        <View style={styles.modalViewAgenda}>

                            <Text style={styles.modalTitulo}>Atribuir medicamento:</Text>

                            {/* Espaco para o dropList: */}
                            <View style={{ width: "95%" }}>

                                {/* Droplist do medicamento: */}
                                <Text style={styles.tituloDropListAgenda}>Selecione o medicamento:</Text>
                                {errors.medicamento && <Text style={styles.textoAlertaInput}>Selecione o medicamento</Text>}
                                <Controller

                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <SelectList
                                            boxStyles={styles.listCadastroMedicamento}
                                            inputStyles={styles.inputListCadastroMedicamentos}
                                            dropdownStyles={styles.dropStyleAgenda}
                                            dropdownItemStyles={styles.dropListCadastroMedicamentos}
                                            dropdownTextStyles={styles.dropTextCadastroMedicamentos}

                                            searchicon={true}
                                            arrowicon={true}
                                            search={true}
                                            searchPlaceholder="Digite ..."
                                            notFoundText="Não encontrado ..."

                                            placeholder="Selecione:"
                                            maxHeight={200}

                                            key={resetDropdown ? 'reset' : 'default'}
                                            setSelected={onChange}
                                            data={dropList}
                                            value={value}
                                            save="Key"
                                        />
                                    )}
                                    name="medicamento"
                                />

                                {/* Droplist do compartimento: */}
                                <Text style={styles.tituloDropListAgenda}>Selecione o compartimento:</Text>
                                {errors.compartimento && <Text style={styles.textoAlertaInput}>Selecione o compartimento</Text>}
                                <Controller

                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (

                                        <SelectList
                                            boxStyles={styles.listCadastroMedicamento}
                                            inputStyles={styles.inputListCadastroMedicamentos}
                                            dropdownStyles={styles.dropStyleAgenda}
                                            dropdownItemStyles={styles.dropListCadastroMedicamentos}
                                            dropdownTextStyles={styles.dropTextCadastroMedicamentos}

                                            searchicon={true}
                                            arrowicon={true}
                                            search={true}
                                            searchPlaceholder="Digite ..."
                                            notFoundText="Não encontrado ..."

                                            placeholder="Selecione:"
                                            maxHeight={200}

                                            key={resetDropdown ? 'reset' : 'default'}
                                            setSelected={onChange}
                                            data={compartimentos}
                                            value={value}
                                            save="Key"
                                        />
                                    )}
                                    name="compartimento"
                                />
                            </View>

                            <View style={styles.espacoBotaoModalAgenda}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}
                                    onPress={() => setModalAtribuir(false)}>
                                    <Text style={styles.textStyle}>Voltar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoSalvarPerfil}
                                    onPress={handleSubmit(onSubmit)}>
                                    <Text style={styles.textStyle}>Atribuir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Componente para exibir o Pop-up */}
            <Toast
                position='top'
                bottomOffset={40}
                visibilityTime={3000}
            />
        </View>
    )
};

export default TelaAgenda;