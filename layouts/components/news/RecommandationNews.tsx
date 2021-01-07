
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import React from 'react';
import { makeStyles , createStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

export default function RecommandationNews() {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                {
                    myNews.map((value) => (
                        <Grid key={value} item>
                            <Button className={classes.paper}>
                                <img className={classes.img} src={value.image}/>
                            </Button>
                            <p className={classes.title}>{value.title}</p>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'100%',
      ...Styles.center,
    },
    container:{
        width:'80%',
        ...Styles.center
    },
    paper: {
      height: 200,
      width: 360,
    },
    control: {
      padding: theme.spacing(2),
    },
    img:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    },
    title:{
        width:350,
        fontWeight:'bold',
        fontSize:14,
        marginLeft:6,
        display:'flex'
    }
  }));