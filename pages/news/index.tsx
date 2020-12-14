import classes from "*.module.css";
import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {FirstNews,NewsTypes,NewsSection} from "../../layouts/components"

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
    return {
        props: {
            news: [{ title: 'a', text: 'abcd' }]
        }
    }
}