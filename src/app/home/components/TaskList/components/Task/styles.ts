"use client"

import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  background-color: #262626;
  padding: 1.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 2px solid #333333;
`

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: #808080;
  cursor: pointer;
`

export const TaskText = styled.p`
  color: #F2F2F2;
`