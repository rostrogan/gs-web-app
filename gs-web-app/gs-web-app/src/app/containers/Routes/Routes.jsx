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


const RoutesComponent = () => {
  return (
    <Switch>
      <Route exact path={Routes.LOGIN} component={Home}/>
      <Route exact path={Routes.CABINET} component={Cabinet}/>
      <Route exact path={Routes.CABINET_GROUP_LIST} component={CabinetGroup}/>
      <Route exact path={Routes.CABINET_GROUP_LIST_ADD} component={CabinetGroupAdd}/>
      <Route exact path={Routes.CABINET_TEACHERS_LIST} component={CabinetTeachers}/>
      <Route exact path={Routes.CABINET_TEACHERS_LIST_ADD} component={CabinetTeachersAdd}/>
      <Route exact path={Routes.CABINET_TEACHERS_PROFILE} component={Profile}/>
      <Route exact path={Routes.CABINET_TEACHERS_LESSONS} component={TeacherLessons}/>
      <Route exact path={`${Routes.CABINET_TEACHERS_LESSONS}/:id`} component={TeacherLessonsAdd}/>

      <Route exact path={`${Routes.CABINET_GROUP_LIST}:id`} component={ShowDetailsTeachers}/>
      <Route exact path={`${Routes.CABINET_TEACHERS_LIST}:id`} component={ShowDetailsGroup}/>

      <Route exact path={Routes.CABINET_ASPIRANT_PROFILE} component={Profile}/>
      <Route exact path={Routes.CABINET_ASPIRANT_PLAN} component={Plan}/>
      <Route exact path={Routes.CABINET_ASPIRANT_LESSONS} component={Lessons}/>
      <Route exact path={Routes.CABINET_ASPIRANT_SCHEDULE} component={Schedule}/>

      <Route exact path={Routes.REGISTRATION} component={Registartion}/>
      <Redirect from={Routes.HOME} to={Routes.LOGIN}/>
    </Switch>
  );
};

export default RoutesComponent;
