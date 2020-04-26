import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {makeStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import classNames from 'classnames';
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";
import {CardContent} from "@material-ui/core";
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
  table: {
    minWidth: 650,
  },
  h2: {
    fontWeight: 700,
    color: "rgba(0,0,0,.54)",
    paddingBottom: "initial"
  },
  headerText : {
    "& > th": {
      color: "rgba(0,0,0,.54)",
      fontWeight: "700",
      fontSize: "13px"
    }
  }
}));



const PlanComponent = () => {
  const classes = useStyles();

  const drawer = (
    <Menu/>
  );

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
          <Card>
            <CardContent className={classes.h2}>
                Індивідуальний навчальний план
            </CardContent>
          </Card>
          <br/>
          <Card className={classNames(classes.Card, classes.Pos)}>
            <CardContent>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <Typography>1 семестр</Typography>
                  <TableRow className={classes.headerText}>
                    <TableCell align="left" colSpan={4}>
                      Назва навчальної дисципліни
                    </TableCell>
                    <TableCell align="left" colSpan={4}>
                      Кількість кредитів
                    </TableCell>
                    <TableCell align="left" colSpan={4}>
                      Форма атестації
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      Індивідуальний навчальний план
                    </TableCell>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      8
                    </TableCell>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      Екзамен
                    </TableCell>

                  </TableRow>
                </TableBody>
              </Table>
              <br/>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <Typography>2 семестр</Typography>
                  <TableRow className={classes.headerText}>
                    <TableCell align="left" colSpan={4}>
                      Назва навчальної дисципліни
                    </TableCell>
                    <TableCell align="left" colSpan={4}>
                      Кількість кредитів
                    </TableCell>
                    <TableCell align="left" colSpan={4}>
                      Форма атестації
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      Індивідуальний навчальний план
                    </TableCell>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      8
                    </TableCell>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      Екзамен
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br/>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <Typography>3 семестр</Typography>
                  <TableRow>
                    <TableCell align="left" colSpan={4}>
                      Назва навчальної дисципліни
                    </TableCell>
                    <TableCell align="left" colSpan={4}>
                      Кількість кредитів
                    </TableCell>
                    <TableCell align="left" colSpan={4}>
                      Форма атестації
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      Індивідуальний навчальний план
                    </TableCell>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      8
                    </TableCell>
                    <TableCell component="th" scope="row" align="left" colSpan={4}>
                      Екзамен
                    </TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default PlanComponent;
