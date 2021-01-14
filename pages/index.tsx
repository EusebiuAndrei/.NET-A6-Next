import classes from "*.module.css";
import { GetStaticProps } from "next";
import DefaultLayout from "../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../layouts/components"
import ApiService from "../lib/services/ApiService";
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

export const getStaticProps: GetStaticProps = async (context) => {
    const news = await ApiService.getNews(context);
    const topics = await ApiService.getTopics(context);
    const latestNews = await ApiService.latestNews(context);
    return {
        props: {
            news,
            topics,
            latestNews
        }
    }

}