import { GetStaticProps } from "next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {HeaderNews} from "../../layouts/components"
import NewLineText from "../../layouts/components/NewLineText"
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
export default function Index({news}) {
    const classes = useStyles();
    return <DefaultLayout>
       <HeaderNews/>
        <div className={classes.imgContainer}>
            <img className={classes.img} src={"https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/01/articles/main/20210109_eup503.jpg"}/>
        </div>
        <div className={classes.allInfo}>
            <div className={classes.dateContainer}>
                <p className={classes.date}>Jan 6th 2021</p>
                <p className={classes.viewsReads}>O views</p>
                <p className={classes.viewsReads}>O reads</p>
            </div>
            <NewLineText
                style={{width:'60%',fontSize:20}}
                text={"The Rev. Raphael Warnock, a Democrat, said that his projected victory in one of Georgia's dual U.S. Senate runoffs is a \"historic moment,\" adding that he \"can't wait\" to be in the upper chamber of Congress \"to represent the concerns of ordinary people.\"\r\n\"I'm deeply honored that the people of Georgia decided to place their faith in me and have decided to send me to represent their interests in Washington, D.C.,\" Warnock told ABC News Chief Anchor George Stephanopoulos in an interview Wednesday on \"Good Morning America.\"\r\n\"Certainly this is a historic moment and I'm just deeply grateful to be a vessel in a moment in which we're facing such large problems in our country, and I can't wait to get to the U.S. Senate to represent the concerns of ordinary people,\" he added.\r\nJust before 2 a.m. Wednesday, ABC News projected that Warnock will prevail over incumbent Republican Sen. Kelly Loeffler, who was appointed to her seat by Gov. Brian Kemp in December 2019 to serve when Sen. Johnny Isakson retired until a special election was held to determine who would serve until his term ends in Jan. 2023.\r\nWarnock, senior pastor of Atlanta's Ebenezer Baptist Church, the former pulpit of the Rev. Martin Luther King Jr., is the first Black senator Georgia has elected and only the 11th Black senator elected in the country's history.\r\n\"Georgia is in such an incredible place when you think about the arc of our history, we are sending an African-American pastor of Ebenezer Baptist church where Martin Luther King Jr. served,\" he said. \"This is the reversal of the old southern strategy that sought to divide people. In this moment we've got to bring people together in order to do the hard work and I look forward to doing that.\"\r\nHis win is also history-defying because it marks the first time a Democrat has won a statewide runoff election in Georgia in 30 years. Stephanopoulos asked Warnock what impact he thought President Donald Trump's constant questioning of the general election results and rhetoric that it was \"rigged\" had on his runoff campaign.\r\nGOP concerns mounted early, and never subsided before the election, that Trump's rhetoric of a \"rigged\" election would suppress Republican voters from coming out. Loeffler and the other GOP candidate competing in a runoff, former Sen. David Perdue, were in lockstep with the president through the two-month sprint to the runoff.\r\nWarnock said he would leave it to the \"pundits who slice and dice\" to pontificate on that, telling Stephanopoulos that he's \"really focused on the people here in this state.\"\r\n\"The Senate should have approved the $2,000 stimulus last week. People are really struggling,\" he said.\r\nAsked what his number one goal for this year in the Senate was, Warnock said, as he had throughout his campaign, that the country needs to get the coronavirus pandemic under control.\r\n\"Like so many Americans as we witnessed the incredible death toll over 350,000 Americans lost lives, lost livelihoods, we need a national strategy that takes this virus seriously, that gets the vaccine distributed safely and efficiently,\" he said. \"We've got to re-open our economy, get our kids safely back to school and we got to make sure that people know that they will have their health care, particularly in the middle of a pandemic.\"\r\nWhile ABC News determined the race between Perdue and Democrat Jon Ossoff, a 33-year-old investigative journalist and media executive, was too close to project when the network called Warnock's race, since then Ossoff's lead over Perdue has grown.\r\nWith 98% of the expected vote reporting, Ossoff was leading by 16,370 votes -- even greater than Biden's 11,779 vote margin over Trump in the November, when he became the first Democrat to win the state's electoral votes since 1992.\r\nIf the margin, which is currently just 0.4% of all votes cast in the race, remains less than 0.5%, Perdue would be entitled to request a machine recount after the results are certified.\r\n"}
            />
            {/* <p className={classes.allInfoText}>The Rev. Raphael Warnock, a Democrat, said that his projected victory in one of Georgia's dual U.S. Senate runoffs is a \"historic moment,\" adding that he \"can't wait\" to be in the upper chamber of Congress \"to represent the concerns of ordinary people.\"\r\n\"I'm deeply honored that the people of Georgia decided to place their faith in me and have decided to send me to represent their interests in Washington, D.C.,\" Warnock told ABC News Chief Anchor George Stephanopoulos in an interview Wednesday on \"Good Morning America.\"\r\n\"Certainly this is a historic moment and I'm just deeply grateful to be a vessel in a moment in which we're facing such large problems in our country, and I can't wait to get to the U.S. Senate to represent the concerns of ordinary people,\" he added.\r\nJust before 2 a.m. Wednesday, ABC News projected that Warnock will prevail over incumbent Republican Sen. Kelly Loeffler, who was appointed to her seat by Gov. Brian Kemp in December 2019 to serve when Sen. Johnny Isakson retired until a special election was held to determine who would serve until his term ends in Jan. 2023.\r\nWarnock, senior pastor of Atlanta's Ebenezer Baptist Church, the former pulpit of the Rev. Martin Luther King Jr., is the first Black senator Georgia has elected and only the 11th Black senator elected in the country's history.\r\n\"Georgia is in such an incredible place when you think about the arc of our history, we are sending an African-American pastor of Ebenezer Baptist church where Martin Luther King Jr. served,\" he said. \"This is the reversal of the old southern strategy that sought to divide people. In this moment we've got to bring people together in order to do the hard work and I look forward to doing that.\"\r\nHis win is also history-defying because it marks the first time a Democrat has won a statewide runoff election in Georgia in 30 years. Stephanopoulos asked Warnock what impact he thought President Donald Trump's constant questioning of the general election results and rhetoric that it was \"rigged\" had on his runoff campaign.\r\nGOP concerns mounted early, and never subsided before the election, that Trump's rhetoric of a \"rigged\" election would suppress Republican voters from coming out. Loeffler and the other GOP candidate competing in a runoff, former Sen. David Perdue, were in lockstep with the president through the two-month sprint to the runoff.\r\nWarnock said he would leave it to the \"pundits who slice and dice\" to pontificate on that, telling Stephanopoulos that he's \"really focused on the people here in this state.\"\r\n\"The Senate should have approved the $2,000 stimulus last week. People are really struggling,\" he said.\r\nAsked what his number one goal for this year in the Senate was, Warnock said, as he had throughout his campaign, that the country needs to get the coronavirus pandemic under control.\r\n\"Like so many Americans as we witnessed the incredible death toll over 350,000 Americans lost lives, lost livelihoods, we need a national strategy that takes this virus seriously, that gets the vaccine distributed safely and efficiently,\" he said. \"We've got to re-open our economy, get our kids safely back to school and we got to make sure that people know that they will have their health care, particularly in the middle of a pandemic.\"\r\nWhile ABC News determined the race between Perdue and Democrat Jon Ossoff, a 33-year-old investigative journalist and media executive, was too close to project when the network called Warnock's race, since then Ossoff's lead over Perdue has grown.\r\nWith 98% of the expected vote reporting, Ossoff was leading by 16,370 votes -- even greater than Biden's 11,779 vote margin over Trump in the November, when he became the first Democrat to win the state's electoral votes since 1992.\r\nIf the margin, which is currently just 0.4% of all votes cast in the race, remains less than 0.5%, Perdue would be entitled to request a machine recount after the results are certified.\r\n</p> */}
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
            height:'100%',
            borderRadius:5
        },
        allInfo:{
            marginTop:'2%',
            width:'100%',
            display:'flex',
            justifyContent:'center',
        },
        allInfoText:{
            width:'60%',
            fontSize:20,
        },
        date:{
            color:'#525252',
            fontWeight:'-moz-initial'
        },
        dateContainer:{
            width:'20%',
        },
        viewsReads:{
            color:'#525252',
            fontSize:'80%',
            fontWeight:'-moz-initial'
        }
    })
);