import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const Home = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>Moga Village | Guild Quests</title>
        <meta
          name="description"
          content="Browse all Guild Quests issued to Moga Village."
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};

const MONGO_CONNECTION =
  "mongodb+srv://ciarlini-nextjs-demo:4j8IedfvzvZ1WHkb@ciarlini-cluster-for-ne.3neug.mongodb.net/meetups?retryWrites=true&w=majority";

export const getStaticProps = async () => {
  const client = await MongoClient.connect(MONGO_CONNECTION);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const rawMeetups = await meetupsCollection.find().toArray();
  const meetups = rawMeetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }));

  client.close();

  return {
    props: { meetups },
    revalidate: 1,
  };
};

export default Home;
