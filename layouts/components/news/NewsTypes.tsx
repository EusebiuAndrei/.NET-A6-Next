import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import Button from '@material-ui/core/Button';

export default function FirstNews({topics}) {
    const classes = useStyles();
    return(
        <div className={classes.newsTypes}>
        {
            topics.map((item,key)=>{
                return (
                    <Button onClick={()=>{alert(item.name)}} key={key} className={classes.buttonStyle} variant="outlined">
                        # {item.name}
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
            display:'flex',
            justifyContent:'space-between',
            borderTopWidth:1,
            borderTopColor:Colors.Black,
            padding:'1.5%',
        },
        buttonStyle:{
            borderWidth:0,
            borderBottomWidth:0.5,
            borderBottomColor:Colors.LightGray,
            padding:2,
            // fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            fontWeight:'bold',
            color:Colors.AppBarColor,
        }
    }),
);