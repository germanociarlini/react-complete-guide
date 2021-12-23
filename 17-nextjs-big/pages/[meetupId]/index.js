import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({ meetupData }) => {
  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "1" } },
      { params: { meetupId: "2" } },
      { params: { meetupId: "3" } },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a meetup

  const { meetupId } = context.params;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://cdna.artstation.com/p/assets/images/images/017/908/210/medium/daniel-choo-lagiacrus-monster-hunter-tyvik.jpg?1557815007",
        title: "Fisherman's Fiend",
        address: "Deserted Island (D)",
        description: "Hunt a Lagiacrus",
      },
    },
  };
};

export default MeetupDetails;
