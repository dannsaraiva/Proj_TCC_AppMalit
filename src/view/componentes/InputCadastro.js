import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";

//Estilização.
import styles from "../styles/Style";

const InputCadastro = () => {
    return (
        <View style={styles.dadosUsuario}>
            <TextInput style={styles.textoInput} 
            />
        </View>
    )
};

export default InputCadastro;