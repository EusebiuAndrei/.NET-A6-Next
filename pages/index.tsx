import classes from "*.module.css";
import { GetServerSideProps, GetStaticProps } from "next";
import DefaultLayout from "../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../layouts/components"
import ApiService from "../lib/services/ApiService";
import authorize, {useAuthorization} from "../lib/authorize";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";

export default function Index({topics,latestNews}) {
    const {isAuthorized} = useAuthorization()

    const [userNews, setUserNews] = useState([])
    const info = useQuery('news', ApiService.getNews, {
        onSuccess(data) {
            if (!isAuthorized) {
                setUserNews(data.filter(news => news.classifiedAs === 1))
            } else {
                setUserNews(data)
            }
        }
    })

    console.log("LALALALALA", isAuthorized)
    console.log(info)
    console.log("STATE", userNews)

    useEffect(() => {
        if(!isAuthorized){
            if(info.data) {
                setUserNews(info.data.filter(news => news.classifiedAs === 1))
            }
        }
    }, [isAuthorized])

    useEffect(() => {
        setUserNews(info.data)
    }, [info.data])

    return(
    <DefaultLayout>
        <NewsTypes
            topics={topics}
            currentTopic={null}
        />
        <FirstNews
            news={latestNews}
        />
        {info.isLoading && <p>Loading...</p>}
        {info.isSuccess && <NewsSection
            news={userNews}
        />}
    </DefaultLayout>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    // const news = await ApiService.getNews(context);
    const topics = await ApiService.getTopics(context);
    const latestNews = await ApiService.latestNews(context,3);
    return {
        props: {
            // news,
            topics,
            latestNews
        }
    }

}