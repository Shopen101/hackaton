import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            padding: '18px 35px'
        },
    },
}));

export default function ContainedButtons({ text }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">{text}</Button>
        </div>
    );
}
