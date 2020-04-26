import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';
import {reduxForm} from 'redux-form';
import FormAddTeachers from './components/FormAddTeachers';
import Typography from '@material-ui/core/Typography';
import Menu from '../../components/Menu/Menu';

import apiRequestService from '../../services/api/apiRequestService';

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

const CabinetTeachersAddComponent = (props) => {
    const classes = useStyles();
    const classes_card = useCardStyles();
    const drawer = (
        <Menu/>
    );

    const FormSearchGroup = reduxForm({form: 'FormSearchGroup'})(FormAddTeachers);

    //id="delete"
    //Потріюно буде видалити.
    //Для перегляду даних
    const onSubmit = (formData) => {
        apiRequestService.registerTeacher(formData);
    };

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
                    <Card className={classNames(classes_card.Card, classes_card.Pos)}>
                        <CardContent>
                            <Typography className={classes.Title} variant="h6" color="initial" component={'h6'}>
                                Додати Викладача
                            </Typography>
                            <FormSearchGroup onSubmit={onSubmit}/>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
};

export default CabinetTeachersAddComponent;
