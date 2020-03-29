import React, { useState } from 'react';
import Header from '../components/Header';

// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import GoogleButton from '../components/GoogleButton';
import { auth } from '../firebase';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errorText, setErrorText] = useState('');
  const { email, password } = credentials;

  const submitHandler = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        // console.log('login', user);
      })
      .catch(error => {
        setErrorText(error.message);
      });
    reset();
  };
  const changeHandler = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setCredentials({
      email: '',
      password: ''
    });
    setErrorText('');
  };

  return (
    <React.Fragment>
      <Header />

      <Box style={{ padding: 10 }}>
        <Card style={{ marginBottom: 20 }}>
          <form onSubmit={submitHandler}>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                ログインして始める
              </Typography>
              <TextField
                label="メールアドレス"
                type="email"
                name="email"
                autoComplete="username"
                value={email}
                onChange={changeHandler}
                fullWidth
              />
              <TextField
                label="パスワード"
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={changeHandler}
                fullWidth
              />
              <Typography>{errorText}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                type="submit"
                fullWidth
              >
                ログイン
              </Button>
            </CardActions>
          </form>
        </Card>

        <GoogleButton />

        <Button
          style={{ textAlign: 'center', width: '100%', color: '#666' }}
          variant="text"
          size="small"
          color="inherit"
          component={Link}
          to="/signup"
        >
          アカウントを持っていない？
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Login;
