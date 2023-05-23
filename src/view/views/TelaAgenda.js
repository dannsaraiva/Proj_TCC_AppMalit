import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';

//Estilização.
import styles from '../styles/Style';

//Importação do calendario.
import Calendario from '../componentes/Calendario';

//Importação da biblioteca de dropList.
import { SelectList } from 'react-native-dropdown-select-list';

//Importação do hookform.
import { useForm, Controller } from "react-hook-form";

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemMed";


const TelaAgenda = ({ navigation }) => {

    //Habilitar o componete Modal.
    const [modalVisible, setModalVisible] = useState(false);

    //Configuração do DropList.
    const [resetDropdown, setResetDropdown] = useState(false);

    //API para abastecer a base no DropList.
    useEffect(() => {

        api.get(rota, {
        }).then((response) => {

            let dados = response.data.data.map((item) => {
                return { key: item.id_med, value: item.nome_med }
            })

            console.log(response.data.data[10].diaFirebase)
            setMedicamentos(dados);

        }).catch((error) => {

            console.log(error)
        })

    }, []);

    //Variáveis para prencher os DropList.
    const [medicamentos, setMedicamentos] = useState("");

    const compartimento = [
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


    //Função para exibir os detalhes do medicamento
    const [mostrarInputs, setMostrarInputs] = useState(false);

    const mostrarInput = () => {
        setMostrarInputs(true)
    };

    //Parâmetros do hook-form.
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });

    const [dadosAtribui, setDadosAtribui] = useState("");

    //Captura os dados e atribui ao data.
    const onSubmit = data => {
        setDadosAtribui(data)
        enviaFirebase(data)
    };

    const enviaFirebase = () => {
        console.log("Tete");
        setResetDropdown(true);
        setModalVisible(!modalVisible);
    }

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
                                            data={medicamentos}
                                            value={value}
                                            save="value"
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
                                            data={compartimento}
                                            value={value}
                                            save="value"

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

        </View>
    )
};

export default TelaAgenda;