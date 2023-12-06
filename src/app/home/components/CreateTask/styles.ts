"use client"
import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  background-color: #262626;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 6px;
  border: 1px solid black;
  color: #808080;
  font-size: 1rem;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  gap: 0.25rem;
  height: 3.25rem;
  width: 5.625rem;
  background-color: #1E6F9F;
  border: none;
  border-radius: 6px;
  color: #fff;
`