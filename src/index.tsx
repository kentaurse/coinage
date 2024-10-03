import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { iconLibrarySetup } from './utils/iconConfig';
import App from './components/App';
import './styles/main.sass';

iconLibrarySetup();

const queryClient = new QueryClient()

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>,
    document.getElementById('root'),
);
