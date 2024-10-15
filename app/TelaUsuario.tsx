import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type TelaInicialProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaInicial'>;
};

export default function TelaInicial({ navigation }: TelaInicialProps) {

  const [userData] = useState({
    imageUserUrl: 'https://via.placeholder.com/200',
    name: 'Luis Feliphe Baeta Elias Soares', 
    email: 'E-mail: 202208681646@alunos.estacio.br',
    fone:'Celular: (31) 0000-000',
    numAp:'Apartamento: 171',
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ÁREA DO USUÁRIO</Text>
      </View>

      <View style={styles.userContainer}>
      <Image source={require('../assets/images/ImageUser.png')} style={styles.imageUser} />
        
       
        <Text style={styles.username}>{userData.name}</Text>
       <Text style={styles.username}>{userData.email}</Text>
        <Text style={styles.username}>{userData.fone}</Text>
        <Text style={styles.username}>{userData.numAp}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>PAGAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>HISTÓRICO</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.footerContainer}>
        <Text style={styles.backButtonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5D2FF',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  userContainer: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 50,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 20, 
  },
  imageUser: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
 /* email:{
    fontSize: 19,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 5, 
  },*/
  
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0093d1',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});