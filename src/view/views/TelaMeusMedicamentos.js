import * as React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Button } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

const TelaMeusMedicamentos = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Meus medicamentos</Text>
            </View>

            <View style={styles.espacoMeusMedicamentos}>
                <View style={styles.espacopesquisarMedicamentos}>
                    <Image style={styles.logoPesquisarMedicamentos} source={require('../images/search.png')} />
                    <TextInput disableFullscreenUI style={styles.inputPesquisarMedicamentos} placeholder='Pesquisar ...' placeholderTextColor={"#000"} />
                </View>
            </View>

           



            <ScrollView style={{ marginTop: 30 }}>
                <View style={styles.espacoMeusMedicamentos}>
                    <View style={styles.NavegacaoMenuMedicamentos}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Dorflex</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavegacaoMenuMedicamentos}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Fluxo</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavegacaoMenuMedicamentos}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Fluxo</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavegacaoMenuMedicamentos}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Fluxo</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavegacaoMenuMedicamentos}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Fluxo</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavegacaoMenuMedicamentos}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Fluxo</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavegacaoMenuMedicamentosBaixo}>
                        <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
                        <Text style={styles.textoNavegacaoMedicamentos}>Fluxo</Text>
                        <TouchableOpacity>
                            <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footerNavegacaoMedicamentos}>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/botao-voltar.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/user.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Perfil</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botaoNavegacao}
                    onPress={() => navigation.navigate('Maleta')}>
                    <Image style={styles.logoBotaoNavegacao} source={require('../images/maleta-de-medico.png')} />
                    <Text style={styles.textoBotaoNavegacao}>Maleta</Text></TouchableOpacity>
            </View>
        </View >
    )
}

export default TelaMeusMedicamentos;