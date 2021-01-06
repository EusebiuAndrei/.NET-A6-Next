import classes from "*.module.css";
import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../../layouts/components"
import ApiService from "../../lib/services/ApiService";

export default function Index({news,topics}) {
    return(
    <DefaultLayout>
        <NewsTypes
            topics={topics}
        />
        <FirstNews/>
        <NewsSection
            news={news}
        />
    </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const news = await ApiService.getNews();
    const topics = await ApiService.getTopics();
    return {
        props: {
            news,
            topics
        }
    }

}