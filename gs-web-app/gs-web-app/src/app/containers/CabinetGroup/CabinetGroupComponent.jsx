import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {Routes} from '../../consts/routePaths';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import FormSearchGroupComponent from './components/FormSearchGroup';
import {Link} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import apiRequestService from '../../services/api/apiRequestService';
import Menu from '../../components/Menu/Menu';
import classNames from 'classnames';
import facultiesService from '../../services/facultiesService';
import {makeSelectFacultiesData} from '../../state/selectors/global';

const mapStateToProps = createStructuredSelector({
    faculties: makeSelectFacultiesData(),
});

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

const CabinetGroupComponent = (props) => {
    const {container, groups, faculties} = props;
    const classes = useStyles();
    const classes_card = useCardStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    useEffect(() => {
        apiRequestService.getAllFaculties();
        apiRequestService.getAllGroups();
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Menu/>
    );

    const FormSearchGroup = reduxForm({form: 'FormSearchGroup'})(FormSearchGroupComponent);

    //id="delete"
    //Потріюно буде видалити.
    //Для перегляду даних
    const onSubmit = (formData) => {
        console.log(formData);
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
                            <Button variant="contained" component={Link} to={Routes.CABINET_GROUP_LIST_ADD}
                                    color="primary">
                                Додати групу
                            </Button>
                            <br/>
                            <br/>
                            {
                                faculties &&
                                <TableContainer component={Paper}>
                                    <Table className={classes_card.table} aria-label="caption table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className={classes_card.table_th}>Назва групи</TableCell>
                                                <TableCell align="center"/>
                                                <TableCell align="center"
                                                           className={classes_card.table_th}>Факультет</TableCell>
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
                                        {
                                            groups &&
                                            <TableBody>
                                                {
                                                    groups.map((group) => {
                                                        const {_id, name, faculty} = group || {};

                                                        const parsedName = facultiesService.getFacultyById(faculty);

                                                        return (
                                                            <TableRow key={_id}>
                                                                <TableCell component="th" scope="row">
                                                                    {name}
                                                                </TableCell>
                                                                <TableCell align="center"/>
                                                                <TableCell align="center">
                                                                    {parsedName}
                                                                </TableCell>
                                                                <TableCell align="center"/>
                                                                <TableCell align="center"/>
                                                                <TableCell align="center">
                                                                    <Button variant="contained" component={Link}
                                                                            to={group.detail_link} color="primary">
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
                                                        );
                                                    })
                                                }
                                            </TableBody>
                                        }
                                    </Table>
                                </TableContainer>
                            }
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
};


export default connect(mapStateToProps)(CabinetGroupComponent);
