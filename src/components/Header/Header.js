import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, IconButton, Badge, Menu, MenuItem, Fade } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Header.css';



function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Link to="/">
            <Button variant="outlined" color="primary">
              Webshop
            </Button>
          </Link>

          <div className="grow" />

          <Link to="/order" className="margin__right">
            <Button variant="outlined" color="primary">
              Order
            </Button>
          </Link>
          <Link to='/checkout' className="margin__right">
            <Button variant="outlined" color="primary">
              Checkout
            </Button>
          </Link>
          <IconButton aria-label="show 17 new notifications" color="primary">
            <Badge badgeContent={17} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="primary"
            onClick={handleClick}
          >
            <AccountCircle />
          </IconButton>

          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </div >
  )
}

export default Header
