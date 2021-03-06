import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './Pages/App/App';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={App}></Route>
        </BrowserRouter>
    );
}