import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetup = () => {
  const router = useRouter();

  const onSubmitHandler = async (newData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Moga Village | Issue Quest</title>
        <meta
          name="description"
          content="Issue a new Guild Quest to Moga Village."
        />
      </Head>
      <NewMeetupForm onAddMeetup={onSubmitHandler} />
    </>
  );
};

export default NewMeetup;
