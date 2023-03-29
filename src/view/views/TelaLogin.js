import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, BackHandler, Alert } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação das bibliotecas para validação de dados.
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

//Esquema em yup para validar os dados.
const esquema = yup.object().shape({
  login: yup.string().required("CPF ou E-mail é obrigatório"),
  senha: yup.string().required("Digite sua senha"),
});

//Importação da API.
import api from '../../services/api';
const rota = "/Listagem";




const TelaLogin = ({ navigation }) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    }, [])
  });

  //
  const [loading, setLoadtindo] = useState(false);

  //Parâmetros do hook-form.
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(esquema)
  });

  //Captura os dados e atribui ao data.
  const onSubmit = data => console.log(data);

  //Chamando a API.
  const searchUsuario = () => {

    api.get(rota, {

    }).then((data) => {
      console.log(data);
      var dados = data;
    }).catch((response) => {
      console.log(response);
    });
  };





  return (
    <View style={styles.container}>

      <View style={styles.logoLogin}>
        <Image style={styles.logo}
          source={require('../images/Logo_Malit.png')}
        />
      </View>

      <View style={styles.dadosLogin}>
        <TextInput style={styles.textoInputLogin} placeholder='CPF ou E-mail' placeholderTextColor={"#000"} />
        <TextInput style={styles.textoInputLogin} placeholder='Senha' placeholderTextColor={"#000"} />


        <View style={styles.espacoEsqueciSenha}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Recuperar senha')}>
            <Text style={styles.textoEsqueciSenha}>Esqueci minha senha</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.footerLogin}>
        <TouchableOpacity style={styles.botaoLogin}
          // onPress={() => {



          //   Alert.alert("Logado !")
          //   searchUsuario();




          // }}



        onPress={
          () => navigation.navigate('Menu')
        }

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
