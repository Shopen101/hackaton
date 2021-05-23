import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars({ openCenterSnack, message, setOpenCenterSnack, typeSnack }) {
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenCenterSnack(false)
      };

    return (
        <div className={classes.root}>
            <Snackbar open={openCenterSnack} autoHideDuration={3000} onClose={handleClose}>
                <Alert severity={typeSnack}>{message}</Alert>
            </Snackbar>
        </div>
    );
}
