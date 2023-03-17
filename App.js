import React from 'react';
import {Provider} from 'react-redux';
import ExternalTab from './src/navigation/ExternalTab';
import InternalStack from './src/navigation/InternalStack';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ExternalTab />
      {/* <InternalStack /> */}
    </Provider>
  );
};

export default App;
