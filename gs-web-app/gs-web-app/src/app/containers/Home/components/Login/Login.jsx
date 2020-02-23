import * as React from 'react';
import styles from './Login.module.scss';

import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Routes } from "../../../../consts/routePaths";

const useStyles = makeStyles({
    Card: {
        minWidth: 275,
        marginBottom: '20px',
    },
    Title: {
        fontWeight: '300',
        margin: '0',
        padding: '10px 8px',
        fontSize: '20px',
        color: '#000'
    },
    Pos: {
        marginBottom: 12,
    },
    Btn: {
        width: '100%',
        textTransform: 'initial',
        fontWeight: 500,
        "&:hover": {
            color: '#fff',
        }

    },
    BtnCenter: {
        margin: '0 auto',
        "&:hover": {
            color: '#fff',
        }
    }
});

const LoginComponent = () => {
    const classes = useStyles();

    return (
        <div className="page-container">
            <div className="container login">
                <Card className={classNames(classes.Card, classes.Pos)}>
                    <CardContent>
                        <Typography className={classes.Title} variant="h2" color="initial">
                            Для Абітурієнтів
                        </Typography>
                        <CardActions>
                            <Button
                                variant={"contained"}
                                color="primary"
                                className={classes.Btn}
                                href={Routes.HOME}
                            >
                                Подати реєстраційну форму
                            </Button>
                        </CardActions>
                        <CardActions>
                            <Button
                                variant={"contained"}
                                color="primary"
                                className={classes.Btn}
                                href={Routes.HOME}
                            >
                                Переглянути рейтинг
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography
                            className={classes.Title}
                            variant="h2"
                            color="initial">
                            Вхід
                        </Typography>
                        <CardActions>
                            <form action="">
                                <div className={styles.Wrapper}>
                                    <TextField
                                        label="Email"
                                        id="outlined-size-normal"
                                        defaultValue="test@gmail.com"
                                        variant="outlined"
                                        type="email"
                                    />
                                </div>
                                <div className={styles.Wrapper}>
                                    <TextField
                                        label="Пароль"
                                        id="outlined-size-normal"
                                        defaultValue="*****"
                                        variant="outlined"
                                        type="password"
                                    />
                                </div>
                                <div className={styles.Wrapper}>
                                    <Button
                                        variant={"contained"}
                                        color="primary"
                                        className={classes.BtnCenter}
                                        href={Routes.HOME}
                                    >
                                        Увійти
                                    </Button>
                                </div>
                            </form>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export default LoginComponent;