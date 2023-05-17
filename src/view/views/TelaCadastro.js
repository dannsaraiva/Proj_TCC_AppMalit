import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from "react-native";

//Estilização da página.
import styles from '../styles/Style';

//Importação biblioteca para exibir o alerta.
import Toast from "react-native-toast-message"

//Importação das bibliotecas para validação de dados.
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

//Esquema em yup para validar os dados.
const esquema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  dataDeNascimento: yup.string().required('Data obrigatória'),
  telefone: yup.string().required('Telefone é obrigatório'),
  cpf: yup.string().min(14, "CPF precisa ter 11 dígitos").required('CPF é obrigatório'),
  senha: yup.string().min(10, 'Senha deve ter no mínimo 10 caracteres').required('Senha é obrigatória'),
});

//Mascara do Input.
import { TextInputMask } from "react-native-masked-text";

//Importação da API.
import api from "../../services/api";
const rota = "/Cadastro";

const TelaCadastro = ({ navigation }) => {

  //Mensagens para exibir para o usuário.
  const mensagemSucesso = () => {
    Toast.show({
      type: 'info',
      text1: 'Usuário cadastrado',
      onHide: () => navigation.navigate('Login')
    });
  };

  const mensagemErro = () => {
    Toast.show({
      type: 'error',
      text1: 'Usuário não cadastrado, tente novamente',
    });
  };

  //Parâmetros do hook-form.
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(esquema)
  });

  //Captura os dados e atribui ao data.
  const onSubmit = data => sendUsuario(data);

  //Chamando a API.
  const sendUsuario = (data) => {
    //Tratatamento dos dados.
    const dataTratada = data.dataDeNascimento.split('/').reverse().join('-')

    api.post(rota, {

      nome_usuario: data.nome,
      cpf: data.cpf,
      dataNasc: dataTratada,
      telefone: data.telefone,
      email: data.email,
      senha: data.senha

    }).then((data) => {
      console.log("Usuário cadastrado !");
      mensagemSucesso();
      reset();
    }).catch((error) => {
      console.log(`Erro ao cadastrar ${error}`);
      mensagemErro();
    })
  };

  //Inicia o codigo do App.
  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Cadastro</Text>
      </View>

      <ScrollView style={{
        height: 600,
      }}>
        <View style={styles.dadosUsuario}>

          {/* Inputs dos dados do usuário. */}
          {errors.nome && <Text style={styles.textoAlertaInputCadastro}>{errors.nome.message}</Text>}
          <Controller
            control={control}
            name='nome'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInput style={styles.textoInputCadastro} placeholder='Nome completo:'
                placeholderTextColor={"#000"}

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} />

          {errors.email && <Text style={styles.textoAlertaInputCadastro}>{errors.email.message}</Text>}
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInput style={styles.textoInputCadastro} placeholder='E-mail:'
                placeholderTextColor={"#000"}
                keyboardType='email-address'

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} />

          {errors.dataDeNascimento && <Text style={styles.textoAlertaInputCadastro}>{errors.dataDeNascimento.message}</Text>}
          <Controller
            control={control}
            name='dataDeNascimento'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInputMask style={styles.textoInputCadastro} placeholder='Data de nascimento:'
                placeholderTextColor={"#000"} keyboardType="numeric"
                maxLength={10}

                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} />

          {errors.telefone && <Text style={styles.textoAlertaInputCadastro}>{errors.telefone.message}</Text>}
          <Controller
            control={control}
            name='telefone'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInputMask style={styles.textoInputCadastro} placeholder='Telefone:'
                placeholderTextColor={"#000"} keyboardType='numeric'
                maxLength={15}

                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} />

          {errors.cpf && <Text style={styles.textoAlertaInputCadastro}>{errors.cpf.message}</Text>}
          <Controller
            control={control}
            name='cpf'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInputMask style={styles.textoInputCadastro} placeholder='CPF:'
                placeholderTextColor={"#000"} keyboardType='numeric'
                maxLength={14}

                type={'cpf'}

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} />

          {errors.senha && <Text style={styles.textoAlertaInputCadastro}>{errors.senha.message}</Text>}
          <Controller
            control={control}
            name='senha'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInput style={styles.textoInputCadastroFooter} placeholder='Senha:'
                placeholderTextColor={"#000"}
                secureTextEntry={true}

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} />

          {/* Código para confirmar senha. */}
          {/* {errors.confirmarSenha && <Text style={styles.textoAlertaInputCadastro}>{errors.confirmarSenha.message}</Text>}
          <Controller
            control={control}
            name='confirmarSenha'
            render={({ field: { onChange, onBlur, value } }) => (

              <TextInput style={styles.textoInputCadastro} placeholder='Confirmar Senha:'
                placeholderTextColor={"#000"} keyboardType='numeric'

                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )} /> */}
        </View>
      </ScrollView>

      {/* Botão cadastrar. */}
      <View style={styles.espacoBotaoCadastrar}>
        <TouchableOpacity style={styles.botaoCadastrar}
          onPress={
            handleSubmit(onSubmit)
          }>
          <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Toast
        position='top'
        bottomOffset={40}
        visibilityTime={3000}
      />

      <View style={styles.tenhoConta}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoFooter}>Já tenho uma conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.espacoLogoAjudaCadastro}>
          <Image style={styles.logoAjudaCadastro}
            source={require('../images/help.png')} />
        </TouchableOpacity>
      </View>
    </View >
  )
};

export default TelaCadastro;