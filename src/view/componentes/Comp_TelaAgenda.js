import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, Keyboard } from 'react-native';

//Importação do calendario.
import Calendario from '../componentes/Calendario';

//Importação da biblioteca de dropList.
import { SelectList } from 'react-native-dropdown-select-list';

//Importação do hookform.
import { useForm, Controller } from "react-hook-form";

const Comp_TelaAgenda = () => {

    //Pop-up para mostrat ao usuário.
    const mensagemSucesso = () => {
        Toast.show({
            type: 'info',
            text1: 'Medicamento atribuido'
        });
    };

    //Variável para identificar os dados para ir ao Firebase.
    const [idMedicamento, setIdMedicamento] = useState(null);
    const [idCompartimento, setIdCompartimento] = useState(null);

    //Variáveis para chamar as API.
    const [apiFire, setApiFire] = useState(false);
    const [apiComp, setApiCom] = useState(false);
    const [apiCalendario, setCalendario] = useState(false);

    //Habilitar o componete Modal.
    const [modalAtribuir, setModalAtribuir] = useState(false);

    //Configuração do DropList.
    const [resetDropdown, setResetDropdown] = useState(false);

    //Variáveis para prencher os DropList.
    const [dropList, setDropList] = useState("");

    //Compartimento da API.
    const compartimentos = [
        { key: '1', value: '1º Compartimento' },
        { key: '2', value: '2º Compartimento' },
        { key: '3', value: '3º Compartimento' },
        { key: '4', value: '4º Compartimento' },
        { key: '5', value: '5º Compartimento' },
        { key: '6', value: '6º Compartimento' },
        { key: '7', value: '7º Compartimento' },
        { key: '8', value: '8º Compartimento' },
        { key: '9', value: '9º Compartimento' }
    ];

    //API para abastecer a base no DropList.
    useEffect(() => {

        api.get(rota, {
        }).then((response) => {

            //Receber e atribui os valores ao DropList.
            let dadosDropList = response.data.data.map((item) => {
                return {
                    key: item.id_med,
                    value: item.nome_med
                }
            });
            setDropList(dadosDropList);

            console.log("Listagem ao carregar");

        }).catch((error) => {

            console.log("Erro API Listagem: " + error)
        })
    }, []);

    const [medicamentoListadoCompartimentos, setMedicamentoListadoCompartimentos] = useState(null);
    console.log(medicamentoListadoCompartimentos)

    useEffect(() => {

        api.get(rotaListComp, {
        }).then((response) => {

            setMedicamentoListadoCompartimentos(response.data.data);
            console.log("Listou por compartimento");
        }).catch((erro) => {

            console.log("Erro listagem por compartimento " + erro);
        })
    }, []);

    //Variável para armazenar os medicamentos listado por ID.
    const [medicamentoListado, setMedicamentoListado] = useState(null);

    //API para listar os medicamentos por ID.
    useEffect(() => {

        if (idMedicamento != null) {
            api.get(rotaID + idMedicamento, {
            }).then((response) => {

                setMedicamentoListado(response.data.data);
                console.log("Listagem - ID")

            }).catch((error) => {

                console.log("Erro API Listagem por ID:" + error)
            })
        }
    }, [idMedicamento]);

    //Função para chamar a API Firebase.
    useEffect(() => {

        if (medicamentoListado != null) {

            console.log("useEffect medicamento");
            setApiFire(true);
        }
    }, [medicamentoListado]);

    //Parâmetros do hook-form.
    const [formulario, setFormulario] = useState(null);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
    });

    //Captura os dados e atribui ao data.
    const onSubmit = data => {

        setFormulario(data);
        setIdMedicamento(data.medicamento);
        setIdCompartimento(data.compartimento);
    };

    //API para mandar os dados para a Maleta.
    useEffect(() => {

        if (apiFire === true) {
            //Manda o valor para o firebase e atribui ao compartimento.
            update(ref(bd, "maleta/" + "C" + idCompartimento),
                {

                    horarioInicial: medicamentoListado.horarioInicialFirebase,
                    minutoInicial: medicamentoListado.minutoInicialFirebase,
                    diaInicial: medicamentoListado.diaInicialFirebase,
                    mesInicial: medicamentoListado.mesInicialFirebase,
                    intervaloHoras: medicamentoListado.intervaloHorasFirebase,
                    diasConsumo: medicamentoListado.diasConsumoFirebase,

                })
                .then((response) => {

                    setModalAtribuir(false);
                    setResetDropdown(true);
                    mensagemSucesso();
                    setApiFire(false);
                    setApiCom(true);
                    console.log("API Firebase" + response);

                }).catch((error) => {

                    console.log("Erro API Firebase:" + error);
                });
        }
    }, [apiFire]);

    //Api para enviar o compartimento selecionado pelo usuário.
    useEffect(() => {

        if (apiComp === true) {

            api.put(rotaComp + idMedicamento, {

                CompartimentosFirebase: idCompartimento
            }).then((response) => {

                console.log("COMPAR")
                setApiCom(false);

            }).catch((error) => {

                console.log("Erro API Compartimento: " + error)
            })
        };
    }, [apiComp]);

};

export default Comp_TelaAgenda;



