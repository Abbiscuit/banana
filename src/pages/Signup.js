import React from 'react';
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
import { useState } from 'react';
import { auth } from '../firebase';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: ''
  });
  const [errorText, setErrorText] = useState('');
  const { displayName, email, password } = credentials;

  const submitHandler = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('registered', user);
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
      displayName: '',
      email: '',
      password: ''
    });
    setErrorText('');
  };

  return (
    <React.Fragment>
      <Header />

      <Box style={{ padding: 10 }}>
        <Card style={{ marginBottom: 10 }}>
          <form onSubmit={submitHandler}>
            <CardContent>
              <Typography variant="h5" component="h3" gutterBottom>
                あたらしくアカウントを作成する
              </Typography>
              <TextField
                label="ユーザーネーム"
                type="text"
                name="displayName"
                fullWidth
                onChange={changeHandler}
                value={displayName}
              />
              <TextField
                label="メールアドレス"
                type="email"
                name="email"
                autoComplete="username"
                fullWidth
                onChange={changeHandler}
                value={email}
              />
              <TextField
                label="パスワード"
                type="password"
                name="password"
                autoComplete="current-password"
                fullWidth
                onChange={changeHandler}
                value={password}
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
                登録する
              </Button>
            </CardActions>
          </form>
        </Card>

        <Button
          style={{ textAlign: 'center', width: '100%', color: '#666' }}
          variant="text"
          size="small"
          color="inherit"
          component={Link}
          to="/login"
        >
          すでにアカウントを持っている？
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Signup;
