import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from './components/GlobalStyle';
import { App } from 'components/App';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        <GlobalStyles />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
