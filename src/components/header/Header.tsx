import Link from '@material-ui/core/Link';
import logo from 'assets/images/logo.png';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  makeStyles,
  createStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  MenuItem,
  MenuList,
  Popper,
  Grow,
  Button,
  ClickAwayListener
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    logo: {
      maxHeight: '8rem'
    },
    links: {
      display: 'flex',
      flexDirection: 'column'
    },
    middle: {
      flexGrow: 1
    }
  })
);

const MainMenu: React.FC = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event: React.MouseEvent<EventTarget>) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  }
  const links: JSX.Element[] = [
    <Link component={RouterLink} to="/register">
      Cadastrar
    </Link>,
    <Link component={RouterLink} to="/login">
      Entrar
    </Link>,
    <Link component={RouterLink} to="/home">
      Início
    </Link>
  ];

  const popover: JSX.Element = (
    <>
      <Button
        ref={anchorRef}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Toggle Menu Grow
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        keepMounted
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onClick={handleClose}>
                  {links.map((link: JSX.Element, index: number) => (
                    <MenuItem key={index}> {link} </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );

  return sm ? popover : <>links</>;
};

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <img className={classes.logo} src={logo} alt={'MGLASS'} />
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
        <Grid item className={classes.middle}>
          <h3> Faça Já seu orçamento </h3>
        </Grid>
        <Grid item xs={3}>
          <Paper className={`${classes.paper} ${classes.links}`}>
            <MainMenu />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
