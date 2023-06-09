import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, BackHandler, Alert } from 'react-native';

//Estilização.
import styles from '../styles/Style';

// Importação do firebase.
import { ref, update, get } from "firebase/database";
import { bd } from '../../services/config.firebase';

//Construção da tela.
const TelaMenu = ({ navigation, route }) => {

  //Ação para o botão sair.
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    }, [])
  });

  //Valida se o firebase esta funcionando.
  useEffect(() => {
    get(ref(bd, 'maleta/'), {
    }).then(() => {

      console.log("Firebase - ok");
    }).catch((error) => {

      console.log(error);
    });
  }, []);


  //Codigo do front.
  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Menu</Text>
      </View>

      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <TouchableOpacity style={styles.NavegacaoMenu}
            onPress={() => navigation.navigate('Cadastro medicamento')}>
            <Image style={styles.logoNavegacaoMenu} source={require('../images/remedio.png')} />
            <Text style={styles.textoNavegacaoMenu}>Cadastre um medicamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NavegacaoMenu}
            onPress={() => navigation.navigate('Meus medicamentos')}>
            <Image style={styles.logoNavegacaoMenu} source={require('../images/comprimidos.png')} />
            <Text style={styles.textoNavegacaoMenu}>Meus medicamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.NavegacaoMenu}
            onPress={() => navigation.navigate('Maleta')}>
            <Image style={styles.logoNavegacaoMenu} source={require('../images/maleta-de-medico.png')} />
            <Text style={styles.textoNavegacaoMenu}>Maleta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footerNavegacao}>
        <TouchableOpacity style={styles.botaoNavegacao}
          onPress={() => {
            Alert.alert(
              'Sair',
              'Deseja sair do aplicativo ?',
              [
                { text: 'Não', onPress: () => console.log('Saida cancelada'), style: 'cancel' },
                { text: 'Sim', onPress: () => BackHandler.exitApp() },
              ],
              { cancelable: false });
            return true;
          }}>
          <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
          <Text style={styles.textoBotaoNavegacao}>Sair</Text>
        </TouchableOpacity>

        {/* Navegação inferior: */}
        <TouchableOpacity style={styles.botaoNavegacao}
          onPress={() => navigation.navigate('Perfil')}>

          <Image style={styles.logoBotaoNavegacao} source={require('../images/user.png')} />
          <Text style={styles.textoBotaoNavegacao}>Perfil</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoNavegacao}
          onPress={() => navigation.navigate('Maleta')}>
          <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
          <Text style={styles.textoBotaoNavegacao}>Maleta</Text></TouchableOpacity>
      </View>
    </View >
  )
}

export default TelaMenu;
