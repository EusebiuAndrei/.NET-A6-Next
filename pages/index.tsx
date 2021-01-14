import classes from "*.module.css";
import { GetServerSideProps, GetStaticProps } from "next";
import DefaultLayout from "../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../layouts/components"
import ApiService from "../lib/services/ApiService";
import authorize from "../lib/authorize";

export default function Index({news,topics,latestNews}) {
    return(
    <DefaultLayout>
        <NewsTypes
            topics={topics}
            currentTopic={null}
        />
        <FirstNews
            news={latestNews}
        />
        <NewsSection
            news={news}
        />
    </DefaultLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const {isAuthorized} = authorize(context);
    const news = await ApiService.getNews(context,isAuthorized);
    const topics = await ApiService.getTopics(context);
    const latestNews = await ApiService.latestNews(context,3);
    return {
        props: {
            news,
            topics,
            latestNews
        }
    }

}