import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";

//Estilização da página.
import styles from '../styles/Style';

const TelaCadastro = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.textoCabecalho}>Cadastro</Text>
      </View>

      <View style={styles.dadosUsuario}>
        <TextInput style={styles.textoInput} placeholder='Nome completo:' placeholderTextColor={"#000"} />
        <TextInput style={styles.textoInput} placeholder='E-mail:' placeholderTextColor={"#000"} />
        <TextInput style={styles.textoInput} placeholder='Data de nascimento:' placeholderTextColor={"#000"} value={Number} keyboardType="numeric" />
        <TextInput style={styles.textoInput} placeholder='Telefone:' placeholderTextColor={"#000"} value={Number} keyboardType="numeric" />
        <TextInput style={styles.textoInput} placeholder='CPF:' placeholderTextColor={"#000"} value={Number} keyboardType="numeric" />
        <TextInput style={styles.textoInput} placeholder='Senha:' text placeholderTextColor={"#000"} />
        <TextInput style={styles.textoInput} placeholder='Confirmar senha:' placeholderTextColor={"#000"} />
      </View>

      <View style={{ alignItems: 'center', }}>
        <TouchableOpacity style={styles.botao}
          onPress={() => Alert.alert('Você foi cadastrado !')}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textoFooter}>Já tenho uma conta</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.logoAjuda}
            source={require('../images/help.png')} />
        </TouchableOpacity>
      </View>

    </View>
  )
};

export default TelaCadastro;