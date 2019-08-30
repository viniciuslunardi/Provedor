import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServicerWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServicerWorker();