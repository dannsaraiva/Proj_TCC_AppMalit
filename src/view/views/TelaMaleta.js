import * as React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';

//Estilização.
import styles from '../styles/Style';

const TelaMaleta = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Maleta</Text>
            </View>

            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.NavegacaoMenu}
                        onPress={() => navigation.navigate('Agenda')}>
                        <Image style={styles.logoNavegacaoMenu} source={require('../images/calendario.png')} />
                        <Text style={styles.textoNavegacaoMenu}>Agenda / Alarme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavegacaoMenu}
                        onPress={() => navigation.navigate('Meus medicamentos')}>
                        <Image style={styles.logoNavegacaoMenu} source={require('../images/comprimidos.png')} />
                        <Text style={styles.textoNavegacaoMenu}>Meus medicamentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavegacaoMenu}
                        onPress={() => navigation.navigate('Chat compra')}>
                        <Image style={styles.logoNavegacaoMenu} source={require('../images/carrinho-de-compras.png')} />
                        <Text style={styles.textoNavegacaoMenu}>Comprar maleta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavegacaoMenu}
                        onPress={() => navigation.navigate('Teste maleta')}>
                        <Image style={styles.logoNavegacaoMenu} source={require('../images/controles.png')} />
                        <Text style={styles.textoNavegacaoMenu}>Testar maleta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.NavegacaoMenuBaixo}
                        onPress={() => navigation.navigate('Ajuda')}>
                        <Image style={styles.logoNavegacaoMenu} source={require('../images/help.png')} />
                        <Text style={styles.textoNavegacaoMenu}>Ajuda</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Navegação inferior: */}
            <View style={styles.footerNavegacao}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/user.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/menu-aberto.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Menu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default TelaMaleta;