import classes from "*.module.css";
import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../../layouts/components"
import ApiService from "../../lib/services/ApiService";
import authReqHeader from "../../lib/authRequestHeaders";
import authorize from "../../lib/authorize";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {isAuthorized, redirectObject} = authorize(context);
    if (!isAuthorized) return redirectObject;

    const news = await ApiService.getNews(authReqHeader(context));
    const topics = await ApiService.getTopics(authReqHeader(context));
    return {
        props: {
            news,
            topics
        }
    }

}
