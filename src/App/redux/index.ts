import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers, // Todos los reducers
    {}, // Estado inicial,
    applyMiddleware(reduxThunk),
);
  
export {store, Provider};