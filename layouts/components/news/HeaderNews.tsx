import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import Link from 'next/link'
import {domainRegex,capitalizeFirstLetter} from "../../../lib/services/StringHelpers"

export default function FirstNews({title,topic,source}) {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.typeContainer}>
                <div className={classes.bar}></div>
                <p className={classes.typeText}>{capitalizeFirstLetter(topic)}</p>
            </div>
            <div className={classes.titleContainer}>
                <Link href={source} passHref={true}>
                    <Button className={classes.sourceText}>Source {domainRegex(source)}</Button>
                </Link>
                <p className={classes.titleText}>{title}</p>
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
            width:'20%',
            height:'100%',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            // backgroundColor:'red'
        },
        titleContainer:{
            width:'60%',
            height:'100%',
            // backgroundColor:'green'
        },
        typeText:{
            fontSize:'125%',
            fontWeight:'bold'
        },
        sourceText:{
            // backgroundColor:'red',
            marginTop:26,
            fontSize:'100%',
            fontWeight:'lighter',
            color:Colors.PrimaryColor
        },
        titleText:{
            fontSize:'180%',
            fontWeight:'normal',
            // backgroundColor:'blue',
        },
        bar:{
            display:'flex',
            width:'80%',
            height:'5%',
            backgroundColor:'black'
        }
    }),
);