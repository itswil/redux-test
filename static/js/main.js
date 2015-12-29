import ConsoleLogger from './src/console-logger';

ConsoleLogger.init();

import React from 'react';
import ReactDOM from 'react-dom';

import OrderMenu from './src/components/OrderMenu.jsx';

ReactDOM.render(<OrderMenu/>, document.getElementById('react-OrderMenu'));
