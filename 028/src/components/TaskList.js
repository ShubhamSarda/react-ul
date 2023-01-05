import { useState } from 'react';
import { TaskCard } from './TaskCard';
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = () => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
        <ul>
            <div className='header'>
                <h1>TaskList</h1>
                <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
            </div>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
    </section>
  )
}
