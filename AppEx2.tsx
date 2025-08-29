import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type CounterState = {
  count: number;
};

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <View style={styles.container}>
        <Button title="+1" onPress={this.increment} />
        <Text style={styles.countText}>{this.state.count}</Text>
        <Button title="-1" onPress={this.decrement} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  countText: {
    fontSize: 40,
    marginVertical: 40
  }
});

export default Counter;
