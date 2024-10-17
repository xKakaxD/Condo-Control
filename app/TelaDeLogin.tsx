import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image, Modal } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type TelaDeLoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'TelaDeLogin'>;
};

export default function TelaDeLogin({ navigation }: TelaDeLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setVisible] = useState(true);


  const handleLogin = () => {
    // Navega para a TelaInicial após o login
    navigation.navigate('TelaInicial');
  };

  async function sendFormLogin() {
    let response = await fetch('http://10.0.2.2:8080/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        }

        )
      }
    );
  }

  return (
    <View style={styles.container}>
      {/* Logo ou imagem no topo */}
      <Image source={require('../assets/images/logoLogin.png')} style={styles.logo} resizeMode="contain" />

      {/* Campo de usuário */}
      <Text style={styles.label}>USUÁRIO</Text>
      <TextInput
        style={styles.input}
        placeholder="INSIRA SEU REGISTRO DE USUÁRIO" //TODO:DEFINIR OQ SERÁ, ERA O AP?
        value={username}
        onChangeText={setUsername}
      />

      {/* Campo de senha */}
      <Text style={styles.label}>SENHA</Text>
      <TextInput
        style={styles.input}
        placeholder="INSIRA SUA SENHA DE USUÁRIO"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Esqueci a senha */}
      <TouchableOpacity onPress={() => alert('Esqueci a senha')}>
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </TouchableOpacity>

      <View>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <View style={styles.btnSenha}>
            <Text style={styles.txtModal}>Usuario ou senha errada</Text>
            <Button title="fechar" onPress={() => setVisible(false)} />
          </View>
        </Modal>
      </View>

      {/* Botão de login */}
      <View style={styles.buttonContainer}>
        <Button title="ENTER" color="#007FFF" onPress={sendFormLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5D2FF',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,

  },
  label: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  forgotPassword: {
    width: "100%",
    alignSelf: 'flex-end',
    marginRight: '10%',
    color: '#007FFF',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 5,
  },
  btnSenha: {
    backgroundColor: "#C0C0C0",
    margin: 20,
    padding: 20,
    borderRadius: 7,
    elevation: 10,
    flex: 3,
    justifyContent: 'center',
  },
  txtModal: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: 'red'
  },

});
