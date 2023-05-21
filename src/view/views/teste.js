import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from "react-native";

//Estilização da página.
import styles from '../styles/Style';

//Importação da biblioteca de dropList.
import { SelectList } from 'react-native-dropdown-select-list';

//Importação da biblioteca do calendario.
import DatePicker from "react-native-date-picker";

//Importação biblioteca para exibir o alerta.
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

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

const TelaCadastroMedicamento = ({ navigation }) => {

    //Parâmetros do hook-form.
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });

    // Variaveis.
    const [formulario, setFormulario] = useState([]);

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

//Atribui os valores do formulário nas variáveis para manda ao firebase.
        // Percorre e atribui a hora.
        let hora = horarioPrimeiroConsumo.substring(0, 2);
        setHoraFirebase(hora);

        // Percorre e atribui o minuto.
        let minuto = horarioPrimeiroConsumo.substring(3, 5);
        setMinutoFirebase(minuto);

        // Percorre e atribui o dia.
        let dia = dataFirebase.substring(8, 10);
        setDiaFirebase(dia);

        // Percorre e atribui o mês.
        let mes = dataFirebase.substring(5, 7);
        setMesFirebase(mes);

        // Percorre e atribui os dias e intervalo de consumo.
        // let fireIntervaloConsumo = formulario.intervaloConsumo;
        // console.log(fireIntervaloConsumo.substring(0, 1));

        // let fireDiasConsumo = formulario.diasConsumo;
        // console.log(fireDiasConsumo.substring(0, 1));
        // setIntervaloFirebase(formulario.intervaloConsumo[0]);
        // setHorarioConsumoFirebase(formulario.diasConsumo[0]);

        // console.log(horarioConsumoFirebase)
        // console.log(intervaloFirebase)
        // console.log(mesFirebase)
        // console.log(diaFirebase)
        // console.log(minutoFirebase)
        // console.log(horarioConsumoFirebase)
        }
    };

    // Variaveis do firebase.
    const [dataFirebase, setDataFirebase] = useState("");
    const [horaFirebase, setHoraFirebase] = useState("");
    const [minutoFirebase, setMinutoFirebase] = useState("");
    const [diaFirebase, setDiaFirebase] = useState("");
    const [mesFirebase, setMesFirebase] = useState("");
    const [intervaloFirebase, setIntervaloFirebase] = useState("");
    const [horarioConsumoFirebase, setHorarioConsumoFirebase] = useState("");

    const validaFirebase = () => {

        
    };

    //Captura os dados e atribui ao data.
    const onSubmit = data => {
        setFormulario(data)
        sendMedicamento(data)
    };

    //API para enviar os dados.
    const sendMedicamento = data => {

        //Tratamento da data.
        let dataPrimeiroConsumoTratada = dataPrimeiroConsumo.split('-').reverse().join('-')
        setDataFirebase(dataPrimeiroConsumoTratada);

        // api.post(rota, {
        //     nome_med: data.nome,
        //     descricao: data.descricao,
        //     quantidade: data.quantidade,
        //     data: dataPrimeiroConsumoTratada,
        //     hora: horarioPrimeiroConsumo,
        //     horaFirebase: horaFirebase,
        //     minutoFirebase: minutoFirebase,
        //     diaFirebase: diaFirebase,
        //     mesFirebase: mesFirebase,
        //     intervaloFirebase: intervaloFirebase,
        //     horarioConsumoFirebase: horarioConsumoFirebase,

        // }).then((data) => {

        //     console.log("Medicamento salvo.")
        //     mensagemSucesso();
        //     reset();


        // }).catch((response) => {

        //     console.log(`Erro ao salvar o medicamento. ${response}`)
        //     mensagemErro();

        // });
    };



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

    // 
    const [confir, setConfir] = useState(false);
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        setOpen(false);
        validaFirebase();
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
                        {errors.intervaloConsumo && <Text style={styles.textoAlertaInput}>Selecione os intervalos de horas</Text>}
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (

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

                                    // setSelected={(intervalo) => setIntervalo(intervalo)}
                                    // data={intervaloHoras}
                                    // save="value"

                                    setSelected={onChange}
                                    data={intervaloHoras}
                                    value={value}
                                    save="value"

                                />
                            )}
                            name="intervaloConsumo"
                            defaultValue=""
                        />


                        {errors.diasConsumo && <Text style={styles.textoAlertaInput}>Selecione os dias para consumo</Text>}
                        <Controller
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (

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

                                    setSelected={onChange}
                                    data={diasConsumo}
                                    value={value}
                                    save="value"
                                />
                            )}
                            name="diasConsumo"
                            defaultValue=""
                        />
                    </View>

                    {/* Botão para salvar. */}
                    <View style={styles.espacoBotaoSalvar}>
                        <TouchableOpacity style={styles.botaoSalvar}
                            onPress={
                                handleSubmit(onSubmit)
                            }>
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
        </View >
    )
};

export default TelaCadastroMedicamento;