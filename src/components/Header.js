import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Header = props => {
  const { currentUser } = props;
  return (
    <AppBar
      color="default"
      position="static"
      style={{
        backgroundColor: 'white'
      }}
    >
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          style={{
            flex: 1,
            fontFamily: 'Comfortaa',
            fontWeight: '600',
            textDecoration: 'none',
            color: 'black'
          }}
        >
          BaNaNa
        </Typography>

        <Button component={Link} to="/about">
          サービス
        </Button>
        {currentUser ? (
          <Button onClick={() => auth.signOut()}>ログアウト</Button>
        ) : (
          <Button component={Link} to="/login">
            ログイン
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
