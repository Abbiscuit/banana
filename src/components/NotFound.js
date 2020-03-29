import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Header from './Header';
import HomeIcon from '@material-ui/icons/Home';

import { Link } from 'react-router-dom';

const NotFound = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />
      <Paper
        elevation={0}
        style={{
          padding: 10,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          おっと！お探しのページが見つかりませんね。
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
    </React.Fragment>
  );
};

export default NotFound;
