import { RadixCheckbox, TaskContainer, TaskText, TrashButton } from "./styles"

export const Task = ({ taskText }: {taskText: string} ) => {
  return (
    <TaskContainer>
      <RadixCheckbox />
      <TaskText>{taskText}</TaskText>
      <TrashButton />
    </TaskContainer>
  )
}