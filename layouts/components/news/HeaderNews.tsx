import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"

export default function FirstNews({}) {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.typeContainer}>
                <div className={classes.bar}></div>
                <p className={classes.typeText}>Politics</p>
            </div>
            <div className={classes.titleContainer}>
                <p className={classes.titleText}>Europe has fallen behind on covid-19 vaccination</p>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container:{
            width:'100%',
            height:'20%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'1%'
        },
        typeContainer:{
            width:'15%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            // alignItems:'center',
            flexDirection:'column'
        },
        titleContainer:{
            width:'65%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            // alignItems:'center'
        },
        typeText:{
            fontSize:20,
            fontWeight:'bold'
        },
        titleText:{
            fontSize:30,
            fontWeight:'normal'
        },
        bar:{
            display:'flex',
            width:'100%',
            height:'5%',
            backgroundColor:'black'
        }
    }),
);