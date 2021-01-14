
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import React from 'react';
import { makeStyles , createStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from "next/link"
export default function RecommandationNews({latestNews}) {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                {
                    latestNews.map((value,key) => (
                        <Grid key={key} item>
                            <Link href={"/news/"+value.id}>
                                <Button className={classes.paper}>
                                    <img className={classes.img} src={value.sourceImage}/>
                                </Button>
                            </Link>
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
        display:'flex',
        height:55
    }
  }));