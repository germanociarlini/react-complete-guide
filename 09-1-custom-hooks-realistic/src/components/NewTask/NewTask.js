import useFetch from "../hooks/use-fetch";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { fetchData, error, isLoading } = useFetch();
  const url =
    "https://react-the-complete-guide-e2ab6-default-rtdb.firebaseio.com/tasks.json";

  const enterTaskHandler = async (taskText) => {
    const data = await fetchData(url, {
      method: "POST",
      body: JSON.stringify({ text: taskText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const generatedId = data.name;
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
