import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import { useEffect } from 'react';
import { auth } from './firebase';
import Messages from './pages/Messages';
import WorkInProgress from './components/WorkInProgress';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unregisterFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unregisterFromAuth();
  }, []);

  const params = { currentUser };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            currentUser ? (
              <Redirect to="/messages" />
            ) : (
              <Home {...props} {...params} />
            )
          }
        />
        <Route
          exact
          path="/messages"
          render={props =>
            currentUser ? (
              <Messages {...props} {...params} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/about"
          render={props => <About {...props} {...params} />}
        />
        <Route
          exact
          path="/login"
          render={props =>
            currentUser ? <Redirect to="/" /> : <Login {...props} {...params} />
          }
        />
        <Route
          exact
          path="/signup"
          render={props =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <Signup {...props} {...params} />
            )
          }
        />
        {/* Work in progress */}
        <Route
          exact
          path="/profile"
          render={props =>
            currentUser ? (
              <WorkInProgress {...props} {...params} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/account-setting"
          render={props =>
            currentUser ? (
              <WorkInProgress {...props} {...params} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
