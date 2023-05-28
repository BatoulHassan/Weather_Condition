import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    container: {
        backgroundColor: '#424242',
        height: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            paddingBottom: 20
          },
    },
    searchButton: {
        backgroundColor: "gray",
    },
    todayIcon: {
        width: '100px',
        marginBottom: 20
    },
    todayTempContainer: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
           paddingBottom: 20
          },
    },
    tempUnit: {
        opacity: 0.6
    },
    weatherType: {
        opacity: 0.6,
        [theme.breakpoints.down("sm")]: {
            paddingBottom: 20
          },
    },
    todayDateContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        opacity: 0.6,
        [theme.breakpoints.down("md")]: {
            flexDirection: "column" ,
          },
          [theme.breakpoints.down("sm")]: {
            paddingBottom: 20
          },
    },
    locationContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.6,
        [theme.breakpoints.down("sm")]: {
           paddingBottom: 20
          },
    },
    location: {
        marginLeft: '5px'
    }
}))