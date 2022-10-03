import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'
import Head from 'next/Head'

const HomePage = props => {
    return <>
        <Head>
            <title>NEXT Meetups</title>
            <meta name='description'>Browse a huge list of emilia clarke photos</meta>
        </Head>
        <MeetupList meetups={props.meetups} />
    </>
}
export const getStaticProps = async () => {
    // static generation
    // this code is executed during the build process (and not on client side)
    const mongoEndPoint = 'mongodb://charmi:seaways@ac-soqalfs-shard-00-00.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-01.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-02.i4aeslb.mongodb.net:27017/?ssl=true&replicaSet=atlas-q69fl0-shard-0&authSource=admin&retryWrites=true&w=majority'
    const client = await MongoClient.connect(
        mongoEndPoint
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 3, // regenerate dis page on the server every hour 
    }
}

export default HomePage;