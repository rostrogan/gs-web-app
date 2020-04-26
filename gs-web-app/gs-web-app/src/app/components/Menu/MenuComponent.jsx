import * as React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import {Routes} from "../../consts/routePaths";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GroupIcon from '@material-ui/icons/GroupWork';
import {makeStyles} from "@material-ui/core/styles";
import {
  USER_ROLE_ADMIN,
  USER_ROLE_STUDENT,
  USER_ROLE_TEACHER
} from "../../consts/userRoles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const MenuComponent = ({role}) => {
  const classes = useStyles();
  let Menu = [];
  let MenuLink = [];

  switch (role) {

    case  USER_ROLE_ADMIN:
      Menu = [
        'Групи',
        'Викладачі',
      ];
      MenuLink = [
        Routes.CABINET_GROUP_LIST,
        Routes.CABINET_TEACHERS_LIST,
      ];
      break;

    case USER_ROLE_STUDENT:
      Menu = [
        'Мій Профіль',
        'Індивідуальний план',
        'Заняття',
        'Розклад',
      ];
      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_ASPIRANT_PLAN,
        Routes.CABINET_ASPIRANT_LESSONS,
        Routes.CABINET_ASPIRANT_SCHEDULE,
      ];
      break;

    case USER_ROLE_TEACHER:
      Menu = [
        'Мій Профіль',
        'Заняття',
      ];
      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_TEACHERS_LESSONS,
      ];
      break;

    default:

      Menu = [
        'Мій Профіль Аспірант',
        'Індивідуальний план',
        'Заняття',
        'Розклад',

        'Мій Профіль Викладач',
        'Заняття викладач',

        'Групи Адмін',
        'Викладачі Адмін',
      ];

      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_ASPIRANT_PLAN,
        Routes.CABINET_ASPIRANT_LESSONS,
        Routes.CABINET_ASPIRANT_SCHEDULE,

        Routes.CABINET_TEACHERS_PROFILE,
        Routes.CABINET_TEACHERS_LIST,

        Routes.CABINET_GROUP_LIST,
        Routes.CABINET_TEACHERS_LIST,
      ];
      break;
    //**admin**
    //Групи
    //Викладачі

    //**aspirant**
    //Групи
    //Викладачі
  }

  return (
    <>
      <div className={classes.toolbar}/>
      <List>
        <Divider/>
        {Menu.map((text, index) => (
          <div key={index}>
            <ListItem component={NavLink} to={MenuLink[index]}>
              <ListItemIcon>{ <GroupIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
            <Divider/>
          </div>
        ))}
      </List>
    </>
  );
};

export default MenuComponent;

