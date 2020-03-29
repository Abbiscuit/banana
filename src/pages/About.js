import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import MailIcon from '@material-ui/icons/Mail';
import Footer from '../components/Footer';

const About = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />

      <Box
        style={{
          height: '100%'
        }}
      >
        <Paper
          elevation={0}
          style={{
            backgroundColor: 'yellow',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80")',
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
          <Box style={{ marginBottom: 10 }}>
            <Typography variant="h6" gutterBottom>
              昔ながらのお手紙です。
            </Typography>
          </Box>
          <Box style={{ marginBottom: 10 }}>
            <Typography gutterBottom>
              イマドキのメッセージアプリのように、通知で悩ませることがありません。
            </Typography>
          </Box>
          <Box style={{ marginBottom: 10 }}>
            <Typography gutterBottom>いつでも、好きなタイミングで。</Typography>
          </Box>
          <Box style={{ flex: 1 }}>
            <Typography gutterBottom>
              手紙を確認。そっと送り返しましょう
              <span role="img" aria-label="love letter">
                💌
              </span>
            </Typography>
          </Box>

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
      <Footer />
    </React.Fragment>
  );
};

export default About;
