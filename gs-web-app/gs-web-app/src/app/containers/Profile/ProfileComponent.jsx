import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Routes} from "../../consts/routePaths";
import Card from "@material-ui/core/Card";
import classNames from 'classnames';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Menu from "../../components/Menu/Menu";

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

const ProfileComponent = (props) => {
  const {
    userData,
    specialty,
    faculty,
    department,
  } = props;
  const classes = useStyles();
  const classes_card = useCardStyles();

  const fullName = `${userData.surname} ${userData.name} ${userData.patronymic}`;

  const drawer = (
    <Menu/>
  );


  const defaultFields = [
    'ПІБ',
    'Інститут/Факультет',
    'Кафедра',
    'Спеціальність',
    'Науковий керівник',
    'Термін підготовки',
    'Рік вступу',
    'Рік закінчення',
    'Термін підготовки',
    'Група',
    'Форма підготовки',
  ];

  const rows = [
    fullName,
    specialty,
    faculty,
    department,
    fullName,
  ];

  return (
    <div className="page-container">
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="mailbox folders">
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
              <TableContainer component={Paper}>
                <Table className={classes_card.table} aria-label="caption table">
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row" >
                          {defaultFields[index]} : {row}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ProfileComponent;
