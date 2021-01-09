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

const myNews = [
    {
        id:1,
        title:'Google outage: YouTube, Docs and Gmail knocked offline',
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1825A/production/_116060989_5dd578be-22b5-471c-b424-81e1689d570a.jpg",
        content:'The outage started shortly before noon UK time, lasting more than half an hour before services were restored.Users around the world reported problems with Gmail, Google Drive, the Android Play Store, Maps and more.',
        views:54,
        reads:100,
        types:["Politics","Sports","IT","Movies"]
    },
    {
        id:2,
        title:'Covid: London to move into tier 3 as infections rise',
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/6DF2/production/_116064182_3538e0ee-98fb-4dd1-8966-5a9ceeca22ca.jpg",
        content:'Parts of Essex and Hertfordshire are also reported to be entering tier three.Health Secretary Matt Hancock is expected to make a statement in the Commons shortly.The tier three restrictions would see pubs and restaurants forced to close except for takeaway services.',
        views:54,
        reads:100,
        types:["IT","Movies"]
    },
    {
        id:3,
        title:'Europa League: Man Utd face La Liga leaders Real Sociedad',
        image: "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/B096/production/_116060254_cityg.jpg",
        content:'The Manchester City legend moved to Sociedad last summer and will return to the city with his Spanish side.Arsenal face Portuguese giants Benfica and Premier League leaders Tottenham face Austrian side Wolfsberger.',
        views:54,
        reads:100,
        types:["IT"]
    },
    {
        id:4,
        title:'Is eating fish healthy?',
        image: "https://ychef.files.bbci.co.uk/1600x900/p091595d.webp",
        content:'We know of fish as a healthy food, but pregnant women are told to limit consumption. Do the health benefits of eating fish outweigh the risks, particularly as stocks grow more depleted?',
        views:54,
        reads:100,
        types:["Politics","Movies"]
    },
    {
        id:5,
        title:'The street art that expressed the world\'s pain',
        image: "https://ychef.files.bbci.co.uk/1600x900/p090x6ps.webp",
        content:'In 2020, murals in cities all over the globe gave voice to black protest and resistance. Arwa Haider explores the powerful graffiti art that memorialises George Floyd and others.',
        views:54,
        reads:100,
        types:["Sports"]
    },
    {
        id:6,
        title:'How clean is the air in your office?',
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5896/production/_115987622_gettyimages-476147011.jpg",
        content:'An unassuming Canadian, he is widely regarded as a leading global expert on healthier buildings, and specifically, the quality of their interior air.Due to the coronavirus pandemic, he says he has seen requests for his services from around the world soar tenfold this year.',
        views:54,
        reads:100,
        types:["Movies"]
    }
]


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
            news.map((item,key1)=>{
                return(
                    <Box className={classes.containerNews} key={key1}>
                        <Chip 
                            label={capitalizeFirstLetter(item.topic.name)} 
                            size="small" 
                            className={classes.chip}
                            style={{backgroundColor:getRandomColor()}}
                        />
                        <p className={classes.title}>{item.title}</p>
                        <Link href={"/news/"+item.id}>
                            <Button className={classes.imgContainer}>
                                <img className={classes.image} src={myNews[item.id%6].image}/>
                            </Button>
                        </Link>
                        <p className={classes.description}>{getFirstWordsNews(item.text,40)}</p>
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
                        </div>
                    </Box>
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
            width:'45%',
            
        },
        title:{
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            fontWeight:'bold',
            width:'100%',
            fontSize:'100%',
            padding:0
        },
        description:{
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
            marginTop:'3%',
            backgroundColor:Colors.UltraLightGray,
            ...Styles.center,
            padding:'3%',
            borderRadius:Metrics.defaultBorderRadius
        },
        infoContainer:{
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'center'
        },
        infos:{
            display:'flex',
            flexDirection:'row',
            width:'45%',
            justifyContent:'space-between',
            alignItems:'center'
        },
        icon:{
            color:Colors.SecondLightGray,
            fontSize:23
        },
        textInfo:{
            marginLeft:5,
            fontSize:'90%',
            color:Colors.SecondLightGray,
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
        },
        date:{
            fontSize:'80%',
            color:Colors.SecondLightGray,
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
        }
    }),
);