import React, { useEffect, useState, useCallback } from "react";
import useFetch from "./components/hooks/use-fetch";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const { fetchData, isLoading, error } = useFetch();

  const url =
    "https://react-the-complete-guide-e2ab6-default-rtdb.firebaseio.com/tasks.json";

  const fetchTasks = useCallback(async (taskText) => {
    const loadedTasks = [];
    const data = await fetchData(url);
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, [fetchData]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
