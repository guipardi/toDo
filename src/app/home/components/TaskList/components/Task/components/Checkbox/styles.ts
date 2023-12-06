"use client"

import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from 'styled-components';
import { violet, blackA } from '@radix-ui/colors';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px #000000;
  border: none;
  cursor: pointer;
  background-color: #5E60CE;
  &:focus {
    box-shadow: 0 0 0 2px #000;
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: #F2F2F2;
`;
