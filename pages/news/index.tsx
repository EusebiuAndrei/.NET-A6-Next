import classes from "*.module.css";
import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../../layouts/components"
import ApiService from "../../lib/services/ApiService";

export default function Index({news}) {
    return(
    <DefaultLayout>
        <NewsTypes/>
        <FirstNews/>
        <NewsSection/>
    </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await ApiService.getNews();

    return {
        props: {
            news: data
        }
    }

}