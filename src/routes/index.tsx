import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styled-engine-sc';
import { ToastContainer } from 'react-toastify';
import Login from '../pages/Login';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { isAuthenticated } from '../services/auth';
import { theme } from '../styles/theme';

const Routes: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {isAuthenticated() && (
            <>
              <Route path="/" exact component={Home} />
            </>
          )}
          <Route path="/" exact component={Login} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Routes;
