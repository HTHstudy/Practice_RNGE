import React, {Component} from 'react';
import {Animated, View, StyleSheet, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';

interface Props {
  style: ViewStyle;
  hitSlop?: {top?: number; left?: number; right?: number; bottom?: number};
  source: string;
}

class BackgroundObject extends Component<Props> {
  animation: any;
  render() {
    const {style, hitSlop, source} = this.props;
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            ...style,
          }}
          hitSlop={hitSlop}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={source}
            loop // 애니메이션 반복에 대한 설정(true/false)
            autoPlay={true}
            speed={2} // 애니메이션 속도 지정
            resizeMode="cover"
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default BackgroundObject;
