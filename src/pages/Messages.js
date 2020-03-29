import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';

import CommonFrame from '../components/CommonFrame';
import { useEffect } from 'react';
import { db } from '../firebase';

const Messages = props => {
  const { currentUser } = props;
  const [text, setText] = useState('');

  const submitHandler = e => {
    const { uid, email } = currentUser;
    e.preventDefault();

    // console.log(text);

    db.collection('messages')
      .doc()
      .set({
        text: text,
        email: email,
        id: uid
      })

      .catch(error => console.error(error.message));

    setText('');
  };

  const changeHandler = e => {
    setText(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <CommonFrame currentUser={currentUser}>
        <Box>
          <Paper
            style={{
              marginBottom: 10,
              padding: '20px 10px'
            }}
          >
            <Typography gutterBottom color="textSecondary">
              BaNaNaの使い方
            </Typography>
            <Typography gutterBottom>
              イマドキのメッセージアプリのように、いつでもあなたに声かけはしません。
            </Typography>
            <Typography gutterBottom>
              気になったら開いてみよう
              <span role="img" aria-label="letter">
                💌
              </span>
            </Typography>
          </Paper>
          <Paper
            style={{
              marginBottom: 10,
              padding: '20px 10px'
            }}
          >
            <form onSubmit={submitHandler} style={{ display: 'flex' }}>
              <TextField
                style={{ flex: 1, marginRight: 8 }}
                name="text"
                type="text"
                value={text}
                placeholder="メッセージを届けよう"
                onChange={changeHandler}
              />
              <Button
                startIcon={<MailIcon />}
                variant="contained"
                size="small"
                color="primary"
                type="submit"
              >
                送信
              </Button>
            </form>
          </Paper>
          {text && (
            <Box style={{ padding: 10 }}>
              <Typography gutterBottom>{text}</Typography>
              <Typography color="textSecondary">
                {text && `文字数: ${text.length}`}
              </Typography>
            </Box>
          )}
        </Box>
      </CommonFrame>
    </React.Fragment>
  );
};

export default Messages;
