import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const onSubmitHandler = (newData) => {
    console.log(newData);
  };

  return <NewMeetupForm onAddMeetup={onSubmitHandler} />;
};

export default NewMeetup;
