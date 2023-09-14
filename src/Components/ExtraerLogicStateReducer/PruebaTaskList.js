import React, { useReducer } from "react";
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

let nextId = 3;
let initialTask = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
const PruebaTaskList = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);

  const handleAddTask = text => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  const handleChangeTask = task  => {
    dispatch({
      type: 'changed',
      task:task,
    })
  }

  const hadnleDeletTaask = taskId => {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }
  return (
    <div style={{border:'purple 2px solid'}}>
      <h1>Preuba de Task List</h1>

      <h2>Task list</h2>
      {/* <AddTask onAddTask={handleAddTask}/>
      <TaskList 
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeletedTask={hadnleDeletTaask}
      /> */}
    </div>
  );
};

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'added':{
      return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
      ];
    }
      
      case 'changed' :{
        return tasks.map(t => {
          return t.id === action.task.id ? action.task : t 
        });
      }
      case 'deleted' :{
        return tasks.filter( t => t.id !== action.id)
      }
      default: {
        throw Error('Unkonw action ' + action.type);
      }
  }
}

export default PruebaTaskList;
