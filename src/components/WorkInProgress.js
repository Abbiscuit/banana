import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Header from './Header';
import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom';
import Footer from './Footer';

const WorkInProgress = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />
      <Paper
        elevation={0}
        style={{
          padding: 10,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          あ！こちらのページは作成中です。
          <br />
          もう少しお待ちくださいね！
        </Typography>
        <Button
          startIcon={<HomeIcon />}
          variant="contained"
          color="secondary"
          component={Link}
          to="/"
          disableElevation
        >
          ホーム画面へ戻る
        </Button>
      </Paper>
      <Footer />
    </React.Fragment>
  );
};

export default WorkInProgress;
