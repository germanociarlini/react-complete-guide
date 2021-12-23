import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

const MONGO_CONNECTION =
  "mongodb+srv://ciarlini-nextjs-demo:4j8IedfvzvZ1WHkb@ciarlini-cluster-for-ne.3neug.mongodb.net/meetups?retryWrites=true&w=majority";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(MONGO_CONNECTION);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    return res.status(201).json({ message: "Meetup inserted successfully." });
  }
};

export default handler;
