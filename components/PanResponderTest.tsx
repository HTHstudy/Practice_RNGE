import React, {Component} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
import LottieView from 'lottie-react-native';

class PanResponderTest extends Component {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event(
      [null, {dx: this.pan.x, dy: this.pan.y}],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            ...styles.box,
            transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
          }}
          {...this.panResponder.panHandlers}
          hitSlop={{top:-10}}>
          <LottieView source={require('../images/rocket.json')} autoPlay loop />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default PanResponderTest;
