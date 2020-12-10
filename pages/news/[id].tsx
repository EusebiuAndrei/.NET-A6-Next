import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Index({news}) {
    return <DefaultLayout>
        <h1>{news.title}</h1>
        <p>{news.text}</p>
    </DefaultLayout>
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    // const paths = posts.map((post) => `/posts/${post.id}`)

    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } }
    ]

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            news: { title: 'a', text: 'abcd' }
        }
    }
}