//Configuração do calendário.
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

//Biblioteca para renderizar o calendário.
import { Calendar, LocaleConfig } from 'react-native-calendars';

// 
import moment from 'moment';

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
const rotaListComp = "/ListagemMedCompartimento";

//Códio do componente.
const Calendario = () => {

    //Variáveis.
    const [apiCalendario, setCalendario] = useState(false);
    const [dadosCalendario, setDadosCalendario] = useState(null);

    const [dataPrimeiroConsumo, setDataPrimeiroConsumo] = useState(null);
    const [teste, setTeste] = useState(null);


    const [selected, setSelected] = useState('');

    const [diasConsumo, setDiasConsumo] = useState(null);

    //Api para buscar as datas para alimentar o calendário.
    useEffect(() => {

        api.get(rotaListComp, {
        }).then((response) => {

            setDadosCalendario(response.data.data[0]);

            setDataPrimeiroConsumo(response.data.data[0].data);
            setDiasConsumo(response.data.data[0].diasConsumoFirebase);

        }).catch((erro) => {

            console.log("Erro listagem para calendário " + erro);
        })
    }, [apiCalendario]);



    useEffect(() => {
        if (dadosCalendario != null) {
            console.log('Diferente');

            const dia = parseFloat(diasConsumo);
            const dataa = new Date(dataPrimeiroConsumo);
            const listaDatas = [];

            for (let i = 0; i < dia; i++) {
                const dataMultiplicada = new Date(dataa.getTime());
                dataMultiplicada.setDate(dataMultiplicada.getDate() + i);
                listaDatas.push(dataMultiplicada.toISOString().split('T')[0]);
            }

            setTeste(listaDatas);
            const tratada = listaDatas.join(',');

            const ttt = String(dataPrimeiroConsumo);
            setSelected(ttt);

            // console.log(ttt)
            console.log(selected)

        }
    }, []);







    const getMarked = () => {
        let marked = {};
        for (let i = 1; i <= 10; i++) {
            let day = i.toString().padStart(2, '0');
            let periods = [
                {
                    startingDay: i == 1,
                    endingDay: i == 10,
                    color: 'teal',
                },
                (i >= 2 && i <= 6) && {
                    startingDay: i == 2,
                    endingDay: i == 6,
                    color: 'orange',
                }
            ];
            marked[`2023-06-${day}`] = {
                periods
            };
        }
        return marked;
    };

    return (
        <View>
            <Calendar style={styles.espacoCalendario}

                markingType={'period'}
                markedDates={{
                    '2023-06-06': { marked: true, dotColor: '#50cebb' }
                }}
min


            />
        </View>
    )
}

export default Calendario