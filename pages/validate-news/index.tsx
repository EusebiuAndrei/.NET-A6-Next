
import { GetStaticProps} from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {Typography} from "@material-ui/core";
import {ValidateNews} from "../../layouts/components/validate-news";

export default function Index() {
    return(
        <DefaultLayout>
            <ValidateNews />
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
        }
    }

}
