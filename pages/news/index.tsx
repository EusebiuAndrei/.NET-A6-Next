import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Index({news}) {
    return <DefaultLayout>
        <h1>Hello world! {news[0].title}</h1>
    </DefaultLayout>
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            news: [{ title: 'a', text: 'abcd' }]
        }
    }
}