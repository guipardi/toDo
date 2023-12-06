"use client"

import { PlusCircle } from "phosphor-react"
import { Container, Button, Input } from "./styles"

export const CreateTask = () => {
  return (
    <Container>
      <Input placeholder="Adicione uma tarefa" />
      <Button>Criar <PlusCircle size={16}/></Button>
    </Container>
  )
}