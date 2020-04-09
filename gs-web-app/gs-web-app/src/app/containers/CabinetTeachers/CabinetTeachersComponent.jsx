import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import GroupIcon from '@material-ui/icons/GroupWork';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Routes} from "../../consts/routePaths";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import classNames from 'classnames';
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import {reduxForm} from "redux-form";
import FormSearchTeachers from "./components/FormSearchTeachers";
import {Link} from "react-router-dom";

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

const CabinetTeachersCompoent = (props) => {
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
    createData('Коваль О.В.', 'ТЕФ', `${Routes.TEACHERS_SHOW_DETAILS}1`),
    createData('Препотенська М. П.', 'ТЕФ', '/'),
    createData('Олізько Ю. М.', 'ТЕФ', '/'),
  ];

  const FormSearchGroup = reduxForm({ form: "FormSearchGroup" })(FormSearchTeachers);

  //id="delete"
  //Потріюно буде видалити.
  //Для перегляду даних
  const onSubmit = (formData) => {
    console.log(formData)
  };

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
              <FormSearchGroup onSubmit={onSubmit}/>
              <br/>
              <Button variant="contained" href={Routes.CABINET_TEACHERS_LIST_ADD} color="primary">
                Додати викладача
              </Button>
              <br/>
              <br/>
              <TableContainer component={Paper}>
                <Table className={classes_card.table} aria-label="caption table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes_card.table_th}>Викладач</TableCell>
                      <TableCell align="center"/>
                      <TableCell align="center" className={classes_card.table_th}>Факультет</TableCell>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row" >
                          {row.name_group}
                        </TableCell>
                      <TableCell align="center"/>
                        <TableCell align="center">{row.name_faculty}</TableCell>
                        <TableCell align="center"/>
                        <TableCell align="center"/>
                      <TableCell align="center">
                        <Button variant="contained" component={Link} to={row.detail_link} color="primary">
                          Детальніше
                        </Button>
                      </TableCell>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
                      <TableCell align="center"/>
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

export default CabinetTeachersCompoent;