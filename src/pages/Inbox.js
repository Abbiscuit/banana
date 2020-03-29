import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CommonFrame from '../components/CommonFrame';
import Box from '@material-ui/core/Box';
// import InboxIcon from '@material-ui/icons/Inbox';
import { Link } from 'react-router-dom';
import { db } from '../firebase';

const Inbox = props => {
  const { currentUser } = props;
  // const [mailbox, setMailbox] = useState([]);

  // useEffect(() => {
  //   const messageRef = db.collection('messages').get();
  //   messageRef
  //     .then(doc => {
  //       const box = [];
  //       doc.forEach(mail => {
  //         box.push(mail.data());
  //         setMailbox(box);
  //         console.log(mailbox);
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error.message);
  //     });
  // }, [currentUser]);

  return (
    <CommonFrame>
      <Paper
        style={{
          padding: 10,
          marginBottom: 10
        }}
      >
        <Typography variant="h6" gutterBottom color="textSecondary">
          お手紙ポスト
        </Typography>
      </Paper>

      <Box component={Link} to="/new">
        <Paper
          style={{
            padding: 10
          }}
        >
          {/* {mailbox.map(m => (
            <Typography variant="h6" gutterBottom color="textSecondary">
              {m.text}
            </Typography>
          ))} */}
        </Paper>
      </Box>
    </CommonFrame>
  );
};

export default Inbox;
