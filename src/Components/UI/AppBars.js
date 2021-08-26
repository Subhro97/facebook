import React, { Fragment, useContext, useState, useEffect } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowDropDownCircleSharpIcon from "@material-ui/icons/ArrowDropDownCircleSharp";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Logo from "./Logo";
import ImageAvatars from "./ImageAvatars";

import AuthContext from "../../store/auth-context";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#3a3b3c",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    height: "40px",
    borderBottomRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    borderTopRightRadius: "50px",
    borderTopLeftRadius: "50px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    paddingTop: "11px",
    fontSize: ".9375rem",

    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  arrow: {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    margin: "3.5px",

    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
  },

  user_cont: {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    margin: "3.5px",
    paddingTop: "6px",
    paddingBottom: "6px",
    borderRadius: "0px",
    borderBottomRightRadius: "18px",
    borderBottomLeftRadius: "18px",
    borderTopRightRadius: "18px",
    borderTopLeftRadius: "18px",
    fontFamily: " Helvetica, Arial, sans-serif",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
  },

  user: {
    fontSize: ".9375rem",
    fontWeight: "500",
    marginLeft: "4px",
    color: "#e4e6eb",
  },

  options: {
    position: "relative",
    left: "-25.75rem",
  },

  option_select: {
    fontSize: "28px",
    marginTop: "3px",
  },

  space: {
    position: "relative",
    left: "68px",
  },

  space_2: {
    position: "relative",
    left: "135px",
  },

  space_3: {
    position: "relative",
    left: "203px",
  },

  space_4: {
    position: "relative",
    left: "271px",
  },

  space_betw: {
    width: "12px",
  },

  border_bottom: {
    border: "0.5px solid grey",
    width: "100%",
  },

  small: {
    width: "30px",
    height: "30px",
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <div>Dark Mode</div>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const style = classes.small;

  return (
    <Fragment>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <div>
              <Logo />
            </div>
            <div className={classes.space_betw}>&nbsp;</div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Facebook"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.options}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="secondary">
                  <HomeIcon className={classes.option_select} />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.space}
              >
                <Badge badgeContent={10} color="secondary">
                  <GroupIcon className={classes.option_select} />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.space_2}
              >
                <Badge badgeContent={8} color="secondary">
                  <OndemandVideoIcon className={classes.option_select} />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.space_3}
              >
                <Badge color="secondary">
                  <StorefrontIcon className={classes.option_select} />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.space_4}
              >
                <Badge badgeContent={5} color="secondary">
                  <SupervisedUserCircleIcon className={classes.option_select} />
                </Badge>
              </IconButton>
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                className={classes.user_cont}
              >
                <ImageAvatars image={props.pic} style={style} />

                <Typography className={classes.user}>{props.name}</Typography>
              </IconButton>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                className={classes.arrow}
              >
                <MenuIcon className={classes.back} />
              </IconButton>
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                className={classes.arrow}
              >
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.arrow}
              >
                <Badge badgeContent={21} max={20} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleProfileMenuOpen}
                className={classes.arrow}
              >
                <Badge color="secondary">
                  <ArrowDropDownCircleSharpIcon />
                </Badge>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <div className={classes.border_bottom} />
      </div>
    </Fragment>
  );
}
