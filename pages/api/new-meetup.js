import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const mongoEndPoint = 'mongodb://charmi:seaways@ac-soqalfs-shard-00-00.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-01.i4aeslb.mongodb.net:27017,ac-soqalfs-shard-00-02.i4aeslb.mongodb.net:27017/?ssl=true&replicaSet=atlas-q69fl0-shard-0&authSource=admin&retryWrites=true&w=majority'
        const client = await MongoClient.connect(
            mongoEndPoint
        );
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}
export default handler;