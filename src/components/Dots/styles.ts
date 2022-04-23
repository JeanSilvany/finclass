import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled.View<Props>`
  flex-direction: row;
  width: ${({ amount }) => amount * 10}px;
  justify-content: space-between;
`;

export const Dot = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.main};
  width: 4px;
  height: 4px;
  border-radius: 2px;
`;
