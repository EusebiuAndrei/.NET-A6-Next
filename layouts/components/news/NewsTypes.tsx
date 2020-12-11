import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import Button from '@material-ui/core/Button';

const typesToRender = ["Politics","Sports","IT","Local","Science","Photography","Movies"]

export default function FirstNews({}) {
    const classes = useStyles();
    return(
        <div className={classes.newsTypes}>
        {
            typesToRender.map((item,key)=>{
                return (
                    <Button onClick={()=>{alert(item)}} key={key} className={classes.buttonStyle} variant="outlined">
                        {item}
                    </Button>
                )
            })
        }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            padding:3,
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
        }
    }),
);