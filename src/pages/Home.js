import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Header from '../components/Header';
import MailIcon from '@material-ui/icons/Mail';
import Footer from '../components/Footer';

const Home = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />

      <Box
        style={{
          padding: '10px'
        }}
      >
        <Paper
          elevation={0}
          style={{
            backgroundColor: 'yellow',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1531326240216-7b04ad593229?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: 350,
            marginBottom: 20
          }}
        ></Paper>

        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginBottom: 40
          }}
        >
          "虫歯の子どもの誕生日に、エールを送りたい！"
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginBottom: 40
          }}
        >
          "おばあちゃんにサプライズをしたい！"
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginBottom: 40
          }}
        >
          "お世話になった友達に感謝を伝えたい。"
        </Typography>
        <Button
          startIcon={<MailIcon />}
          fullWidth
          variant="contained"
          color="primary"
        >
          手紙を送る
        </Button>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
