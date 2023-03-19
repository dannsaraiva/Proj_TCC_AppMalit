import React, { useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Keyboard } from "react-native";

import { useForm, Controller } from "react-hook-form";

//Importação da API.
import api from "../../services/api";


//Mascara do Input.
import { TextInputMask } from "react-native-masked-text";

//Estilização da página.
import styles from '../styles/Style';

const TelaCadastroMedicamento = ({ navigation }) => {

    //Parâmetros do hook-form.
    const { control, handleSubmit, formState: { errors } } = useForm({
    });
    //Captura os dados e atribui ao data.
    const onSubmit = data => sendMedicamento(data);

    //Variavel da rota.
    const rota = "/CadastroMed";

    //API para enviar os dados.
    const sendMedicamento = data => {
        api.post(rota, {

            nome_Medicamentos: data.nome,
            descricao_Medicamentos: data.descricao,
            quantidade_Medicamentos: data.quantidade,
            validade_Medicamentos: data.validade,

        }).then((data) => {
            console.log("Medicamento salvo.")
        }).catch((error) => {
            console.log("Erro ao salvar o medicamento.")
        })
    };

    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Cadastre um medicamento</Text>
            </View>

            <View style={styles.dadosUsuario}>

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
                        <TextInput style={styles.textoInputMedicamento} placeholder='Validade:' placeholderTextColor={"#000"}
                            keyboardType="numeric"

                            // type={'datetime'}
                            // options={{
                            //     format: 'DD-MM-YYYY'
                            // }}

                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="validade"
                />

                {/* Botão para salvar. */}
                <View style={styles.espacoBotaoSalvar}>
                    <TouchableOpacity style={styles.botaoSalvar}
                        onPress={() => {
                            Alert.alert(
                                'Cadastro do medicamento',
                                'Você deseja salvar ?',
                                [
                                    { text: 'Não', },
                                    { text: 'Sim', onPress: handleSubmit(onSubmit) },
                                ],
                                { cancelable: false });
                            return true;
                        }}>
                        <Text style={styles.textoBotaoSalvar}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Botões da navegação */}
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

                <TouchableOpacity style={styles.botaoNavegacao}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
};

export default TelaCadastroMedicamento;