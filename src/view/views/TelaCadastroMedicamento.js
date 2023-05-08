import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from "react-native";

//Importação da biblioteca de dropList.
import { SelectList } from 'react-native-dropdown-select-list';
import dropListPrimeiroConsumo from "../componentes/dropListPrimeiroConsumo";

//
import DatePicker from "react-native-date-picker";


//Importação biblioteca para exibir o alerta.
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message"
const mensagemSucesso = () => {
    Toast.show({
        type: 'info',
        text1: 'Medicamento foi cadastrado',
    });
};

const mensagemErro = () => {
    Toast.show({
        type: 'error',
        text1: 'Medicamento não foi cadastrado, tente novamente',
    });
};

//Importação do hookform.
import { useForm, Controller } from "react-hook-form";

//Importação da API.
import api from "../../services/api";
const rota = "/CadastroMed";

//Mascara do Input.
import { TextInputMask } from "react-native-masked-text";

//Estilização da página.
import styles from '../styles/Style';

const TelaCadastroMedicamento = ({ navigation }) => {

    //Parâmetros do hook-form.
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });

    //Captura os dados e atribui ao data.
    const onSubmit = data => sendMedicamento(data);

    //API para enviar os dados.
    const sendMedicamento = data => {

        //Tratamento da data.
        let dataPrimeiroConsumoTratada = dataPrimeiroConsumo.split('-').reverse().join('-')

        console.log(dataPrimeiroConsumo)
        console.log(horarioPrimeiroConsumo)

        api.post(rota, {
            nome_Medicamento: data.nome,
            descricao_Medicamento: data.descricao,
            quantidade_Medicamento: data.quantidade,
            dia_Med: dataPrimeiroConsumoTratada,
            hora_Med: horarioPrimeiroConsumo

        }).then((data) => {
            console.log("Medicamento salvo.")
            mensagemSucesso();
            reset();
        }).catch((response) => {
            console.log(`Erro ao salvar o medicamento. ${response}`)
            mensagemErro();
        })
    };







    // 
    const [intervalo, setIntervalo] = useState(null);
    const [diaConsumo, setDiaConsumo] = useState(null);

    const intervaloHoras = [
        { key: '1', value: '1 - Em uma hora' },
        { key: '2', value: '2 - Em duas horas' },
        { key: '3', value: '3 - Em três horas' },
        { key: '4', value: '4 - Em quatro horas' },
        { key: '5', value: '5 - Em cinco horas' },
        { key: '6', value: '6 - Em seis horas' },
        { key: '7', value: '7 - Em sete horas' },
        { key: '8', value: '8 - Em oito horas' },
        { key: '9', value: '9 - Em nove horas' },
        { key: '10', value: '10 - Em dez horas' },
        { key: '11', value: '11 - Em onze horas' },
        { key: '12', value: '12 - Em doze horas' },
    ];

    const diasConsumo = [
        { key: '1', value: '1 - um dia' },
        { key: '2', value: '2 - dois dias' },
        { key: '3', value: '3 - três dias' },
        { key: '4', value: '4 - quatro dias' },
        { key: '5', value: '5 - cinco dias' },
        { key: '6', value: '6 - seis dias' },
        { key: '7', value: '7 - sete dias' },
        { key: '8', value: '14 - duas semanas' },
        { key: '9', value: 'constantemente' },
    ];

    // Valida o campo Primeiro consumo:
    const [primeiroConsumo, setPrimeiroConsumo] = useState(new Date());
    const [open, setOpen] = useState(false);

    const [dataPrimeiroConsumo, setDataPrimeiroConsumo] = useState("");
    const [horarioPrimeiroConsumo, setHorarioPrimeiroConsumo] = useState("");

    let [textoPrimeiroConsumo, setTextoPrimeiroConsumo] = useState("Primeiro consumo:");

    const validarPrimeiroConsumo = () => {
        if (primeiroConsumo != new Date()) {
            let data = primeiroConsumo.toLocaleDateString('pt-BR').split('/').join('-');
            setDataPrimeiroConsumo(data);


            let horario = primeiroConsumo.toLocaleTimeString('pt-BR').slice(0, 5);
            setHorarioPrimeiroConsumo(horario);

            setTextoPrimeiroConsumo(data + " " + horario);
        }
    };

    // Validar os campos Intervalo de horas e Dias de consumo.
    // Variáveis dos erros.
    const [erroCampoHoras, setErroCampoHoras] = useState("");
    const [erroCampoDias, setErroCampoDias] = useState("");

    // Função para validar os dois campos.
    const validaIntervalo = () => {
        if (intervalo === null) {

            setErroCampoHoras("Selecione um horario");

            setTimeout(() => {
                setErroCampoHoras("");
            }, 5000);

        } else {

            setErroCampoHoras("");
            // return true;
        }
    };


    // 
    const [confir, setConfir] = useState(false);
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        setOpen(false);

        validarPrimeiroConsumo();
    }, [confir]);

    useEffect(() => {
        if (open === true) {

            setMostrar(true)
        }
    }, [open]);

    // Codigo da tela:
    return (
        <View style={styles.container}>

            {/* Navegação inferior: */}
            <View style={styles.cabecalhoChat}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoCabecalhoCadastroMedicamentos}
                        source={require('../images/botao-voltar.png')} />
                </TouchableOpacity>
                <Text style={styles.textoCabecalhoChat}>Cadastre um medicamento</Text>
            </View>

            {/* <dropListPrimeiroConsumo></dropListPrimeiroConsumo> */}

            <ScrollView>
                <View style={styles.espacoCadastroMedicamento}>

                    {/* Input com mensagens de erros. */}
                    {errors.nome && <Text style={styles.textoAlertaInput}>Digite o nome</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput style={styles.textoInputMedicamento} placeholder='Nome:' placeholderTextColor={"#000"}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="nome"
                    />

                    {errors.descricao && <Text style={styles.textoAlertaInput}>...</Text>}
                    <Controller
                        control={control}
                        rules={{

                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput style={styles.textoInputMedicamento} placeholder='Descrição:' placeholderTextColor={"#000"}
                                maxLength={30}

                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="descricao"
                    />

                    {errors.quantidade && <Text style={styles.textoAlertaInput}>Digite a quantidade</Text>}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput style={styles.textoInputMedicamento} placeholder='Quantidade:' placeholderTextColor={"#000"}
                                keyboardType="numeric"
                                maxLength={3}

                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="quantidade"
                    />

                    {/* Operador ternário para subir a Modal. */}
                    {
                        (mostrar === false) ?
                            <View>
                                <TouchableOpacity onPress={() => { setOpen(true) }}>

                                    {errors.primeiroConsumo && <Text style={styles.textoAlertaInput}>Selecione a data do primeiro consumo</Text>}
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput style={styles.textoInputMedicamento} editable={false}
                                                placeholder="Primeiro consumo:" placeholderTextColor={"#000"}>
                                                <Text style={{ color: "#000" }}>
                                                    Primeiro consumo:
                                                </Text>
                                            </TextInput>
                                        )}
                                        name="primeiroConsumo"
                                    />

                                </TouchableOpacity>
                            </View>
                            :
                            (
                                <View>
                                    <TouchableOpacity onPress={() => setOpen(true)}>
                                        <TextInput style={styles.textoInputMedicamento} editable={false}
                                            placeholder="Primeiro consumo:" placeholderTextColor={"#000"}>
                                            <Text style={{ color: "#000" }}>
                                                {textoPrimeiroConsumo}
                                            </Text>
                                        </TextInput>
                                    </TouchableOpacity>

                                    <DatePicker
                                        title={"Selecione a data do primeiro consumo"}
                                        confirmText="Confirmar"
                                        cancelText="Cancelar"
                                        textColor="#000"

                                        mode="datetime"

                                        locale="pt-BR"
                                        is24hourSource="locale"

                                        modal
                                        open={open}
                                        date={primeiroConsumo}
                                        onConfirm={(primeiroConsumo) => {
                                            setPrimeiroConsumo(primeiroConsumo);
                                            setConfir(true);
                                        }}
                                        onCancel={() => {
                                            setOpen(false);
                                        }} />
                                </View>
                            )}


                    {/* Espaco para o dropList: */}
                    <View listCadastroMedicamento>

                        {/* Droplist do intervalo: */}
                        <Text style={styles.textoAlertaInput}>{erroCampoHoras}</Text>
                        <SelectList
                            boxStyles={styles.listCadastroMedicamento}
                            inputStyles={styles.inputListCadastroMedicamentos}
                            dropdownStyles={styles.dropStyleCadastroMedicamentos}
                            dropdownItemStyles={styles.dropListCadastroMedicamentos}
                            dropdownTextStyles={styles.dropTextCadastroMedicamentos}
                            disabledItemStyles={{ color: "#000" }}
                            disabledTextStyles={{ color: "#000" }}

                            searchicon={true}
                            arrowicon={true}
                            search={true}
                            searchPlaceholder="Digite ..."
                            notFoundText="Não encontrado ..."

                            placeholder="Intervalo de horas:"

                            maxHeight={200}

                            setSelected={(intervalo) => setIntervalo(intervalo)}
                            data={intervaloHoras}
                            save="value" />




                        <Text style={styles.textoAlertaInput}>{erroCampoDias}</Text>
                        <SelectList
                            boxStyles={styles.listCadastroMedicamento}
                            inputStyles={styles.inputListCadastroMedicamentos}
                            dropdownStyles={styles.dropStyleCadastroMedicamentos}
                            dropdownItemStyles={styles.dropListCadastroMedicamentos}
                            dropdownTextStyles={styles.dropTextCadastroMedicamentos}
                            disabledItemStyles
                            disabledTextStyles

                            searchicon={true}
                            arrowicon={true}
                            search={true}
                            searchPlaceholder="Digite ..."
                            notFoundText="Não encontrado ..."

                            placeholder="Dias de consumo:"
                            maxHeight={200}

                            setSelected={(diaConsumo) => setDiaConsumo(diaConsumo)}
                            data={diasConsumo}
                            save="value" />



                    </View>


                    {/* Botão para salvar. */}
                    <View style={styles.espacoBotaoSalvar}>
                        <TouchableOpacity style={styles.botaoSalvar}
                            onPress={() => {
                                Alert.alert(
                                    'Cadastro do medicamento',
                                    'Você deseja salvar ?',
                                    [
                                        { text: 'Não', },
                                        {
                                            text: 'Sim', onPress:
                                                // handleSubmit(onSubmit)
                                                validaIntervalo()
                                        },
                                    ],
                                    { cancelable: false });
                                return false;
                            }}>
                            <Text style={styles.textoBotaoSalvar}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <Toast
                position='top'
                bottomOffset={40}
                visibilityTime={3000}
            />

            {/* Navegação inferior: */}
            {/* <View style={styles.footerNavegacaoMedicamentos}>
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
            </View> */}
        </View >
    )
};

export default TelaCadastroMedicamento;