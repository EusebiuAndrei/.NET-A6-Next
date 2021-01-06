import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {HeaderNews} from "../../layouts/components"
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default function Index({news}) {
    const classes = useStyles();
    return <DefaultLayout>
       <HeaderNews/>
        <div className={classes.imgContainer}>
            <img className={classes.img} src={"https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/01/articles/main/20210109_eup503.jpg"}/>
        </div>

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
            news: [
                { 
                    title: 'a', text: 'abcd' 
                }
            ]
        }
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imgContainer:{
            width:'100%',
            height:'70%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        img:{
            width:'80%',
            height:'100%'
        }
    })
);