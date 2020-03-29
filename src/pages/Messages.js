import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import CommonFrame from '../components/CommonFrame';

const Messages = props => {
  const { currentUser } = props;
  return (
    <CommonFrame currentUser={currentUser}>
      <Box
        style={{
          height: '100%'
        }}
      >
        <Paper
          style={{
            backgroundColor: 'yellow',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1526280524276-51b1c8a46321?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: 450,
            marginBottom: 20,
            padding: '20px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h6" gutterBottom>
            ちょっとしたイベントの前に、ちょっとしたメッセージを、いつもとは違う伝え方で。
          </Typography>
          <Typography
            style={{
              flex: 1
            }}
          >
            虫歯の子どもの誕生日に、エールを送りたい！
          </Typography>

          <Button
            startIcon={<MailIcon />}
            fullWidth
            variant="contained"
            color="primary"
          >
            手紙を送る
          </Button>
        </Paper>
      </Box>
    </CommonFrame>
  );
};

export default Messages;
