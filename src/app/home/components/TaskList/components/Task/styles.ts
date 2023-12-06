"use client"

import { Checkbox } from '@radix-ui/themes'
import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  background-color: #262626;
  flex-direction: row;
  padding: 1.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 2px solid #333333;
`

export const RadixCheckbox = styled(Checkbox)`
  color: #4EA8DE;
`

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
`

export const TaskText = styled.p`
  color: #F2F2F2;
`