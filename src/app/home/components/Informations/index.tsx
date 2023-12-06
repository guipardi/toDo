import { CompletedTasks, Container, Counter, CreatedTasks, CompletedAndCreatedTasksContainer } from "./styles"

export const Informations = () => {
  return (
    <Container>
      <CompletedAndCreatedTasksContainer>
        <CreatedTasks>Tarefas Criadas</CreatedTasks>
        <Counter>0</Counter>
      </CompletedAndCreatedTasksContainer>
      <CompletedAndCreatedTasksContainer>
        <CompletedTasks>Concluídas</CompletedTasks>
        <Counter>0</Counter>
      </CompletedAndCreatedTasksContainer>
    </Container>
  )
}