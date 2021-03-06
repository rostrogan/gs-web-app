import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import classNames from 'classnames';
import Collapse from "@material-ui/core/Collapse";
import {CardContent} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import AlertMarkAdd from "./components/ModalDialog";
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

const TeacherLessonsAddComponent = (props) => {
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

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
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

              <ul style={{listStyle: 'none'}}>
                <li>
                  <ul style={{listStyle: 'none'}}>
                    <li>Група: тр-91ф</li>
                    <li>Предмет: Іноземна мова для наукової діяльності 1</li>
                  </ul>
                </li>
              </ul>
              <Card>
                <List
                  component="nav"
                >
                  <ListItem button onClick={handleClick}>
                    <ListItemText>
                      Іванов Іван
                    </ListItemText>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                  </ListItem>
                  <Collapse in={!open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested}>
                        <ListItemText>
                          <ul style={{listStyle: 'none'}}>
                            <li>4 жовт. 2019 р. отримав 5</li>
                            <li> 11 жовт. 2019 р. отримав 3</li>
                            <li>18 жовт. 2019 р. отримав 4</li>
                            <li>25 жовт. 2019 р. був відсутній</li>
                            <li>8 лист. 2019 р. був відсутній</li>
                            <li>1 лист. 2019 р. отримав 5</li>
                            <li>15 лист. 2019 р. отримав 4</li>
                          </ul>
                          <AlertMarkAdd />

                        </ListItemText>
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </Card>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TeacherLessonsAddComponent;


