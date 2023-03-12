import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler } from 'react-native';

//Estilização.
import styles from '../../../Style';

const RecuperarSenha = ({ navigation }) => {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    }, [])
  })
  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Recuperar a senha</Text>
      </View>

      <View style={styles.logoLogin}>
        <Image style={styles.logo}
          source={require('../images/Logo_Malit.png')} />
      </View>

      <View style={styles.dadosLogin}>
        <Text style={styles.textoRecuperar}>Digite seu CPF, telefone ou e-mail:</Text>
        <TextInput style={styles.textoInputLogin} placeholder='Digite ...' placeholderTextColor={"#000"} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Recuperar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textoFooter}>Voltar para o login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Ajuda')}>
          <Image style={styles.logoAjuda}
            source={require('../images/help.png')} />
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default RecuperarSenha;

