import React from 'react';
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
import CardContent from "@material-ui/core/CardContent";
import FullWidthTabs from "./components/Tabs";
import AlertDialogSlide from "./components/ModalDialog";
import Menu from "../../components/Menu/Menu";

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

const ShowDetailsGroupComponent = (props) => {
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

  function createData(name_teacher, name_faculty, name_department) {
    return { name_teacher, name_faculty, name_department};
  }

  const rows = [
    createData('та-91ф', 'Кафедра автоматизації проектування енергетичних процесів і систем', 'Теплоенергетичний факультет'),
  ];


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
              <TableContainer component={Paper}>
                <Table className={classes_card.table} aria-label="caption table">
                  <TableBody>
                    <TableRow >
                    {rows.map((row, key) => (
                      <div key={key}>
                        <div key={row.name}>
                          <TableCell style={{width: '100%', display: 'flex'}}><b>Назва групи: </b>&nbsp;{row.name_teacher}</TableCell>
                        </div>
                        <div key={row.name}>
                          <TableCell align="center" style={{width: '100%', display: 'flex'}}><b>Кафедра:</b>&nbsp;{row.name_faculty}</TableCell>
                        </div>
                        <div key={row.name}>
                          <TableCell align="center" style={{width: '100%', display: 'flex'}}><b>Факультет:&nbsp;</b>{row.name_department}</TableCell>
                        </div>
                      </div>
                    ))}
                   </TableRow>
                  </TableBody>
                </Table>
                <CardContent>
                  <AlertDialogSlide />
                </CardContent>
                <FullWidthTabs />
            </TableContainer>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ShowDetailsGroupComponent;
