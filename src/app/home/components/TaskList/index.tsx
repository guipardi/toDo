import { Task } from "./components/Task"
import { TaskContainer } from "./components/Task/styles"
import { TaskListContainer } from "./styles"

export const TaskList = () => {
  const tasksOnList = [
    {taskText: 'Arrumar a casa'},
    {taskText: 'Lavar a louça'},
    {taskText: 'Guardar as compras'},
    {taskText: 'Regar as plantas'},
  ]

  return (
    <TaskListContainer>
      {tasksOnList.map((item) => {
        return (
          <Task key={item.taskText} taskText={item.taskText}/>
        )
      })}
    </TaskListContainer>
  )
}