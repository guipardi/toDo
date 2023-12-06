"use client"

import Image from "next/image"
import emptyTaskListImage from '@/utils/images/emptyTaskList.svg'
import { Task } from "./components/Task"
import { TaskListContainer } from "./styles"
import { useState } from "react"

interface Task {
  taskText: string
}

export const TaskList = () => {
  const [taskList, setTaskList] = useState<Task[] | []>([])

  return (
    <TaskListContainer>
      {taskList.length > 0 ? (
        taskList.map((item: Task) => {
          return (
            <Task key={item.taskText} taskText={item.taskText}/>
          )
        })
      ) : (
        <Image src={emptyTaskListImage} alt="Nao há tarefas"/>
      )}
    </TaskListContainer>
  )
}