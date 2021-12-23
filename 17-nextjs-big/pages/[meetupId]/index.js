import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

const MeetupDetails = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta
          name="description"
          content="Visualize all details pertaining to this guild quest."
        />
      </Head>
      <MeetupDetail
        image={meetupData.image}
        title={meetupData.title}
        address={meetupData.address}
        description={meetupData.description}
      />
    </>
  );
};

const MONGO_CONNECTION =
  "mongodb+srv://ciarlini-nextjs-demo:4j8IedfvzvZ1WHkb@ciarlini-cluster-for-ne.3neug.mongodb.net/meetups?retryWrites=true&w=majority";

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(MONGO_CONNECTION);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup._id.toString() },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(MONGO_CONNECTION);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetupData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        image: meetupData.image,
        address: meetupData.address,
        description: meetupData.description,
      },
    },
  };
};

export default MeetupDetails;
