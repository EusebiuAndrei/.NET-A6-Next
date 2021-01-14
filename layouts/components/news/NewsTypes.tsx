import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function NewsTypes({topics,currentTopic}) {
    const classes = useStyles();
    return(
        <div className={classes.newsTypes}>
        {
            topics.map((item : any,key : any)=>{
                return (
                    <Link key={key} href={`/topic/${item.id}`}>
                        <Button 
                            key={key} 
                            className={currentTopic != item.id ? classes.buttonStyle : classes.buttonSelectedStyle } 
                            variant="outlined"
                        >
                            # {item.name}
                        </Button>
                    </Link>
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
            fontWeight:'bold',
            color:Colors.AppBarColor,
            borderWidth:0,
            padding:4,
            paddingLeft:6,
            paddingRight:6
        },
        buttonSelectedStyle:{
            backgroundColor:Colors.PrimaryColor,
            fontWeight:'bold',
            color:Colors.White,
            borderWidth:0,
            padding:4,
            paddingLeft:8,
            paddingRight:8
        }
    }),
);