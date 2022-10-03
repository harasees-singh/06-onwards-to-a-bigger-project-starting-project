import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
const Meetup = (props) => {
    return <MeetupDetail
        {...props.meetupData}
    />
}
export default Meetup;

export const getStaticPaths = async () => {
    const mongoEndPoint = 'mongodb://charmi:seaways@ac-soqalfs-shard-00-00.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-01.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-02.i4aeslb.mongodb.net:27017/?ssl=true&replicaSet=atlas-q69fl0-shard-0&authSource=admin&retryWrites=true&w=majority'
    const client = await MongoClient.connect(
        mongoEndPoint
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup) => {
            return {
                params: {
                    meetupId: meetup._id.toString(),
                }
            }
        })
    }
}
export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    const mongoEndPoint = 'mongodb://charmi:seaways@ac-soqalfs-shard-00-00.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-01.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-02.i4aeslb.mongodb.net:27017/?ssl=true&replicaSet=atlas-q69fl0-shard-0&authSource=admin&retryWrites=true&w=majority'
    const client = await MongoClient.connect(
        mongoEndPoint
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: selectedMeetup.title,
                description: selectedMeetup.description,
                image: selectedMeetup.image,
            },
        },
    };
}
