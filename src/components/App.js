import React,{useState}  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const onDeleteTask = (deletedTask) => {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  }

  const filteredTasks = tasks.filter((task) => (
    selectedCategory === "All" || task.category===selectedCategory
  ))

  const createNewTask = ({newTask}) => {
    setTasks([...tasks,newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onselectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All" )} onTaskFormSubmit={createNewTask}/>
      <TaskList tasks={filteredTasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;