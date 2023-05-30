import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, Keyboard } from 'react-native';

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
const rota = "/ListagemMed";
const rotaID = "/ListagemMedId/";

// Importação do firebase.
import { ref, set, update } from "firebase/database";
import { bd } from '../../services/config.firebase';

const TelaAgenda = ({ navigation }) => {

    //Pop-up para mostrat ao usuário.
    const mensagemSucesso = () => {
        Toast.show({
            type: 'info',
            text1: 'Medicamento atribuido'
        });
    };

    //Variável para identificar os dados para ir ao Firebase.
    const [idMedicamento, setIdMedicamento] = useState(null);
    const [idCompartimento, setIdCompartimento] = useState(null);

    //Habilitar o componete Modal.
    const [modalVisible, setModalVisible] = useState(false);

    //Configuração do DropList.
    const [resetDropdown, setResetDropdown] = useState(false);

    //Variáveis para prencher os DropList.
    const [medicamentos, setMedicamentos] = useState("");
    const [dropList, setDropList] = useState("");

    const [medicamentoCadastrados, setMedicamentoCadastrados] = useState("");

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

            console.log("Listagem ao carregar")

        }).catch((error) => {

            console.log("Erro API Listagem:" + error)
        })

    }, []);

    //Função para rodar após seleciona o compartimento
    useEffect(() => {

        if (idMedicamento != null) {

            listagemId()
            console.log("useEffect ID");

        }
    }, [idCompartimento]);

    //Variável para armazenar os medicamentos listado por ID.
    const [medicamentoListado, setMedicamentoListado] = useState(null);

    //API para listar os medicamentos por ID.
    const listagemId = () => {

        api.get(rotaID + idMedicamento, {
        }).then((response) => {

            setMedicamentoListado(response.data.data);
            console.log("Listagem - ID")

        }).catch((error) => {

            console.log("Erro API Listagem por ID:" + error)
        })
    };

    //Função para chamar a API Firebase.
    useEffect(() => {

        if (medicamentoListado != null) {

            console.log("useEffect medicamento");
            enviaFirebase();
        }
    }, [medicamentoListado]);

    //Função para exibir os detalhes do medicamento
    const [mostrarInputs, setMostrarInputs] = useState(false);

    const mostrarInput = () => {
        setMostrarInputs(true)
    };

    //Parâmetros do hook-form.
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });



    const [medicamento, setMedicamento] = useState("");

    //Captura os dados e atribui ao data.
    const onSubmit = data => {

        setIdMedicamento(data.medicamento);
        setIdCompartimento(data.compartimento);
    };

    //API para mandar os dados para a Maleta.
    const enviaFirebase = () => {

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

                console.log("Foi")
            }).catch((error) => {

                console.log("Erro API Firebase:" + error);
            });
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

            <ScrollView>
                <View style={styles.espacoRemedio}>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Botão para atribui medicamento */}
            <TouchableOpacity style={styles.espacoLogoAdicionaRemedio}

                onPress={() => setModalVisible(true)}>

                <Image style={styles.logoAdicionaRemedio} source={require('../images/plus.png')} />
            </TouchableOpacity>

            {/* Mini janela para atribui medicamento: */}
            <View style={styles.centeredView}>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
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
                                            disabledItemStyles={{ color: "#000" }}
                                            disabledTextStyles={{ color: "#000" }}

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
                                            // disabledItemStyles={}
                                            // disabledTextStyles={false}

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

                                            onSelect={mostrarInput}
                                        />
                                    )}
                                    name="compartimento"
                                />

                                {
                                    mostrarInputs && (
                                        <View style={styles.espacoTextoPerfil}>

                                            {/* <Text style={styles.tituloNomeAgenda}>Nome:</Text>
                                            <Text style={styles.textoInputPerfil}>Nome</Text>
                                            <Text style={styles.tituloDescricaoAgenda}>Descrição:</Text>
                                            <Text style={styles.textoInputPerfil}>Horário</Text> */}
                                        </View>
                                    )
                                }
                            </View>

                            <View style={styles.espacoBotaoModalAgenda}>
                                <TouchableOpacity
                                    style={styles.botaoVoltar}
                                    onPress={() => setModalVisible(!modalVisible)}>
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