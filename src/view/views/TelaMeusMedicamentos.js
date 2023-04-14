import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, VirtualizedList } from 'react-native';

//Estilização da página.
import styles from '../styles/Style';

//Importação da API.
import api from "../../services/api";
const rota = "/ListagemMed";






const TelaMeusMedicamentos = ({ navigation }) => {

    const [medi, setMedi] = useState([]);

    useEffect(() => {

        api.get(rota, {

        }).then((response) => {
            setMedi(response.data.data)
            // console.log(response.data)

        }).catch((error) => {
            console.log(error)
        });
    }, []);

    // console.log(medi[0]);
    // console.log(medi[1]);
    // console.log(medi.data.data);


    for (let i = 0; i < 6; i++) {
        console.log(medi[i])
    }



    // const NOMES = [
    //     { id: 1, texto: "Dorflex" },
    //     { id: 2, texto: "Neosaldina" },
    //     { id: 3, texto: "Dipirona" },
    //     { id: 4, texto: "Dipirona" },
    //     { id: 5, texto: "Dipirona" },
    //     { id: 6, texto: "Dipirona" },
    //     { id: 7, texto: "Dipirona" },
    //     { id: 8, texto: "Dipirona" },

    // ]


    // const getItemCount = data => NOMES.length;

    // const getItem = (_data, index) => (
    //     NOMES[index]

    // );

    // //
    // const Medicamento = ({ texto }) => {





    //     return (
    //         <View style={styles.NavegacaoMenuMedicamentos}>
    //             <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
    //             <Text style={styles.textoNavegacaoMedicamentos}>{texto}</Text>
    //             <TouchableOpacity>
    //                 <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
    //             </TouchableOpacity>
    //         </View>
    //     )


    // }
    const getItem = (_data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`,
    });

    const getItemCount = _data => 3;

    const Item = ({ title }) => (
        <View style={styles.NavegacaoMenuMedicamentos}>
            <Image style={styles.logoNavegacaoMedicamentos} source={require('../images/medicine.png')} />
            <Text style={styles.textoNavegacaoMedicamentos}>{title}</Text>
            <TouchableOpacity>
                <Image style={styles.logoNavegacaoEditMedicamentos} source={require('../images/edit.png')} />
            </TouchableOpacity>
        </View>
    );
















    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.textoCabecalho}>Meus medicamentos</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.espacopesquisarMedicamentos}>
                    <Image style={styles.logoPesquisarMedicamentos} source={require('../images/search.png')} />
                    <TextInput disableFullscreenUI style={styles.inputPesquisarMedicamentos} placeholder='Pesquisar ...' placeholderTextColor={"#000"} />
                </View>
            </View>

            <View style={styles.espacoMeusMedicamentos}>

                {/* <VirtualizedList
                    // data={NOMES}
                    renderItem={({ item }) =>
                        <Medicamento texto={item.texto} />
                    }
                    initialNumToRender={3}
                    keyExtractor={item => item.id}

                    getItemCount={getItemCount}
                    getItem={getItem}
                />
 */}

                {/* <Medicamento

                        texto={"Dorffff"} />
                    <Medicamento texto={"ABCffff"} />
                    <Medicamento texto={"CDEffff"} /> */}

                <VirtualizedList
                    initialNumToRender={4}
                    renderItem={({ item }) =>
                        <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />


                {/* 
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
                </View> */}



            </View>

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