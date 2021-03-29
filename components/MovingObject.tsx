import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  ViewStyle,
} from 'react-native';
import LottieView from 'lottie-react-native';

interface Props {
  style: ViewStyle;
  hitSlop?: {top?: number; left?: number; right?: number; bottom?: number};
  source: string;
}

class MovingObject extends Component<Props> {
  animation: any;
  pan = new Animated.ValueXY();

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
      this.animation.resume(); // 터치 시 애니메이션 시작
    },
    onPanResponderMove: Animated.event(
      [null, {dx: this.pan.x, dy: this.pan.y}],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      this.pan.flattenOffset();
      this.animation.pause(); // 애니메이션 일시중지
    },
  });

  render() {
    console.log(this.pan);
    const {style, hitSlop, source} = this.props;
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            ...styles.box,
            transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
            ...style,
          }}
          {...this.panResponder.panHandlers}
          hitSlop={hitSlop}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={source}
            loop // 애니메이션 반복에 대한 설정(true/false)
            speed={2}
            resizeMode="cover"
          />
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
    // position: 'absolute',
    // top: 40,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    // backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default MovingObject;
