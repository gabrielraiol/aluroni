import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Menu from './pages/Menu';
import Home from 'pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>
);
