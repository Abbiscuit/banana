import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CommonFrame from '../components/CommonFrame';
import Box from '@material-ui/core/Box';
// import InboxIcon from '@material-ui/icons/Inbox';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { db } from '../firebase';

const Inbox = props => {
  const { currentUser } = props;
  const [mailbox, setMailbox] = useState([]);

  useEffect(() => {
    let unsub = db
      .collection('messages')
      .where('id', '==', currentUser.uid)
      .onSnapshot(
        querySnapshot => {
          let docArray = [];
          querySnapshot.docs.forEach(doc => {
            docArray.push({
              id: doc.id,
              text: doc.data().text,
              email: doc.data().email
            });
          });
          setMailbox(docArray);
        },
        err => {
          console.error(err.message);
        }
      );

    return () => unsub();
  }, [currentUser]);

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

      <Box>
        <List>
          {mailbox.length > 0 &&
            mailbox.map(mail => (
              <React.Fragment key={mail.id}>
                <ListItem button component={Link} to={'/'}>
                  <ListItemText primary={`${mail.text}`} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
        </List>
      </Box>
    </CommonFrame>
  );
};

export default Inbox;
