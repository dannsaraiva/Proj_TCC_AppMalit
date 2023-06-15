import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler } from 'react-native';

//Estilização.
import styles from '../styles/Style';

//Importação biblioteca para exibir o alerta.
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

//Importação das bibliotecas para validação de dados.
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

//Importação da API.
import api from "../../services/api";
import { useSafeAreaFrame } from 'react-native-safe-area-context';
const rota = "/RecuperarSenha";

//Esquema em yup para validar os dados.
const esquema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório')
});

//Pop-up para mostrat ao usuário.
const mensagemSucesso = () => {
  Toast.show({
    type: 'info',
    text1: 'Senha enviada, acesse o seu e-mail.'
  });
};
const mensagemErro = () => {
  Toast.show({
    type: 'error',
    text1: 'Erro, tente novamente.',
  });
};


//Construção da tela.
const RecuperarSenha = ({ navigation }) => {

  //Parâmetros do hook-form.
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(esquema)
  });

  //Captura os dados e atribui ao data.
  const [email, setEmail] = useState(null);
  const onSubmit = (data) => setEmail(data.email);

  console.log(email);
  //Chamando a API.
  useEffect(() => {

    if (email !== null) {
      api.post(rota, {

        email: email

      }).then((data) => {

        console.log("Senha enviada!");
        mensagemSucesso();
        reset();
      }).catch((error) => {

        console.log(`Erro ao enviar a senha ${error}`);
        mensagemErro();
      })
    };
  }, [email]);

  // 
  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Recuperar a senha</Text>
      </View>

      <View style={styles.logoRecuperarSenha}>
        <Image style={styles.logo}
          source={require('../images/Logo_Malit.png')} />
      </View>

      <View style={styles.dadosRecuperarSenha}>
        {errors.email && <Text style={styles.textoAlertaInputCadastro}>{errors.email.message}</Text>}
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.textoInputLogin} placeholder='E-mail:'
              placeholderTextColor={"#000"}

              keyboardType='email-address'

              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )} />
      </View>

      {/* Componente para exibir o Pop-up */}
      < Toast
        position='top'
        bottomOffset={40}
        visibilityTime={3000}
      />

      {/* Botões para logar ou cadastrar. */}
      <View style={styles.footerLogin}>
        <TouchableOpacity style={styles.botaoLogin}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.textoBotaoLogin}>Recuperar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textoFooter}>Voltar para o login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Ajuda')}>
          <Image style={styles.logoAjuda}
            source={require('../images/help.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default RecuperarSenha;

