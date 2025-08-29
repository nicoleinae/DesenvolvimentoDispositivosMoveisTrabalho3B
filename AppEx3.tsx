import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

type State = {
  justify: 'flex-start' | 'center' | 'flex-end';
  align: 'flex-start' | 'center' | 'flex-end';
};

class App extends Component<{}, State> {
  state: State = {
    justify: 'flex-start',
    align: 'flex-start',
  };

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title="Topo Esquerda" onPress={() => this.setState({ justify: 'flex-start', align: 'flex-start' })} />
          <Button title="Centro" onPress={() => this.setState({ justify: 'center', align: 'center' })} />
          <Button title="Baixo Direita" onPress={() => this.setState({ justify: 'flex-end', align: 'flex-end' })} />
        </View>

        <View style={[styles.boxContainer, {
          justifyContent: this.state.justify,
          alignItems: this.state.align
        }]}>
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    height: 300,
    backgroundColor: '#ccc',
    marginTop: 30
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  }
});

export default App;
