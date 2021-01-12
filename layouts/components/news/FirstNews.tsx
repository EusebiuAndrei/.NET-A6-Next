import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Colors} from "../../../themes/Colors"
import {Images} from "../../../themes/Images"
import {Styles} from "../../../themes/ApplicationStyles"
import {customTheme,DEFAULT_THEME} from "../../../themes/Fonts"
import {Carousel} from 'react-bootstrap'
import {getFirstWordsNews} from "../../../lib/services/StringHelpers"
const INTERVAL = 1000
export default function FirstNews({news}) {
    const classes = useStyles();
    return(
            <Carousel className={classes.firstNewsContainer}>
                
                {
                    news.map((item,key)=>{
                        return(
                            <Carousel.Item key={key} interval={INTERVAL}>
                                <div className={classes.imageContainer}>
                                    <Box className={classes.boxStyle} boxShadow={4}>
                                        <img 
                                            className={classes.imgStyle}
                                            src={item.sourceImage === "" ? Images.DefaultNewsImage : item.sourceImage}
                                        />
                                    </Box>
                                </div>
                                <Carousel.Caption>
                                <h1 className={classes.title}>
                                    {item.title}
                                </h1>
                                <p className={classes.subTitle}>
                                    {getFirstWordsNews(item.text,30)}
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        firstNewsContainer:{
            width:'100%',
            height:'80%',
            marginBottom:'8%',
            marginTop:'0.1%'
        },
        imageContainer:{
            width:'100%',
            height:600,
            ...Styles.center,
        },
        boxStyle:{
            width:'100%',
            height:'100%',
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