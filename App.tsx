import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Game from './components/Game/Game';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Game />
    </SafeAreaView>
  );
};

export default App;
