import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

import { store, history } from '@redux/configure-store';

import 'normalize.css';
import './index.scss';

import  RoutesComponent  from './routes/routes';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}><RoutesComponent/></HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
