import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { AppRoutes } from './routes/AppRoutes';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);