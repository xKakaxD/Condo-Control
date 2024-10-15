import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function TelaHistorico() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerContainer}>HISTÓRICO DE PAGAMENTOS</Text>
      {/*Um contêiner que permite rolar a tela quando há muitos elementos*/}
      <ScrollView>
        <View style={styles.mesesContainer}>
        {/* Um componente que pode ser pressionado, com uma leve animação de opacidade ao toque. Usado para criar botões. */}
          <TouchableOpacity style={styles.mesJan}>
            <Text>Janeiro</Text>
            <Text>10/01/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesFev}>
            <Text>Fevereiro</Text>
            <Text>10/02/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesMar}>
            <Text>Março</Text>
            <Text>10/03/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesAb}>
            <Text>Abril</Text>
            <Text>10/04/2024</Text>
          </TouchableOpacity>
            
          <TouchableOpacity style={styles.mesMai}>
            <Text>Maio</Text>
            <Text>10/05/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesJun}>
            <Text>Junho</Text>
            <Text>10/06/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesJul}>
            <Text>Julho</Text>
            <Text>10/07/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesAg}>
            <Text>Agosto</Text>
            <Text>10/08/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesSet}>
            <Text>Setembro</Text>
            <Text>10/09/2024</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.mesOut}>
            <Text>Outubro</Text>
            <Text>10/10/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesNov}>
            <Text>Novembro</Text>
            <Text>10/11/2024</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.mesDez}>
            <Text>Dezembro</Text>
            <Text>10/12/2024</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.statusPg}>
            <View>Realizar o pagamento ao dia 10/09/2024</View>
        </TouchableOpacity>

        <View style={styles.status}>
          <View style={styles.legend}>
            <View style={[styles.status, styles.pago]}><Text>Pago</Text></View>
            <View style={[styles.status, styles.atrasado]}><Text>Atrasado</Text></View>
            <View style={[styles.status, styles.emAberto]}><Text>Em aberto</Text></View>
            <View style={[styles.status, styles.aVencer]}><Text>A vencer</Text></View>
          </View>
        </View>
      </ScrollView>
      
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

  headerContainer: {
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    alignItems: 'center',
    textAlign:'center',
    fontWeight:'bold',

  },
  //Responsáveis pelo style dos meses
  mesesContainer: {
    marginTop:80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mesJan: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  mesFev: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  mesMar: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  mesAb: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesMai: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesJun: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesJul: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesAg: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesSet: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesOut: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesNov: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },
  mesDez: {
    backgroundColor: '#C7EFCF',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginTop:20,
  },

  legend: { //Reponsável por alterar e dimensionar o texto das caixas de status
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  
  status: {  //Reponsável por alterar as dimensões das caixas de status
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },

    // Fim style meses
  pago: {
    backgroundColor: '#C7EFCF',
  },
  atrasado: {
    backgroundColor: '#F1A7A7',
  },
  emAberto: {
    backgroundColor: '#FCF6BD',
  },
  aVencer: {
    backgroundColor: '#D3D3E8',
  },
  statusPg:{
    fontWeight: 'bold',
    width: '100%',
    backgroundColor: '#4071D1',
    paddingVertical: 10,
    padding:10,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:40,
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
});