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

//Importação da API.
import api from "../../services/api";
const rotaListComp = "/ListagemMedCalendario";

//Códio do componente.
const Calendario = () => {

    //Variáveis.
    const [apiCalendario, setCalendario] = useState(false);
    const [dadosCalendario, setDadosCalendario] = useState(null);


    const [preencherCalendario, setPreencherCalendario] = useState(false);

    const [diaData, setDiaData] = useState(null);
    const [mesAnoData, setMesAnoData] = useState(null);
    const [diasConsumo, setDiasConsumo] = useState(null);



    //Api para buscar as datas para alimentar o calendário.
    // useEffect(() => {

    //     api.get(rotaListComp, {
    //     }).then((response) => {

    //         setDadosCalendario(response.data.data);
    //         // console.log("Listagem calendário")

    //     }).catch((erro) => {

    //         console.log("Erro listagem para calendário " + erro);
    //     })
    // }, [apiCalendario]);

    // setPreencherCalendario(true);

    // useEffect(() => {

    //     if (dadosCalendario != null) {

    //         console.log(dadosCalendario);

    //         setMesAnoData(dadosCalendario[0].data.slice(0, 8));
    //         setDiaData(dadosCalendario[0].data.slice(8, 10));
    //         setDiasConsumo(dadosCalendario[0].diasConsumoFirebase);


    //         for (let i = 1; i <= diasConsumo; i++) {


    //             var dia = 10;
    //             var resultado = dia + i;
    //             console.log(i + " " + resultado);


    //         }


    //     }


    // }, [preencherCalendario]);

    // console.log(mesAnoData);
    // console.log(diaData);




    //Função para marca no calendário os dias de consumo.
    const getMarked = () => {
        let marked = {};
        for (let i = 1; i <= 30; i++) {
            let day = i.toString().padStart(2, '0');
            let periods = [
                (i >= 1 && i <= 5) && {
                    color: 'red',
                },
                (i >= 6 && i <= 10) && {
                    color: 'orange',
                },
                (i >= 8 && i <= 15) && {
                    color: 'black',
                },
                (i >= 16 && i <= 30) && {
                    color: 'green',
                }

            ];
            marked[`2023-06-${day}`] = {
                periods
            };
        }
        return marked;
    };



    //Função para marca no calendário os dias de consumo.
    // const getMarked = () => {


    //     let marked = {
    //         `${mesAnoData}`: {
    //             periods: [
    //                 { startingDay: true, endingDay: false, color: 'red' }
    //             ]
    //         }
    //     }
    //     return marked;
    // };

    //Front do Calendário.
    return (
        <View>

            <Calendar style={styles.espacoCalendario}

                markingType="multi-period"
                markedDates={getMarked()}
            />
        </View>
    )
};

export default Calendario