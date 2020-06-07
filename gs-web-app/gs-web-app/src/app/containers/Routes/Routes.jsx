import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from '../Home';
import Registartion from '../Registration';
import Cabinet from '../Cabinet';
import CabinetGroup from '../CabinetGroup';
import CabinetTeachers from '../CabinetTeachers';
import CabinetGroupAdd from "../CabinetGroupAdd";
import CabinetTeachersAdd from "../CabinetTeachersAdd";
import ShowDetailsTeachers from "../ShowDetailsTeachers";
import ShowDetailsGroup from "../ShowDetailsGroup";
import Profile from "../Profile";
import Plan from "../Plan/Plan";
import Lessons from "../Lessons";
import Schedule from "../Schedule";
import TeacherLessons from "../TeacherLessons/TeacherLessons";

import TeacherLessonsAdd from "../TeacherLessonsAdd/TeacherLessonsAdd";
import { Routes } from '../../consts/routePaths';
import PrivateRoute from "../../utils/PrivateRoute";


const RoutesComponent = () => {
  return (
    <Switch>
      <Route exact path={Routes.LOGIN} component={Home}/>
      <PrivateRoute exact path={Routes.CABINET} component={Cabinet}/>
      <PrivateRoute exact path={Routes.CABINET_GROUP_LIST} component={CabinetGroup}/>
      <PrivateRoute exact path={Routes.CABINET_GROUP_LIST_ADD} component={CabinetGroupAdd}/>
      <PrivateRoute exact path={Routes.CABINET_TEACHERS_LIST} component={CabinetTeachers}/>
      <PrivateRoute exact path={Routes.CABINET_TEACHERS_LIST_ADD} component={CabinetTeachersAdd}/>
      <PrivateRoute exact path={Routes.CABINET_TEACHERS_PROFILE} component={Profile}/>
      <PrivateRoute exact path={Routes.CABINET_TEACHERS_LESSONS} component={TeacherLessons}/>
      <PrivateRoute exact path={`${Routes.CABINET_TEACHERS_LESSONS}/:id`} component={TeacherLessonsAdd}/>

      <PrivateRoute exact path={`${Routes.CABINET_GROUP_LIST}:id`} component={ShowDetailsTeachers}/>
      <PrivateRoute exact path={`${Routes.CABINET_TEACHERS_LIST}:id`} component={ShowDetailsGroup}/>

      <PrivateRoute exact path={Routes.CABINET_ASPIRANT_PROFILE} component={Profile}/>
      <PrivateRoute exact path={Routes.CABINET_ASPIRANT_PLAN} component={Plan}/>
      <PrivateRoute exact path={Routes.CABINET_ASPIRANT_LESSONS} component={Lessons}/>
      <PrivateRoute exact path={Routes.CABINET_ASPIRANT_SCHEDULE} component={Schedule}/>

      <Route exact path={Routes.REGISTRATION} component={Registartion}/>
      <Redirect from={Routes.HOME} to={Routes.LOGIN}/>
    </Switch>
  );
};

export default RoutesComponent;
