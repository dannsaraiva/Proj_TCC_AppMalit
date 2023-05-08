import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

//Estilização da página.
import styles from '../styles/Style';

//Importação da biblioteca de dropList.
import { SelectList } from 'react-native-dropdown-select-list';

//
import DatePicker from "react-native-date-picker";

const dropListPrimeiroConsumo = () => {

    //Valores no drop.
    const intervaloHoras = [
        { key: '1', value: '1 - Em uma hora' },
        { key: '2', value: '2 - Em duas horas' },
        { key: '3', value: '3 - Em três horas' },
        { key: '4', value: '4 - Em quatro horas' },
        { key: '5', value: '5 - Em cinco horas' },
        { key: '6', value: '6 - Em seis horas' },
        { key: '7', value: '7 - Em sete horas' },
        { key: '8', value: '8 - Em oito horas' },
        { key: '9', value: '9 - Em nove horas' },
        { key: '10', value: '10 - Em dez horas' },
        { key: '11', value: '11 - Em onze horas' },
        { key: '12', value: '12 - Em doze horas' },
    ];

    const diasConsumo = [
        { key: '1', value: '1 - um dia' },
        { key: '2', value: '2 - dois dias' },
        { key: '3', value: '3 - três dias' },
        { key: '4', value: '4 - quatro dias' },
        { key: '5', value: '5 - cinco dias' },
        { key: '6', value: '6 - seis dias' },
        { key: '7', value: '7 - sete dias' },
        { key: '8', value: '14 - duas semanas' },
        { key: '9', value: 'constantemente' },
    ];


    return (

        <View>
            <Text>TEsteeeeeeee</Text>
        </View>
    )
}

export default dropListPrimeiroConsumo;