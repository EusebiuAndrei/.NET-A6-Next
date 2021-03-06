import { GetStaticProps } from "next";
import {useState} from 'react'
import DefaultLayout from "../../layouts/DefaultLayout";
import {NewsSection,NewsTypes} from "../../layouts/components"
import NewLineText from "../../layouts/components/NewLineText"
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ApiService from "../../lib/services/ApiService";
import { useRouter } from 'next/router'
import {Colors} from "../../themes/Colors"
export default function Index({news,topics,topicName}) {
    const classes = useStyles();
    const router = useRouter()
    const { id } = router.query

    return <DefaultLayout>
        <NewsTypes
            topics={topics}
            currentTopic={id}
        />
        {/* <div className={classes.container}>
            <div className={classes.title}/>
            <p className={classes.bar}>{name}</p>
        </div> */}
        <NewsSection
            news={news}
        />    
        </DefaultLayout>
}

// This function gets called at build time
export async function getStaticPaths() {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } }
    ]
    return { paths, fallback: 'blocking' }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const news = await ApiService.getNewsByTopic(context.params.id);
    const topics = await ApiService.getTopics(context);
    return {
        props: {
            news,
            topics,
        }
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container:{
            width:'100%',
            marginTop:'2%'
        },
        bar:{
            width:'50%',
            height:5,
            backgroundColor:Colors.Black
        },
        title:{
            fontWeight:'bold',
            fontSize:20
        }
    })
);