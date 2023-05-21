import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importação das telas.
import Logo from './src/view/views/TelaLogo';
import Login from './src/view/views/TelaLogin';
import Cadastro from './src/view/views/TelaCadastro';
import RecuperarSenha from './src/view/views/TelaRecuperarSenha';
import Menu from './src/view/views/TelaMenu';
import Maleta from './src/view/views/TelaMaleta';
import Perfil from './src/view/views/TelaPerfil';
import TesteMaleta from './src/view/views/TelaTeste';
import Chat from './src/view/views/TelaChatComprar';
import Ajuda from './src/view/views/TelaAjuda';
import Agenda from './src/view/views/TelaAgenda';
import CadastroMedicamento from './src/view/views/TelaCadastroMedicamento';
import MeusMedicamentos from './src/view/views/TelaMeusMedicamentos';
import Loading from './src/view/views/TelaLoading';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      // initialRouteName='Meus medicamentos'
      // initialRouteName='Cadastro medicamento'
      // initialRouteName='Teste maleta'
      // initialRouteName='Login'
      >
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recuperar senha" component={RecuperarSenha} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Maleta" component={Maleta} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Teste maleta" component={TesteMaleta} />
        <Stack.Screen name="Chat compra" component={Chat} />
        <Stack.Screen name="Ajuda" component={Ajuda} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Cadastro medicamento" component={CadastroMedicamento} />
        <Stack.Screen name="Meus medicamentos" component={MeusMedicamentos} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;