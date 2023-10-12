import { tasks } from "./tasks";
import { useState } from "react";

console.log(tasks);

function TaskList() {
  useState[(tasks, setTasks)] = useState(tasks);

  if(tasks.length === 0) {
    return <h1>No hay tareas aun</h1>
  }

  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList;
