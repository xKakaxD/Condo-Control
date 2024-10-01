import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeLogin from './TelaDeLogin';
import TelaInicial from './TelaInicial';

// Define os tipos das rotas para TypeScript
export type RootStackParamList = {
  TelaDeLogin: undefined;
  TelaInicial: undefined; // TelaInicial: { username: string };Agora a TelaInicial recebe um parâmetro username
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaDeLogin">
        <Stack.Screen
          name="TelaDeLogin"
          component={TelaDeLogin}
          options={{
            headerShown: false, // Oculta o cabeçalho na tela de login
          }}
        />
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#4071D1', // Cor de fundo da barra de cabeçalho
            },
            headerTintColor: '#000000', // Cor do texto e ícones
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
