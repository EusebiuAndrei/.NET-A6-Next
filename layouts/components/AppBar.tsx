import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles/AppBarStyles"
import {Login,Register} from "./auth"
import Logout from "./auth/Logout";
import Button from "@material-ui/core/Button";
import {useAuthorization} from "../../lib/authorize";
import {useRouter} from "next/router";
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'
export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const {isAuthorized} = useAuthorization();
    const router = useRouter();

    console.log("~~~~~~~~~~~~~~~~~~")
    console.log(isAuthorized)

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {!isAuthorized && <MenuItem onClick={handleMenuClose} style={{padding: 0, display: 'flex'}}><Login /></MenuItem>}
            {!isAuthorized && <MenuItem onClick={handleMenuClose} style={{padding: 0, display: 'flex'}}><Register /></MenuItem>}
            {isAuthorized && <MenuItem onClick={handleMenuClose} style={{padding: 0, display: 'flex'}}>
                <Button style={{flexGrow: 1}}>
                    My Profile
                </Button>
            </MenuItem>}
            {isAuthorized && <MenuItem onClick={handleMenuClose} style={{padding: 0, display: 'flex'}}><Logout /></MenuItem>}
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar className={classes.appBarContainer} position="static">
                <Toolbar style={{display: 'flex', justifyContent:'flex-start'}}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleProfileMenuOpen}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Link href="/">
                        <IconButton
                            className={classes.menuButton}
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <HomeIcon
                                className={classes.homeIcon}
                            />
                        </IconButton>
                    </Link>
                    <Typography className={classes.title} variant="h6" noWrap>
                        News detection
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    {isAuthorized && <Button variant='contained' color='primary' onClick={() => router.push('/validate-news')}>
                        Validate News
                    </Button>}
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}
