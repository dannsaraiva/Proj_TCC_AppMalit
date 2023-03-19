import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, Alert } from 'react-native';

//Estilização.
import styles from '../styles/Style';

const TelaPerfil = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Perfil</Text>
            </View>

            <View>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 120, height: 120, margin: 20 }}
                        source={require('../images/user.png')} />
                </View>
                <View>
                    <TextInput style={styles.textoInput} placeholder='Nome completo:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInput} placeholder='E-mail:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInput} placeholder='Data de nascimento:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInput} placeholder='Telefone:' placeholderTextColor={'#000'} />
                    <TextInput style={styles.textoInput} placeholder='CPF:' placeholderTextColor={'#000'} />
                </View>
            </View>


            <View style={styles.footerNavegacaoPerfil}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/menu-aberto.png')} />
                    <Text>Menu</Text></TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Maleta')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text>Maleta</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default TelaPerfil;