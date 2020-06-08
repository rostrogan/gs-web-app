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
import { ExpandLess, ExpandMore} from "@material-ui/icons";
import {CardContent} from "@material-ui/core";
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

const LessonsComponent = (props) => {
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
          <CardContent>
            <Card className={classNames(classes_card.Card, classes_card.Pos)}>
              <List
                component="nav"
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText>
                    Екзистенціальна філософія 1. Практична риторика
                  </ListItemText>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={!open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem className={classes.nested}>
                      <ListItemText>
                        <CardContent>
                        <ol>
                          <li>
                            1 жовт. 2019 р. отримав 5
                          </li>
                          <li>
                            8 жовт. 2019 р. отримав 4
                          </li>
                          <li>
                            15 жовт. 2019 р. був відсутній
                          </li>
                          <li>
                            22 жовт. 2019 р. отримав 5
                          </li>
                          <li>
                            29 жовт. 2019 р. отримав 3
                          </li>
                          <li>
                             лист. 2019 р. отримав 5
                          </li>
                          <li>
                            12 лист. 2019 р. отримав 3
                          </li>
                        </ol>
                        </CardContent>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Card>
          </CardContent>
        </main>
      </div>
    </div>
  );
};

export default LessonsComponent;
