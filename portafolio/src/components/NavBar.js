import { Button, AppBar, Toolbar, Typography, makeStyles } from  '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  

export function NavBar() {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={ classes.title }>
                Edgar Delgadillo Montano
              </Typography>
              <Button color="inherit">Acerca de mi</Button>
              <Button color="inherit">Estudios</Button>
              <Button color="inherit">Contáctame</Button>       
            </Toolbar>
          </AppBar>
        </div>
      );
}