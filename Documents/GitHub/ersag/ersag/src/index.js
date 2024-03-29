import React
//{ Provider }
  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { newTheme } from './Style';

//import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
//import { store, persistor } from './redux/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>*/}
        <ChakraProvider theme={newTheme}>
          <App />
        </ChakraProvider>
    {/*</PersistGate>
    </Provider>*/}
  </React.StrictMode>
);



reportWebVitals();
