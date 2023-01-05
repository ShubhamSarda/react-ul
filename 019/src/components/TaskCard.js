export const TaskCard = ({ task, handleDelete, concept }) => {
  return (
    <li className={task.completed ? "completed" : "incomplete"}>
        <span>{task.id} - {task.name} - {concept}</span>
        <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
  )
}
