"use client"

import { TaskContainer, TaskText, TrashButton } from "./styles"
import { Checkbox } from './components/Checkbox/index'
import { TrashSimple } from "phosphor-react"

export const Task = ({ taskText }: {taskText: string} ) => {
  return (
    <TaskContainer>
      <Checkbox />
      <TaskText>{taskText}</TaskText>
      <TrashButton><TrashSimple size={16}/></TrashButton>
    </TaskContainer>
  )
}