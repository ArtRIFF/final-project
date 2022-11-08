import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './global_scss/global_style.scss'
// import { BrowserRouter } from 'react-router-dom';
// import ViewProvider from './context';
// import store from './store/store';
// import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App className='global'/>
);




