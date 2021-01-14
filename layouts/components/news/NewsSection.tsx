import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import Metrics from "../../../themes/Metrics"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import { Chip,Grid,Button,Box } from '@material-ui/core';
import Link from 'next/link'
import {capitalizeFirstLetter,getRandomColor,getFirstWordsNews} from "../../../lib/services/StringHelpers";
import {Visibility,ChromeReaderMode} from '@material-ui/icons'
import moment from 'moment';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import CheckIcon from '@material-ui/icons/Check';

export default function NewsSection({news}) {
    const classes = useStyles();
    return(
        <Grid 
            container
            direction="row"
            justify="center"
            alignItems="baseline"
        >
        {
            news.map((item:any,key1:any)=>{
                return(
                    <Link href={"/news/"+item.id} key={key1}>
                        <Box className={classes.containerNews}>
                            <Chip 
                                label={capitalizeFirstLetter(item.topic.name)} 
                                size="small" 
                                className={classes.chip}
                                style={{backgroundColor:getRandomColor()}}
                            />
                            <div className={classes.titleContainer}>
                                <p className={classes.title}>{getFirstWordsNews(item.title,10)}</p>
                            </div>
                            {
                                item.sourceImage === "" ? null : 
                                    <Button className={classes.imgContainer}>
                                        <img className={classes.image} src={item.sourceImage}/>                                
                                    </Button>
                            }
                            <p className={classes.description}>{getFirstWordsNews(item.text,40)}...</p>
                            <div className={classes.infos}>
                                <div className={classes.infoContainer}>
                                    <Visibility className={classes.icon}/>
                                    <p className={classes.textInfo}>{item.views} views</p>
                                </div>
                                <div className={classes.infoContainer}>
                                    <ChromeReaderMode className={classes.icon}/>
                                    <p className={classes.textInfo}>{item.read} reads</p>
                                </div>
                                <p className={classes.date}>{moment(item.date).calendar()}</p>
                                {
                                    item.classifiedAs === 0?
                                    <div className={classes.classifiedContainer}>
                                        <PriorityHighIcon className={classes.errorIcon}/>
                                        <p className={classes.errorText}>Fake</p>
                                    </div> : 
                                    <div className={classes.classifiedContainer}>
                                        <CheckIcon className={classes.tickIcon}/>
                                        <p className={classes.successText}>Verified</p>
                                    </div>
                                }
                            </div>
                        </Box>
                    </Link>
                )
            })
        }
        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerNews:{
            padding:'1%',
            width:'30%',
            
        },
        titleContainer:{
            width:'100%',
            height:50,
            marginTop:'2%',
            display:'flex',
            alignItems:'center',
        },
        title:{
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            fontWeight:'bold',
            fontSize:'100%',
            padding:0,
        },
        description:{
            marginTop:'2%',
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            color:Colors.DarkGray,
        },
        chip:{
            marginRight:'2%',
            color:Colors.White
        },
        image:{
            width:'100%',
            height:'100%',
            borderRadius:Metrics.defaultBorderRadius
        },
        imgContainer:{
            width:'100%',
            height:'100%',
            marginTop:'1%',
            backgroundColor:Colors.UltraLightGray,
            ...Styles.center,
            padding:'3%',
            borderRadius:Metrics.defaultBorderRadius
        },
        infoContainer:{
            display:'flex',
            flexDirection:'row',
        },
        infos:{
            display:'flex',
            flexDirection:'row',
            width:'95%',
            justifyContent:'space-between',
            alignItems:'center'
        },
        icon:{
            color:Colors.SecondLightGray,
            fontSize:23
        },
        textInfo:{
            display:'flex',
            marginLeft:5,
            fontSize:'90%',
            color:Colors.SecondLightGray,
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
        },
        date:{
            fontSize:'80%',
            color:Colors.SecondLightGray,
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
        },
        classifiedContainer:{
            display:'flex',
            flexDirection:'row',
            borderWidth:'2px solid red',
            backgroundColor:Colors.White,
            borderColor:Colors.Red,
            borderRadius:25,
            justifyContent:'center',
        },
        errorIcon:{
            color:Colors.Red
        },
        errorText:{
            color:Colors.Red,
            fontSize:15,
        },
        tickIcon:{
            color:Colors.SuccessGreen,
        },
        successText:{
            color:Colors.SuccessGreen,
            fontSize:15,
            top:3
        }
    }),
);