import React from 'react';

import {Provider} from 'react-redux';
import {store} from './app/store';

import {SafeAreaView} from 'react-native';

import {User} from './features/user/User';

function Prg(): JSX.Element {
  return (
    <SafeAreaView>
      <User />
    </SafeAreaView>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Prg />
    </Provider>
  );
}

export default App;
