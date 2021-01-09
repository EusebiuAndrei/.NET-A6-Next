import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import {Carousel} from 'react-bootstrap'
const INTERVAL = 1000
export default function FirstNews({}) {
    const classes = useStyles();
    return(
            <Carousel className={classes.firstNewsContainer}>
                <Carousel.Item interval={INTERVAL}>
                    <div className={classes.imageContainer}>
                        <Box className={classes.boxStyle} boxShadow={4}>
                            <img 
                                className={classes.imgStyle}
                                src="https://images.pexels.com/photos/902194/pexels-photo-902194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                        </Box>
                    </div>
                    <Carousel.Caption>
                    <h1 className={classes.title}>
                        The New York Times
                    </h1>
                    <p className={classes.subTitle}>
                        The New York Times is an American daily newspaper based in New York City with a worldwide influence and readership. Nicknamed "the Gray Lady", the Times has long been regarded within the industry as a national "newspaper of record". Founded in 1851, the paper has since won 130 Pulitzer Prizes, more than any other.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={INTERVAL}>
                    <div className={classes.imageContainer}>
                        <Box className={classes.boxStyle} boxShadow={4}>
                            <img 
                                className={classes.imgStyle}
                                src="https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/01/articles/main/20210109_usp513.jpg"
                            />
                        </Box>
                    </div>
                    <Carousel.Caption>
                    <h1 className={classes.title}>
                        Why Donald Trump will serve out his remaining term in office
                    </h1>
                    <p className={classes.subTitle}>
                        He deserves to be thrown out. But that does not suit those with the power to do so
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={INTERVAL}>
                    <div className={classes.imageContainer}>
                        <Box className={classes.boxStyle} boxShadow={0}>
                            <img 
                                className={classes.imgStyle}
                                src="https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20210109_BRP002_0.jpg"
                            />
                        </Box>
                    </div>
                    <Carousel.Caption>
                    <h1 className={classes.title}>
                        Britain’s vaccine roll-out races the covid-19 virus
                    </h1>
                    <p className={classes.subTitle}>
                        The new, more transmissible variant makes the stakes perilously high
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        firstNewsContainer:{
            width:'100%',
            height:'80%',
            display:'flex',
            flexDirection:'row',
            marginBottom:'2%'
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
            width:'100%',
            height:600,
            ...Styles.center,
        },
        boxStyle:{
            width:'100%',
            height:'90%',
        },
        imgStyle:{
            ...Styles.fill,
            objectFit:'cover',
        },
        title:{
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            textAlign:'center',
            fontSize:'200%',
            color:Colors.White,
            backgroundColor:Colors.BlackOpacity,
            padding:5,
            borderRadius:5
        },
        subTitle:{
            backgroundColor:Colors.BlackOpacity,
            color:Colors.White,
            fontSize:'110%',
            textAlign:'center',
            fontFamily:customTheme.typography.fontFamily[DEFAULT_THEME],
            padding:5,
            borderRadius:5
        },
    }),
);