"use client"

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Counter = styled.span`
  color: #fff;
  background-color: #333333;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  padding: 0 0.5rem;
`

export const CompletedTasks = styled.p`
  font-weight: bold;
  color: #8284FA;
`

export const CompletedAndCreatedTasksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`

export const CreatedTasks = styled.p`
  font-weight: bold;
  color: #4EA8DE;
`