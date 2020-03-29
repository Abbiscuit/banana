import React from 'react';

import Container from '@material-ui/core/Container';
import HeaderDrawer from './HeaderDrawer';

const CommonFrame = props => {
  const { currentUser } = props;
  return (
    <React.Fragment>
      <HeaderDrawer currentUser={currentUser} />
      <Container maxWidth="lg">{props.children}</Container>
    </React.Fragment>
  );
};

export default CommonFrame;
