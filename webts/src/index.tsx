import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './views/Home';
// import Task from './views/Task';

import TaskRoutes from './routes/';

ReactDOM.render(
  <React.StrictMode>
    <TaskRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);
