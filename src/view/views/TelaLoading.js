import React, { useEffect, useState } from "react";
import { View } from "react-native"
import Lottie from 'lottie-react-native';
import styles from "../styles/Style";

const TelaLoading = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}>

                <Lottie
                    source={require('../componentes/loading.json')}
                    autoPlay
                    speed={1.4}
                    loop
                    ={false}
                    onAnimationFinish={() => navigation.navigate('Menu')}
                />
            </View>
        </View >
    )
};

export default TelaLoading;