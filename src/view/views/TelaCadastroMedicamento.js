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

//Importação do hookform.
import { useForm, Controller } from "react-hook-form";

//Importação da API.
import api from "../../services/api";
const rota = "/CadastroMed";

//Pop-up para mostrat ao usuário.
const mensagemSucesso = () => {
    Toast.show({
        type: 'info',
        text1: 'Medicamento foi cadastrado'
    });
};

const mensagemErro = () => {
    Toast.show({
        type: 'error',
        text1: 'Medicamento não foi cadastrado, tente novamente'
    });
};

//
const TelaCadastroMedicamento = ({ navigation }) => {

    //Parâmetros do Datapicker.
    const [data, setData] = useState(new Date());
    const [openModalData, setOpenModalData] = useState(false);
    const [openModalHora, setOpenModalHora] = useState(false);
    const [textoHora, setTextoHora] = useState("Horário consumo:");
    const [textoData, setTextoData] = useState("Data consumo:");

    //Variáveis para ações do Modal da data.
    const [acaoHora, setAcaoHora] = useState(false);
    const [acaoData, setAcaoData] = useState(false);

    //Variáveis para tratar os dados da tela.
    const [dataPrimeiroConsumo, setDataPrimeiroConsumo] = useState(null);
    const [horaPrimeiroConsumo, setHoraPrimeiroConsumo] = useState(null);

    //Função para seta valores nos inputs.
    useEffect(() => {

        if (acaoHora === true) {

            let hora = data.toLocaleTimeString(["pt-br"], { hour: '2-digit', minute: '2-digit' });
            setHoraPrimeiroConsumo(hora);

            setTextoHora(hora);
            setAcaoHora(false);
        }
    }, [acaoHora]);
    useEffect(() => {

        if (acaoData === true) {

            let dataT = data.toLocaleDateString('pt-BR');
            setDataPrimeiroConsumo(dataT);

            setTextoData(dataT.split('/').join('-'));
            setAcaoData(false);
        }
    }, [acaoData]);

    //Reset DropList.
    const [resetDropdown, setResetDropdown] = useState(false);

    //Base do DropLiost.
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
        { key: '14', value: 'Duas semanas' },
        { key: 'C', value: 'constantemente' },
    ];

    //Parâmetros do HookForm.
    const [formulario, setFormulario] = useState(null);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });

    //Captura os dados e atribui ao data.
    const onSubmit = data => {
        setFormulario(data)
    };

    //Variaveis do firebase.
    const [apiFire, setApiFire] = useState(false);
    const [horarioInicialFirebase, setHorarioInicialFirebase] = useState(null);
    const [minutoInicialFirebase, setMinutoInicialFirebase] = useState(null);
    const [diaInicialFirebase, setDiaInicialFirebase] = useState(null);
    const [mesInicialFirebase, setMesInicialFirebase] = useState(null);
    const [intervaloHorasFirebase, setIntervaloHorasFirebase] = useState(null);
    const [diasConsumoFirebase, setDiasConsumoFirebase] = useState(null);

    //Executa uma função para percorrer e tratar todos os dados enviados ao firebase.
    useEffect(() => {
        if (formulario != null) {

            let hora = horaPrimeiroConsumo.slice(0, 2);
            setHorarioInicialFirebase(hora);

            let minuto = horaPrimeiroConsumo.slice(3, 5);
            setMinutoInicialFirebase(minuto);

            let dia = dataPrimeiroConsumo.slice(0, 2);
            setDiaInicialFirebase(dia);

            let mes = dataPrimeiroConsumo.slice(3, 5);
            setMesInicialFirebase(mes);

            let intervalo = formulario.intervaloHoras;
            setIntervaloHorasFirebase(intervalo);

            let dias = formulario.diasConsumo;
            setDiasConsumoFirebase(dias);

            setApiFire(true);
        }
    }, [formulario]);

    //Função para chamar a API.
    useEffect(() => {

        if (apiFire === true) {

            //Tratamento da data.
            let dataPrimeiroConsumoTratada = dataPrimeiroConsumo.split('/').reverse().join('-')

            api.post(rota, {

                nome_med: formulario.nome,
                descricao: formulario.descricao,
                quantidade: formulario.quantidade,
                data: dataPrimeiroConsumoTratada,
                hora: horaPrimeiroConsumo,
                horarioInicialFirebase: horarioInicialFirebase,
                minutoInicialFirebase: minutoInicialFirebase,
                diaInicialFirebase: diaInicialFirebase,
                mesInicialFirebase: mesInicialFirebase,
                intervaloHorasFirebase: intervaloHorasFirebase,
                diasConsumoFirebase: diasConsumoFirebase

            }).then((response) => {

                setResetDropdown(true);
                reset();
                setFormulario(null);
                setTextoHora("Horário consumo:");
                setTextoData("Data consumo:");
                mensagemSucesso();
                setApiFire(false);
                console.log("Medicamento salvo.");

            }).catch((response) => {

                console.log(`Erro ao salvar o medicamento. ${response}`)
                mensagemErro();
            });
        }

    }, [apiFire]);

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

                    <Controller
                        control={control}
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

                    {/*Componente do DataPicker. */}
                    {/*Hora */}
                    <View style={styles.textoInputMedicamento}>


                        <TextInput style={{ textAlign: "center" }} editable={false} placeholderTextColor={"#000"}>

                            <Text style={styles.textoInputMedicamento}>
                                {textoHora}
                            </Text>
                        </TextInput>

                        <TouchableOpacity style={{ position: "absolute", bottom: 10, right: 35 }}
                            onPress={() => { setOpenModalHora(true) }}>
                            <Image style={{ width: 25, height: 25 }} source={require('../images/relogio.png')} />
                        </TouchableOpacity>


                        <DatePicker
                            title={"Selecione o horário do primeiro consumo:"}
                            confirmText="Confirmar"
                            cancelText="Cancelar"
                            textColor="#000"

                            mode="time"
                            locale="pt-BR"
                            is24hourSource="locale"
                            timeZoneOffsetInMinutes={-180}

                            modal
                            open={openModalHora}
                            date={data}
                            onConfirm={(data) => {
                                setData(data)
                                setOpenModalHora(false)
                                setAcaoHora(true)
                            }}
                            onCancel={() => {
                                setOpenModalHora(false)
                            }}
                        />
                    </View>

                    {/*Data */}
                    <View style={styles.textoInputMedicamento}>
                        <TextInput style={{ textAlign: "center" }} editable={false} placeholderTextColor={"#000"}>
                            <Text style={styles.textoInputMedicamento}>
                                {textoData}
                            </Text>
                        </TextInput>

                        <TouchableOpacity style={{ position: "absolute", bottom: 10, right: 35 }}
                            onPress={() => { setOpenModalData(true) }}>
                            <Image style={{ width: 25, height: 25 }} source={require('../images/calend.png')} />
                        </TouchableOpacity>

                        <DatePicker
                            title={"Selecione a data do primeiro consumo:"}
                            confirmText="Confirmar"
                            cancelText="Cancelar"
                            textColor="#000"

                            mode="date"
                            locale="pt-BR"

                            modal
                            open={openModalData}
                            date={data}
                            onConfirm={(data) => {
                                setData(data)
                                setOpenModalData(false)
                                setAcaoData(true)
                            }}
                            onCancel={() => {
                                setOpenModalData(false)
                            }} />
                    </View>

                    {/* Espaco para o dropList: */}
                    <View listCadastroMedicamento>

                        {/* Droplist do intervalo: */}
                        {errors.intervaloHoras && <Text style={styles.textoAlertaInput}>Selecione os intervalos de horas</Text>}
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

                                    key={resetDropdown ? 'reset' : 'default'}
                                    setSelected={onChange}
                                    data={intervaloHoras}
                                    value={value}
                                    save="Key"
                                />
                            )}
                            name="intervaloHoras"
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

                                    key={resetDropdown ? 'reset' : 'default'}
                                    setSelected={onChange}
                                    data={diasConsumo}
                                    value={value}
                                    save="Key"
                                />
                            )}
                            name="diasConsumo"
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
            </ScrollView >

            {/* Componente para exibir o Pop-up */}
            < Toast
                position='top'
                bottomOffset={40}
                visibilityTime={3000}
            />
        </View >
    )
};

export default TelaCadastroMedicamento;
