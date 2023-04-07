import React from 'react';
import { AppBar, IconButton, Box, Toolbar, Typography, Menu, Container, Button, MenuItem, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

import MenuListRoot from '../../commonComponents/menu';
import logo from '../../../assets/images/logo.png';
import colors from '../../../constant/colors';

import { headerItems } from './helper/data';

const StartButton = styled(Button)(() => ({
    borderRadius: '2rem',
    fontSize: '11px',
    textTransform: 'capitalize',
    fontWeight: '600',
    background: colors.orange,
    boxShadow: 'none',
    marginLeft: '0.5rem',
    padding: '6px 13px',
    '&:hover': {
        background: colors.orange,
    },
}));

const HeaderButton = styled(Button)(() => ({
    fontSize: '12px',
    textTransform: 'capitalize',
    boxShadow: 'none',
    marginLeft: '0.5rem',
    color: 'rgb(43 49 82 / 72%)'
}));

function AppBarRoot() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const TitleWithLogo = ({ styles }) => {
        return (
            <>
                <Grid sx={styles}>
                    <img src={logo} width="70%" />
                </Grid>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontWeight: 700,
                        color: colors.dardGrey,
                        textDecoration: 'none',
                        ...styles
                    }}
                >
                    similarweb
                </Typography>
            </>
        )
    }

    return (
        <AppBar position="static" sx={{ background: colors.white, boxShadow: 'none', color: colors.black, padding: {xs: '0rem', sm: '0rem 0rem', md: '0rem 2rem', lg: '0rem 5rem'} }}>
            <Container maxWidth="xl" sx={{padding: '0px'}}>
                <Toolbar>
                    <TitleWithLogo styles={{display: { xs: 'none', md: 'flex' }}} />
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
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
                        >
                            {headerItems.map((item) => (
                                item.isMenu ? <MenuItem onClick={handleCloseNavMenu}>{item.title}</MenuItem> : <HeaderButton>{item.title}</HeaderButton>
                            ))}
                        </Menu>
                    </Box>
                    <TitleWithLogo styles={{display: { xs: 'flex', md: 'none' }}} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {headerItems.map((item) => (
                            item.isMenu ? <MenuListRoot details={item} /> : <HeaderButton>{item.title}</HeaderButton>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
                        <IconButton><TravelExploreOutlinedIcon sx={{ color: colors.black2 }} fontSize="small" /></IconButton>
                        <IconButton><PersonOutlinedIcon sx={{ color: colors.black2 }} fontSize="small" /></IconButton>
                        <StartButton variant="contained">Get started</StartButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarRoot;
