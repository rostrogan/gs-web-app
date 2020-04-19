import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import classNames from 'classnames';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";
import Menu from "../../components/Menu/Menu";
import {CardContent} from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  form: {
    width: '100%',
  },
  inputSearch: {
    width: '100%',
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

const ScheduleComponent = (props) => {
  const {container} = props;
  const classes = useStyles();
  const classes_card = useCardStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Menu/>
  );

  return (
    <div className="page-container">
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="mailbox folders">
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
            <TableContainer component={Paper}>
              <Table className={classes_card.table} aria-label="caption table">
                <TableHead>
                  <Typography>I тиждень</Typography>
                  <TableRow>
                    <TableCell align="left" colSpan={2}>Понеділок</TableCell>
                    <TableCell align="left" colSpan={2}>Вівторок</TableCell>
                    <TableCell align="left" colSpan={2}>Середа</TableCell>
                    <TableCell align="left" colSpan={2}>Четвер</TableCell>
                    <TableCell align="left" colSpan={2}>П'ятниця</TableCell>
                    <TableCell align="left" colSpan={2}>Субота</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br/>
            <TableContainer component={Paper}>
              <Table className={classes_card.table} aria-label="caption table">
                <TableHead>
                  <Typography>ІІ тиждень</Typography>
                  <TableRow>
                    <TableCell align="left" colSpan={2}>Понеділок</TableCell>
                    <TableCell align="left" colSpan={2}>Вівторок</TableCell>
                    <TableCell align="left" colSpan={2}>Середа</TableCell>
                    <TableCell align="left" colSpan={2}>Четвер</TableCell>
                    <TableCell align="left" colSpan={2}>П'ятниця</TableCell>
                    <TableCell align="left" colSpan={2}>Субота</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br/>
            <TableContainer component={Paper}>
              <Table className={classes_card.table} aria-label="caption table">
                <TableHead>
                  <Typography>IІІ тиждень</Typography>
                  <TableRow>
                    <TableCell align="left" colSpan={2}>Понеділок</TableCell>
                    <TableCell align="left" colSpan={2}>Вівторок</TableCell>
                    <TableCell align="left" colSpan={2}>Середа</TableCell>
                    <TableCell align="left" colSpan={2}>Четвер</TableCell>
                    <TableCell align="left" colSpan={2}>П'ятниця</TableCell>
                    <TableCell align="left" colSpan={2}>Субота</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="td" scope="row" align="left" colSpan={2}>Інформатика</TableCell>
                  </TableRow>
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

export default ScheduleComponent;
