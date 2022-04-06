import styled from "styled-components/native";
import { ContainerProps } from "./types";

export const Container = styled.View<ContainerProps>`
  flex: 1;
  width: ${({ width }) => width || 0}px;
  height: ${({ height }) => height || 0}px;
`;
