import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import GroupIcon from '@material-ui/icons/GroupWork';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Routes} from "../../../consts/routePaths";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import classNames from 'classnames';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      height: 100,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    top: 'inherit',
    bottom: 'inherit',
    height: `calc(100% - 101px)`
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const useCardStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  table_th: {
    fontWeight: 700,
  }
});

const Cabinet = (props) => {
  const {container} = props;
  const classes = useStyles();
  const classes_card = useCardStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Menu = ['Групи', 'Викладачі'];
  const MenuLink = [
    Routes.CABINET_GROUP_LIST,
    Routes.CABINET_TEACHERS_LIST
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar}/>
      <List>
        <Divider/>
        {Menu.map((text, index) => (
          <>
            <ListItem button component="a" key={index} href={MenuLink[index]}>
              <ListItemIcon>{index % 2 === 0 ? <GroupIcon/> : <PeopleIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
            <Divider/>
          </>
        ))}
      </List>
    </div>
  );

  function createData(name_group, name_faculty, detail_link) {
    return { name_group, name_faculty, detail_link};
  }

  const rows = [
    createData('та-91ф', 'ТЕФ', '/'),
    createData('тв-91ф', 'ТЕФ','/'),
    createData('тр-91ф', 'ТЕФ', '/'),
  ];

  return (
    <div className="page-container">
      <div className={classes.root}>
        <CssBaseline/>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Card className={classNames(classes_card.Card, classes_card.Pos)}>
            <CardContent>
              <form className={classes_card.root} noValidate autoComplete="on">
                <TextField id="standard-basic" label="Пошук" />
              </form>
              <br/>
              <Button variant="contained" href='/' color="primary">
                Додати групу
              </Button>
              <br/>
              <br/>
              <TableContainer component={Paper}>
                <Table className={classes_card.table} aria-label="caption table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Назва групи</TableCell>
                      <TableCell align="right">Факультет</TableCell>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                      <TableCell align="right"/>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row" className={classes_card.table_th}>
                          {row.name_group}
                        </TableCell>
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row" className={classes_card.table_th}>
                            {row.name_group}
                          </TableCell>
                        <TableCell align="right">{row.name_faculty}</TableCell>
                        <TableCell align="right">
                          <Button variant="contained" href={row.link} color="primary">
                            Детальніше
                          </Button>
                        </TableCell>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                        <TableCell align="right"/>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

Cabinet.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default Cabinet;
