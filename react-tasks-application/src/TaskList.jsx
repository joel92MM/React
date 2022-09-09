import TaskCard from './TaskCard'
function TaskList({ tasks }) {
    //  hacemos una condicion para si el arreglo esta vacio devolvemos algo y si no lo mostraremos
    if (tasks.length === 0) {
        return <h3>No hay tareas aún</h3>
    }
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;