import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';

import CommonFrame from '../components/CommonFrame';
import TipsAlert from '../components/TipsAlert';
import { db } from '../firebase';

const Messages = props => {
  const { currentUser } = props;
  const [text, setText] = useState('');

  const submitHandler = e => {
    const { uid, email } = currentUser;
    e.preventDefault();

    if (text.trim().length > 0) {
      db.collection('messages')
        .doc()
        .set({
          text: text,
          email: email,
          id: uid
        })

        .catch(error => console.error(error.message));
    } else {
      alert('文字を入力してください。');
    }

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
          <TipsAlert />

          <Paper
            style={{
              marginBottom: 10,
              padding: '20px 10px'
            }}
          >
            <form onSubmit={submitHandler}>
              <TextField
                name="text"
                type="text"
                value={text}
                placeholder="メッセージを届けよう"
                onChange={changeHandler}
                required
                multiline
                margin="normal"
                fullWidth
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
                {text && `文字数: ${text.trim().length}`}
              </Typography>
            </Box>
          )}
        </Box>

        {/* <Box>
          <Typography>過去の手紙を見る</Typography>
        </Box> */}
      </CommonFrame>
    </React.Fragment>
  );
};

export default Messages;
