import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    drawerPaper: {
       backgroundColor: '#424242',
       width: '370px',
       color: 'white',
       [theme.breakpoints.down("xs")]: {
        width: '100%'
      },
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 20px',
    },
    closeButtonContainer: {
         display: 'flex',
         justifyContent: 'flex-end',
    },
   
}))