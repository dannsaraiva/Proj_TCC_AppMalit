import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, BackHandler, Alert } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação biblioteca para exibir o alerta.
import Toast from "react-native-toast-message";

//Mascara do Input.
import { TextInputMask } from "react-native-masked-text";

//Importação das bibliotecas para validação de dados.
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Esquema em yup para validar os dados.
const esquema = yup.object().shape({
  cpf: yup.string().min(14, "CPF precisa ter 11 dígitos").required('CPF é obrigatório'),
  senha: yup.string().required("Digite sua senha"),
});

//Importação do AsyncStorage.
import AsyncStorage from '@react-native-async-storage/async-storage';

//Importação da API.
import api from '../../services/api';
const rota = "/Login";

//Construção da tela.
const TelaLogin = ({ navigation }) => {

  //Estruta de decisão para validar e realizar o login.
  useEffect(() => {

    if (login != null) {

      if (login === formulario.cpf && password != formulario.senha) {

        mensagemErroSenha();
      } else if (login != formulario.cpf) {

        mensagemErroCPF();
      } else {

        mensagemErroAPI();
      }
    };
  });

  //Dados salvos.
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [dados, setDados] = useState([]);
  const [formulario, setFormulario] = useState([]);
  const [asyncLogin, setAsyncLogin] = useState([]);

  //Mensagens para exibir para o usuário.
  const mensagemErroCPF = () => {
    Toast.show({
      type: 'error',
      text1: 'CPF não cadastrado',
    });
  };

  const mensagemErroSenha = () => {
    Toast.show({
      type: 'error',
      text1: 'Senha incorreta',
    });
  };

  const mensagemErroAPI = () => {
    Toast.show({
      type: 'error',
      text1: 'Tente novamente',
    });
  };

  //Botão sair.
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    }, [])
  });

  //Parâmetros do hook-form.
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(esquema)
  });

  //Captura os dados e atribui ao data.
  const onSubmit = data => {
    setFormulario(data);
    searchUsuario(data);
  }

  //Chamando a API.
  const searchUsuario = data => {

    //Pega o cpf digitado pelo usuário e realiza a pesquisa.
    api.post(rota, {

      cpf: formulario.cpf,
      senha: formulario.senha

    })
      .then((response) => {

        //Armazena os valores recebido via API.
        let retorno = JSON.parse(response.config.data);

        setLogin(retorno.cpf);
        setPassword(retorno.senha);

        navigation.navigate('Loading');
      }).catch((error) => {

        console.log(error)
      });
  };

  //AsyncStorage armazena os dados.
  const Armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor)
  };

  Armazenar("01", `${login}`);

  //Codigo do front.
  return (
    <View style={styles.container}>

      <View style={styles.logoLogin}>
        <Image style={styles.logo}
          source={require('../images/Logo_Malit.png')}
        />
      </View>

      <View style={styles.dadosLogin}>

        {/* Input CPF */}
        {errors.cpf && <Text style={styles.textoAlertaInputLogin}>{errors.cpf.message}</Text>}
        <Controller
          control={control}
          name='cpf'
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInputMask style={styles.textoInputLogin} placeholder='CPF:'
              placeholderTextColor={"#000"} keyboardType='numeric'
              maxLength={14}

              type={'cpf'}

              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )} />

        {errors.senha && <Text style={styles.textoAlertaInputLogin}>{errors.senha.message}</Text>}
        <Controller
          control={control}
          name='senha'
          render={({ field: { onChange, onBlur, value } }) => (

            <TextInput style={styles.textoInputLogin} placeholder='Senha:'
              placeholderTextColor={"#000"}
              secureTextEntry={true}

              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )} />

        <View style={styles.espacoEsqueciSenha}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Recuperar senha')}>
            <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
          </TouchableOpacity>

        </View>
      </View>

      {/* Pop-up na tela. */}
      <Toast
        position='top'
        bottomOffset={40}
        visibilityTime={3500}
      />

      <View style={styles.footerLogin}>
        <TouchableOpacity style={styles.botaoLogin}
          onPress={handleSubmit(onSubmit)}
        >

          <Text style={styles.textoBotaoLogin}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { navigation.navigate('Cadastro') }}>
          <Text style={styles.textoFooter}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Ajuda')}>
          <Image style={styles.logoAjuda}
            source={require('../images/help.png')}
          />
        </TouchableOpacity>
      </View>

    </View >
  )
};

export default TelaLogin;
