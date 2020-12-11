import classes from "*.module.css";
import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {FirstNews,NewsTypes} from "../../layouts/components"

export default function Index({news}) {
    return(
    <DefaultLayout>
        <FirstNews/>
        <NewsTypes/>
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