import MeetupList from "../components/meetups/MeetupList";

const DUMMY_QUESTS = [
  {
    id: "1",
    title: "Fisherman's Fiend",
    image:
      "https://cdna.artstation.com/p/assets/images/images/017/908/210/medium/daniel-choo-lagiacrus-monster-hunter-tyvik.jpg?1557815007",
    address: "Deserted Island (D)",
    description: "Hunt a Lagiacrus.",
  },
  {
    id: "2",
    title: "Leading the Charge",
    image:
      "https://i.pinimg.com/originals/6d/f4/34/6df434a41c48ff2afc977bbb99de5c6c.jpg",
    address: "Sandy Plains (D)",
    description: "Hunt a Barroth.",
  },
  {
    id: "3",
    title: "The Lost Expedition",
    image:
      "https://1.bp.blogspot.com/-dzV3u4ZM4eI/W7DRPUH0lyI/AAAAAAAABJY/UzCBUOSU5a83roe1LUg-Q069Q0J_lbnwACLcBGAs/w1200-h630-p-k-no-nu/monsterhunter-1538313849079-4433.jpg",
    address: "Tundra (N)",
    description: "Hunt a Barioth.",
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_QUESTS} />;
};

export default Home;
