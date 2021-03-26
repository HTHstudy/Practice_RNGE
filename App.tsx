import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Game from './components/Game/Game';
import PanResponderTest from './components/PanResponderTest';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Game /> */}
      <PanResponderTest />
    </SafeAreaView>
  );
};

export default App;
