import * as React from 'react';
import { View, Image } from 'react-native';
import Lottie from 'lottie-react-native';

//Estilização.
import styles from '../../../Style';
import { useNavigation } from '@react-navigation/native';

const TelaLogo = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.espacoLogo}>
                <Image style={styles.logoCarregamento}
                    source={require('../images/Logo_Malit.png')} />
                <Lottie style={styles.jsonCarregamento}
                    source={require('../../assets/loading/loading.json')}
                    autoPlay
                    speed={0.4}
                    loop
                    ={false}
                    onAnimationFinish={() => navigation.navigate('Login')}
                />
            </View>
        </View >
    )
}

export default TelaLogo;