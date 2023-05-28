import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
    },
    // windS: {
    //     marginRight: 10,
    // },
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    progress: {
        width: 200,
        //marginTop: 20,
        marginBottom: 15,
        [theme.breakpoints.only("sm")]: {
            width: 100,
        },
        // [theme.breakpoints.down("xs")]: {
        //     width: 100,
        // },
    },
    humidityCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        //paddingBottom: 10,
    },
}))