
import { GetStaticProps} from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {Typography} from "@material-ui/core";

export default function Index() {
    return(
        <DefaultLayout>
            <Typography variant='body1'>Validate news</Typography>
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
        }
    }

}
