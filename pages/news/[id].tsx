import { GetStaticProps } from "next";
import React,{useState} from 'react'
import DefaultLayout from "../../layouts/DefaultLayout";
import {HeaderNews,RecommandationNews} from "../../layouts/components"
import NewLineText from "../../layouts/components/NewLineText"
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ApiService from "../../lib/services/ApiService";
import { useRouter } from 'next/router'
import moment from 'moment'
export default function Index({currentNews,latestNews}) {
    const [read,setRead] = React.useState(false)
    const classes = useStyles();
    const router = useRouter()
    const { id } = router.query

    const handleScroll = () => {

        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    
        if (bottom && !read) {
            console.log("READED!" + read)
            ApiService.addReadToNews(id);
            setRead(true)
        }
    };

    React.useEffect(() => {
        ApiService.addViewToNews(id);

        window.addEventListener('scroll', handleScroll, {
            passive: true
          });
      
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return <DefaultLayout>
       <HeaderNews
            title={currentNews.title}
            topic={currentNews.topic.name}
            source={currentNews.sourceLink}
            classifiedAs={currentNews.classifiedAs}
       />
        {
            currentNews.sourceImage === "" ? null : 
            <div className={classes.imgContainer}>
                <img className={classes.img} src={currentNews.sourceImage}/>
            </div>
        }
        <div className={classes.allInfo}>
            <div className={classes.dateContainer}>
                <p className={classes.date}>{moment(currentNews.date).calendar()}</p>
                <p className={classes.viewsReads}>{currentNews.views} views </p>
                <p className={classes.viewsReads}>{currentNews.read} reads</p>
            </div>
            <NewLineText
                style={{width:'60%',fontSize:20}}
                text={currentNews.text}
            />
        </div>
        <div className={classes.otherNews}>
            <p className={classes.otherNewsText}>Other news you might like</p>
            <p className={classes.recomandated}>Recommended by News Detection</p>
        </div>
        <RecommandationNews
            latestNews={latestNews}
        />
    </DefaultLayout>
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    // const paths = posts.map((post) => `/posts/${post.id}`)

    const paths = [
        // { params: { id: '1' } },
        // { params: { id: '2' } }
    ]

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const currentNews = await ApiService.getNewsById(context.params.id);
    const latestNews = await ApiService.latestNews(context,6);
    return {
        props: {
            currentNews,
            latestNews
        }
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imgContainer:{
            width:'100%',
            height:'90%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'2%'
        },
        img:{
            width:'80%',
            height:'100%',
            borderRadius:5
        },
        allInfo:{
            marginTop:'2%',
            width:'100%',
            display:'flex',
            justifyContent:'center',
        },
        allInfoText:{
            width:'60%',
            fontSize:20,
        },
        date:{
            color:'#525252',
            fontWeight:'-moz-initial'
        },
        dateContainer:{
            width:'20%',
        },
        viewsReads:{
            color:'#525252',
            fontSize:'80%',
            fontWeight:'-moz-initial'
        },
        otherNews:{
            marginTop:'3%',
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        },
        otherNewsText:{
            fontSize:'120%',
            fontWeight:'bold',
            width:'77%'
        },
        recomandated:{
            fontSize:'80%',
            width:'77%',
            color:'#9C9C9C'
        },

    })
);