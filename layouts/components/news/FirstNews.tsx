import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"

export default function FirstNews({}) {
    const classes = useStyles();
    return(
        <div className={classes.firstNewsContainer}>

            <div className={classes.textFirstNews}>
                <h1 className={classes.title}>
                    The New York Times
                </h1>
                <p className={classes.subTitle}>
                    The New York Times is an American daily newspaper based in New York City with a worldwide influence and readership. Nicknamed "the Gray Lady", the Times has long been regarded within the industry as a national "newspaper of record". Founded in 1851, the paper has since won 130 Pulitzer Prizes, more than any other.
                </p>
            </div>
            <div className={classes.imageContainer}>
                <Box className={classes.boxStyle} boxShadow={13}>
                    <img 
                        className={classes.imgStyle}
                        src="https://images.pexels.com/photos/902194/pexels-photo-902194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                </Box>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        firstNewsContainer:{
            width:'100%',
            height:'80%',
            display:'flex',
            flexDirection:'row'
        },
        textFirstNews:{
            width:'35%',
            height:'100%',
            ...Styles.center,
            padding:'2%',
            display:'flex',
            flexDirection:'column'
        },
        imageContainer:{
            width:'65%',
            height:'100%',
            ...Styles.center,
        },
        boxStyle:{
            width:'90%',
            height:'90%',
            borderRadius:15,
        },
        imgStyle:{
            ...Styles.fill,
            objectFit:'cover',
            borderRadius:10,
        },
        title:{
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            textAlign:'center',
            fontSize:'200%',
        },
        subTitle:{
            color:Colors.DarkGray,
            fontSize:'110%',
            textAlign:'center',
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
        },
        newsTypes:{
            marginTop:'2%',
            display:'flex',
            justifyContent:'space-around',
            borderTopWidth:1,
            borderTopColor:Colors.Black
        },
        buttonStyle:{
            borderWidth:0,
            borderBottomWidth:1,
            borderBottomColor:Colors.LightGray,
            borderRadius:0,
            padding:3
        }
    }),
);