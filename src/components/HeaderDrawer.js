import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const HeaderDrawer = props => {
  const { currentUser } = props;
  const [state, setState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = e => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar
        color="default"
        position="static"
        style={{
          marginBottom: 10,
          backgroundColor: 'white'
        }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={handleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ flex: 1, fontFamily: 'Comfortaa', fontWeight: '600' }}
          >
            BaNaNa
          </Typography>
          {currentUser && (
            <>
              <IconButton component={Link} to="/inbox">
                <Badge badgeContent={24} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  button
                  component={Link}
                  to="/profile"
                >
                  プロフィール
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  button
                  component={Link}
                  to="/account-setting"
                >
                  アカウント設定
                </MenuItem>
              </Menu>
            </>
          )}

          {/* {currentUser && (
            <Button onClick={() => auth.signOut()}>ログアウト</Button>
          )} */}
          {/* <Button component={Link} to="/about">
            サービス
          </Button> */}
        </Toolbar>
      </AppBar>

      <Drawer open={state} onClose={handleClose}>
        <Box
          style={{
            width: 200
          }}
        >
          <List>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="プロフィール" />
            </ListItem>
            <ListItem button component={Link} to="/account-setting">
              <ListItemText primary="アカウント設定" />
            </ListItem>

            <ListItem button component={Link} to="/123">
              <ListItemText primary="Not Found" />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/about">
              <ListItemText primary="このサービスについて" />
            </ListItem>
            <ListItem button onClick={() => auth.signOut()}>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
