export const ShowTask = () => {
    const tasks = [
        {id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030"},
        {id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030"},
        {id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030"},
    ]

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">0</span>
            </div>
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
            { tasks.map((task) => (
                <li>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                </li>
            )) }            
        </ul>
    </section>
  )
}
