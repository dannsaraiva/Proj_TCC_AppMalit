import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, BackHandler } from 'react-native';
import styles from '../styles/Style';


const TelaLogin = ({ navigation }) => {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    }, [])
  });



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


        <View style={{ marginRight: -150, marginTop: -15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Recuperar senha')}>
            <Text style={styles.textoBotaoNavegacao}>Esqueci minha senha</Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoLogin}
          onPress={
            () => navigation.navigate('Menu')
          }>
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
