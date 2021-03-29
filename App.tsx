import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import Game from './components/Game/Game';
import MovingObject from './components/MovingObject';
import BackgroundObject from './components/BackgroundObject';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const animationSource = {
  cat: require('./images/cat.json'),
  rocket: require('./images/rocket.json'),
  bike: require('./images/bike.json'),
  background: require('./images/background.json'),
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Game /> */}
      <BackgroundObject
        style={{width: width, height: height}}
        source={animationSource.background}
      />
      <MovingObject
        style={{width: 100, height: 100}}
        source={animationSource.cat}
      />
    </SafeAreaView>
  );
};

export default App;
