import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('window').width;

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        {/* Seção A - Tamanhos Fixos */}
        <View style={styles.sectionA}>
          <View style={styles.boxA} />
          <View style={styles.boxA} />
          <View style={styles.boxA} />
        </View>

        {/* Seção B - Tamanhos Dinâmicos */}
        <View style={styles.sectionB}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Imagem Responsiva</Text>
          <Image
            source={{ uri: 'https://www.pudim.com.br/pudim.jpg' }}
            style={{
              width: screenWidth * 0.9,
              height: (screenWidth * 0.9) * 0.75, // proporção 4:3
              resizeMode: 'contain'
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionA: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eee',
  },
  boxA: {
    width: 60,
    height: 60,
    backgroundColor: 'tomato'
  },
  sectionB: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  }
});

export default App;
