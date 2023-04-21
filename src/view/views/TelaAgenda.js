import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

//Estilização.
import styles from '../styles/Style';

//Configuração do calendário.
import { Calendar, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['dias'] = {
    monthNames: [
        'JANEIRO ',
        'FEVEREIRO ',
        'MARÇO ',
        'ABRIL ',
        'MAIO ',
        'JUNHO ',
        'JULHO ',
        'AGOSTO ',
        'SETEMBRO ',
        'OUTUBRO ',
        'NOVEMBRO ',
        'DEZEMBRO '
    ],
    monthNamesShort: ['JAN.', 'FEV.', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL.', 'AGO', 'SET.', 'OUT.', 'NOV.', 'DEZ.'],
    dayNames: ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
    today: "HOJE"
};
LocaleConfig.defaultLocale = 'dias';

const TelaAgenda = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Navegação superior: */}
            <View style={styles.cabecalhoChat}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.logoCabecalhoChat}
                        source={require('../images/botao-voltar.png')} />
                </TouchableOpacity>
                <Text style={styles.textoCabecalhoChat}>Agenda</Text>
            </View>

            <View>
                <Calendar style={{ margin: 30, elevation: 4, borderRadius: 15 }} />
            </View>

            <ScrollView>
                <View style={styles.espacoRemedio}>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.remedioAgenda}>
                        <Image style={styles.logoRemedioAgenda} source={require('../images/medicine.png')} />
                        <View>
                            <Text style={styles.textoRemedio}>Dorflex</Text>
                            <Text style={styles.textoRemedio}>08:00</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.espacoLogoAdicionaRemedio}>
                <Image style={styles.logoAdicionaRemedio} source={require('../images/plus.png')} />
            </TouchableOpacity>
        </View>
    )
};

export default TelaAgenda;