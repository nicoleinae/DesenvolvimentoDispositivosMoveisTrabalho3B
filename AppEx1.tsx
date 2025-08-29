import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

interface AppProps {
}

interface AppState {
  nome: string;
  tamanho: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 20, 
  }
});


class Greeting extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: '',
      tamanho: 20 
    };
  }

  pegaNome = (texto: string) => {
    if (texto.length > 0) {
      this.setState({ nome: 'Olá: ' + texto });
    } else {
      this.setState({ nome: '' });
    }
  }

  pegaTamanho = (texto: string) => {
    const tamanho = parseInt(texto);
    if (!isNaN(tamanho)) {
      this.setState({ tamanho });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Input para definir o tamanho da fonte */}
        <TextInput 
          style={styles.input}
          placeholder='Digite o tamanho da fonte'
          keyboardType="numeric"
          onChangeText={this.pegaTamanho}
        />

        {/* Input para o nome */}
        <TextInput 
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={this.pegaNome}
          underlineColorAndroid="transparent"
        />

        {/* Texto que usa o tamanho de fonte dinâmico */}
          <Text style={[styles.texto, { fontSize: this.state.tamanho }]}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default Greeting;
