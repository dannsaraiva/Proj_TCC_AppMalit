import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from "react-native";

//
import { SelectList } from 'react-native-dropdown-select-list';

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
        let dataTratada = data.validade.split('/').reverse().join('-');
        let dataPrimeiroConsumoTratada = dataPrimeiroConsumo.split('-').reverse().join('-');

        api.post(rota, {
            nome_Medicamento: data.nome,
            descricao_Medicamento: data.descricao,
            quantidade_Medicamento: data.quantidade,
            validade_Medicamento: dataTratada,
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
    const [intervalo, setIntervalo] = useState("");
    const [diaConsumo, setDiaConsumo] = useState("");

    const intervaloConsumo = [
        { key: '1', value: '1 - uma vez' },
        { key: '2', value: '2 - duas vezes' },
        { key: '3', value: '3 - três vezes' },
        { key: '4', value: '4 - quatro vezes' },
        { key: '5', value: '5 - cinco vezes' },
        { key: '6', value: '6 - seis vezes' },
        { key: '7', value: '7 - sete vezes' },
        { key: '8', value: '14 - duas semanas' },
        { key: '9', value: 'constantemente' },
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

    console.log(intervalo)
    console.log(diaConsumo)

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


                    {errors.validade && <Text style={styles.textoAlertaInput}>...</Text>}
                    <Controller
                        control={control}
                        rules={{

                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputMask style={styles.textoInputMedicamento} placeholder='Validade:' placeholderTextColor={"#000"}
                                keyboardType="numeric"
                                maxLength={10}

                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY',
                                }}

                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}

                            />
                        )}
                        name="validade" />



                    {/*  */}
                    {errors.primeiroConsumo && <Text style={styles.textoAlertaInput}>Selecione o primeiro consumo</Text>}
                    <Controller
                        control={control}
                        rules={{

                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TouchableOpacity onPress={() => setOpen(true)}>
                                <TextInput style={styles.textoInputMedicamento} editable={false}
                                    placeholder="Primeiro consumo:" placeholderTextColor={"#000"}>
                                    <Text style={{ color: "#000" }}>
                                        {textoPrimeiroConsumo}
                                    </Text>
                                </TextInput>
                            </TouchableOpacity>
                        )}
                        name="primeiroConsumo" />

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
                            setOpen(false)
                            setPrimeiroConsumo(primeiroConsumo)
                            validarPrimeiroConsumo()
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }} />



                    {/*  */}
                    <View listCadastroMedicamento>

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

                            placeholder="Intervalo de consumo:"

                            // Hora e minuto
                            maxHeight={200}

                            setSelected={(intervalo) => setIntervalo(intervalo)}
                            data={intervaloConsumo}
                            save="value" />

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
                            // De 1 a 7
                            // Permanente
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
                                            text: 'Sim', onPress: handleSubmit(onSubmit)
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