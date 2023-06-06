//Configuração do calendário.
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

//Biblioteca para renderizar o calendário.
import { Calendar, LocaleConfig } from 'react-native-calendars';

//Estilização.
import styles from '../styles/Style';

//Configuração do calendário.
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

//
const Calendario = () => {
    return (
        <View>
            <Calendar style={styles.espacoCalendario}
                markedDates={{
                    '2023-06-05': { selected: true, marked: true, selectedColor: 'red' }

                }} />
        </View>
    )
}

export default Calendario