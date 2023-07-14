import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

const pages = ['About', 'Projects', 'Contacts'];

import Logo from '@/img/s.webp'
import Globe from '@/img/icons/globe.png'
import ENG from '@/img/flag/lang_eng.png'
import LV from '@/img/flag/lang_lv.png'
import RU from '@/img/flag/lang_ru.png'
import Link from 'next/link';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='info' position="fixed" elevation={0}>
      <Container maxWidth="xl" className='navbar-container'>
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mt: 1,
              mb: 1,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <Image
              src={Logo}
              alt='logo'
              width={60}
              height={60}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mt: 1,
              mb: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <Image
              src={Logo}
              alt='logo'
              width={40}
              height={40}
            />
          </Typography>
          <Box className="navbar-buttons-container" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                color='inherit'
                sx={{ my: 2, display: 'block', fontSize: 16 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Language switch">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Image
                  src={Globe}
                  alt='Language switch'
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link href='/' locale='en'>
                <MenuItem key="en" onClick={handleCloseUserMenu}>          
                    <Image
                        style={{ marginRight: "5px"}}
                        src={ENG}
                        alt='English flag'
                        width={27}
                        height={15}
                    />
                    <Typography textAlign="center">
                      ENG
                    </Typography>

                </MenuItem>
              </Link>
              <Link href='/' locale='lv'>
                <MenuItem key="lv" onClick={handleCloseUserMenu}>
                  <Image
                      style={{marginRight: "5px"}}
                      src={LV}
                      alt='latvian flag'
                      width={27}
                      height={15}
                    />
                  <Typography textAlign="center">
                    LV
                  </Typography>
                </MenuItem>
              </Link>
              <Link href='/' locale='ru'>
                <MenuItem key="ru" onClick={handleCloseUserMenu}>
                    <Image
                      className='navbar-ru'
                      style={{marginRight: "5px"}}
                      src={RU}
                      alt='Russian flag'
                      width={27}
                      height={15}
                    />
                  <Typography textAlign="center">
                    RU
                  </Typography>
                </MenuItem>
              </Link>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;