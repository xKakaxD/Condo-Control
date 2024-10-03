import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type TelaInicialProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaInicial'>;
};

export default function TelaInicial({ navigation }: TelaInicialProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Home!</Text>
      <Button title="Voltar para Login" onPress={() => navigation.navigate('TelaDeLogin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
