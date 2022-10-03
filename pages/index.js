import { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'Emilia Clarke',
        image: "https://images0.persgroep.net/rcs/ux89VsrCe5Pc464f9z5C2-6u15Q/diocontent/162443495/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8&desiredformat=webp",
        address: 'amritsar',
        description: 'some description',
    }
]
const HomePage = props => {
    return <MeetupList meetups={props.meetups} />
}
export const getStaticProps = async () => {
    // static generation
    // this code is executed during the build process (and not on client side)
    return {
        props: {
            meetups: DUMMY_DATA
        },
        revalidate: 3600, // regenerate dis page on the server every hour 
    }
}

export default HomePage;