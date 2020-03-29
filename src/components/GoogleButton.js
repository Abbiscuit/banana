import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const GoogleButton = () => {
  return (
    <Paper
      style={{
        marginBottom: 10,
        padding: 16,
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" gutterBottom style={{ fontWeight: 'normal' }}>
        Googleでログインする
      </Typography>
      <Button size="small" color="primary" variant="contained" fullWidth>
        Sign in with Google
      </Button>
    </Paper>
  );
};

export default GoogleButton;
