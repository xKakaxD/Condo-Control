import React, { useState } from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Image} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

export default function ComprovantePagamentos(){

return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
           <Text style={styles.header}>COMPROVANTE DE PAGAMENTO</Text> 
        </View> 

     <View style={styles.comprovanteContainer}>
      <Image source={require('../assets/images/pdf.png')} style={styles.pdfImage}/>
      <View style={styles.buttonContainer}>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ANEXAR COMPROVANTE</Text>
      </TouchableOpacity>
      </View>
     </View>


     




      <TouchableOpacity style={styles.footerContainer}>
        <Text style={styles.buttonVoltar}>VOLTAR</Text>
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
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    alignItems: 'center',
    textAlign:'center',
    fontWeight:'bold',

  },
  comprovanteContainer: {
    width: '90%',
    height: '70%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 50,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 20, 
  },
  
  pdfImage: {
    padding:'40%',
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#0093d1',
    padding: 15,
    borderRadius: 5,
    width: '100%',
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
  buttonVoltar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

}
)