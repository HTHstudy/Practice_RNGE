import React, {PureComponent} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {
  GameLoop,
  GameLoopUpdateEventOptionType,
} from 'react-native-game-engine';
import {SvgCssUri} from 'react-native-svg';

const vWidth = 220;
const vHeight = 264;
const width = Dimensions.get('window').width - 64;
const height = (width * vHeight) / vWidth;
const vWidth2 = 662;
const vHeight2 = 280;
const width2 = Dimensions.get('window').width - 64;
const height2 = (width2 * vHeight2) / vWidth2;

export default class Game extends PureComponent {
  state = {
    step: 0,
    bgStep: 0,
    fps: 0,
  };

  num = 0;
  elapse_time = Date.now();

  updateHandler = ({touches, screen, time}: GameLoopUpdateEventOptionType) => {
    const result = {...this.state};
    const FPS = Math.floor((1 / (Date.now() - this.elapse_time)) * 1000);

    this.elapse_time = Date.now(); // 현재 시간으로 초기화
    this.num += 1;
    result.fps = FPS;

    if (this.state.step > 7) result.step = 0;
    if (this.state.bgStep > 1) result.bgStep = 0;
    if (this.num % 10 === 0) result.step += 1;
    result.bgStep += 0.001;

    this.setState(result);
  };

  render() {
    const {step, bgStep, fps} = this.state;

    return (
      <GameLoop style={styles.container} onUpdate={this.updateHandler}>
        <View
          style={{
            borderWidth: 2,
            width: 64,
            position: 'absolute',
            top: 10,
            right: 16,
          }}>
          <Text>FPS : {fps}</Text>
        </View>
        <SvgCssUri
          width={width2 * 1.6}
          height={height2 * 1.6}
          viewBox={[vWidth2 * bgStep, 0, vWidth2, vHeight2].join(' ')}
          uri={
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/57786/background.svg'
          }
          style={{position: 'absolute', top: 50}}
        />
        <SvgCssUri
          width={width2 * 1.6}
          height={height2 * 1.6}
          viewBox={[vWidth2 * bgStep, 0, vWidth2, vHeight2].join(' ')}
          uri={
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/57786/midground.svg'
          }
          style={{position: 'absolute', top: 50}}
        />
        <SvgCssUri
          width={width2 * 1.6}
          height={height2 * 1.6}
          viewBox={[vWidth2 * bgStep, 0, vWidth2, vHeight2].join(' ')}
          uri={
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/57786/foreground.svg'
          }
          style={{position: 'absolute', top: 50}}
        />
        <SvgCssUri
          width={width * 0.4}
          height={height * 0.4}
          viewBox={[0, vHeight * step, vWidth, vHeight + 10].join(' ')}
          uri={
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/57786/dog-walk.svg'
          }
          style={{position: 'absolute', top: 100}}
        />
      </GameLoop>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
