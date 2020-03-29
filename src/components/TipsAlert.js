import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const TipsAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {/* <Paper
                style={{
                  marginBottom: 10,
                  padding: '20px 10px'
                }}
              > */}
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
        {/* </Paper> */}
      </Alert>
    </Collapse>
  );
};

export default TipsAlert;
