import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Footer = () => {
  return (
    <Paper
      elevation={2}
      square
      style={{
        marginTop: 100,
        height: 150,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%'
      }}
    >
      {/* <Typography color="textPrimary">hello footer</Typography> */}
      <Typography color="textPrimary" style={{ flex: 1 }}></Typography>
      <Typography color="textSecondary" style={{ textAlign: 'center' }}>
        @hnyka | 2020
      </Typography>
    </Paper>
  );
};

export default Footer;
