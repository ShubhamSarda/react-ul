import "./TaskCard.css";
import styles from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li className={ task.completed ? "completed" : "incomplete" }>
          <span className={styles.title}>{task.id} - {task.name}</span>
          <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
      </li>
    </div>
  )
}
