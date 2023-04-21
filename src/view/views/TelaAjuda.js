import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

//Estilização.
import styles from '../styles/Style';

const TelaAjuda = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Navegação superior: */}
            <View style={styles.cabecalhoChat}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoCabecalhoChat}
                        source={require('../images/botao-voltar.png')} />
                </TouchableOpacity>
                <Text style={styles.textoCabecalhoChat}>Ajuda</Text>
            </View>

            <View style={styles.footerMensagemChat}>
                <TextInput style={styles.caixaMensagemChat} placeholder='Digite uma mensagem ...' placeholderTextColor={'#222'} />
                <TouchableOpacity>
                    <Image style={styles.logoMensagemChat} source={require('../images/microfone-gravador.png')} />
                </TouchableOpacity>
            </View>
        </View >
    )
};

export default TelaAjuda;