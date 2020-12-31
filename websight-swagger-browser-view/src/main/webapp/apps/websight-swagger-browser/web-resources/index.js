import React from 'react';
import ReactDOM from 'react-dom';

import 'websight-admin/GlobalStyle';

import SwaggerBrowser from './SwaggerBrowser.js';

class App extends React.Component {
    render() {
        return (
            <SwaggerBrowser/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app-root'));