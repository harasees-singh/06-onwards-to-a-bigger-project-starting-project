import { useEffect, useState } from 'react'
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

const HomePage = props => {
    return <MeetupList meetups={props.meetups} />
}
export const getStaticProps = async () => {
    // static generation
    // this code is executed during the build process (and not on client side)
    const client = await MongoClient.connect(
        'mongodb+srv://charmi:seaways@next-app.i4aeslb.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map( (meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 3600, // regenerate dis page on the server every hour 
    }
}

export default HomePage;