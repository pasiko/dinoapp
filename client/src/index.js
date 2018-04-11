import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/rootReducer';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
