import * as React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import PeopleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Routes} from "../../consts/routePaths";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GroupIcon from '@material-ui/icons/GroupWork';
import {makeStyles} from "@material-ui/core/styles";
import {USER_ROLE_ADMIN, USER_ROLE_APPLICANT, USER_ROLE_ENROLLEE, USER_ROLE_POSTGRAD} from "../../consts/userRoles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const MenuComponent = (props) => {
  const classes = useStyles();
  let Menu = [];
  let MenuLink = [];

  switch (props.role) {

    case  USER_ROLE_ADMIN:
      Menu = [
        'Мій Провіль',
        'Індивідуальний план',
        'Заняття',
        'Розклад',
      ];
      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_GROUP_LIST,
        Routes.CABINET_TEACHERS_LIST,
        Routes.CABINET_TEACHERS_LIST,
      ];
      break;

    case USER_ROLE_POSTGRAD:
      Menu = [
        'Мій Провіль',
        'Індивідуальний план',
        'Заняття',
        'Розклад',
      ];
      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_GROUP_LIST,
        Routes.CABINET_TEACHERS_LIST,
        Routes.CABINET_TEACHERS_LIST,
      ];
      break;

      case USER_ROLE_ENROLLEE:
      Menu = [
        'Мій Провіль',
        'Індивідуальний план',
        'Заняття',
        'Розклад',
      ];
      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_GROUP_LIST,
        Routes.CABINET_TEACHERS_LIST,
        Routes.CABINET_TEACHERS_LIST,
      ];
      break;

      case USER_ROLE_APPLICANT:
      Menu = [
        'Мій Провіль',
        'Індивідуальний план',
        'Заняття',
        'Розклад',
      ];
      MenuLink = [
        Routes.CABINET_ASPIRANT_PROFILE,
        Routes.CABINET_GROUP_LIST,
        Routes.CABINET_TEACHERS_LIST,
        Routes.CABINET_TEACHERS_LIST,
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
            <ListItem button component={Link} to={MenuLink[index]}>
              <ListItemIcon>{index % 2 === 0 ? <GroupIcon/> : <PeopleIcon/>}</ListItemIcon>
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

