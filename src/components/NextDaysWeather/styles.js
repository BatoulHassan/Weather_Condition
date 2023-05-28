import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    nextWeather: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    imageIcon: {
        width: 50,
        paddingBottom: 20,
    },
    cardContent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        opacity: 0.5,
        padding: '0 0 20px 0' ,
        // [theme.breakpoints.down("xs")]: {
        //     padding: 0 ,
        //   },
    },
    grid: {
        paddingTop: 60 ,
        paddingBottom: 60,
        [theme.breakpoints.down("md")]: {
            paddingTop: 18 ,
            paddingBottom: 40,
          },
    },
    cardDate: {
        whiteSpace: 'nowrap',
    }
}))